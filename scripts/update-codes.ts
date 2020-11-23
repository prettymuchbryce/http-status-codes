/* eslint-disable no-console */

/**
 * This script should be run after modifying codes.json
 * It regenerates codes.ts, and updates the table in README.md
 * */

import fs from 'fs-extra';

import {
  Project,
  StatementStructures,
  StructureKind,
  VariableDeclarationKind,
  Writers,
} from 'ts-morph';

import markdownTable from 'markdown-table';

import Codes from '../codes.json';

interface JsonCodeComment {
  doc: string;
  description: string;
}

interface JsonCode {
  code: number;
  phrase: string;
  constant: string;
  comment: JsonCodeComment;
  isDeprecated?: boolean;
}

const run = async () => {
  console.log('Updating src/codes.ts');

  const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
  });

  const reasonPhraseMembers: StatementStructures[] = Codes
    .map(({
      phrase, constant, comment, isDeprecated,
    }: JsonCode): StatementStructures => {
      const { doc, description } = comment;
      const deprecatedString = isDeprecated ? '@deprecated\n' : '';
      return {
        docs: [`${deprecatedString}${doc}\n\n${description}`],
        kind: StructureKind.VariableStatement,
        declarationKind: VariableDeclarationKind.Const,
        isExported: true,
        declarations: [{
          name: constant,
          initializer: `"${phrase}"`,
        }],
      };
    });

  const statusCodeMembers: StatementStructures[] = Codes
    .map(({
      code, constant, comment, isDeprecated,
    }: JsonCode): StatementStructures => {
      const { doc, description } = comment;
      const deprecatedString = isDeprecated ? '@deprecated\n' : '';
      return {
        docs: [`${deprecatedString}${doc}\n\n${description}`],
        kind: StructureKind.VariableStatement,
        declarationKind: VariableDeclarationKind.Const,
        isExported: true,
        declarations: [{
          name: constant,
          initializer: code.toString(),
        }],
      };
    });

  const statusCodeToReasonPhrase = Codes
    .reduce((acc: Record<string, string>, { code, phrase }) => {
      (acc as Record<string, string>)[`"${code.toString()}"`] = `"${phrase}"`;
      return acc;
    }, {});

  const reasonPhraseToStatusCode = Codes
    .reduce((acc: Record<string, number>, { code, phrase }) => {
      (acc as Record<string, number>)[`"${phrase}"`] = code;
      return acc;
    }, {});

  const statusCodeFile = project.createSourceFile('src/status-codes.ts', {
    statements: statusCodeMembers,
  },
  {
    overwrite: true,
  });

  const reasonPhraseFile = project.createSourceFile('src/reason-phrases.ts', {
    statements: reasonPhraseMembers,
  },
  {
    overwrite: true,
  });

  const utilsFile = project.createSourceFile('src/utils.ts', {
    statements: [{
      kind: StructureKind.VariableStatement,
      isExported: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [{
        name: 'statusCodeToReasonPhrase',
        type: 'Record<string, string>',
        initializer: Writers.object(statusCodeToReasonPhrase),
      }],
    },
    {
      kind: StructureKind.VariableStatement,
      isExported: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [{
        name: 'reasonPhraseToStatusCode',
        type: 'Record<string, number>',
        initializer: Writers.object(reasonPhraseToStatusCode),
      }],
    },
    ],
  },
  {
    overwrite: true,
  });

  [statusCodeFile, reasonPhraseFile, utilsFile].forEach((sf) => {
    sf.insertStatements(0, '// Generated file. Do not edit\n');
  });

  await project.save();
  console.log('Successfully updated codes and generated src/codes.ts');
  console.log('Updating README.md table');

  let readmeFile = await fs.readFile('./README.md', 'utf8');
  const sortedCodes = Codes.sort((a:JsonCode, b:JsonCode) => (a.code - b.code));

  const table = markdownTable([
    ['Code', 'Constant', 'Reason Phrase'],
    ...sortedCodes.map((code: JsonCode) => [code.code.toString(), code.constant, code.phrase]),
  ]);

  const readmeRegex = /## Codes\n\n([^#]*)##/g;
  readmeFile = readmeFile.replace(readmeRegex, `## Codes\n\n${table}\n\n##`);

  fs.writeFile('./README.md', readmeFile);
  console.log('Successfully updated README.md table');
};

run();
