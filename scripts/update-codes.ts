/* eslint-disable no-console */

/**
 * This script should be run after modifying codes.json
 * It regenerates codes.ts, and updates the table in README.md
 * */

import fs from 'fs-extra';

import {
  EnumMemberStructure,
  OptionalKind,
  Project,
  SourceFile,
  StructureKind,
  VariableDeclarationKind,
  VariableStatement,
  VariableStatementStructure,
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

  const statusCodeMembers: OptionalKind<VariableStatementStructure>[] = Codes
    .map(({
      code, constant, comment, isDeprecated,
    }: JsonCode):OptionalKind<VariableStatementStructure> => {
      const { doc, description } = comment;
      const deprecatedString = isDeprecated ? '@deprecated\n' : '';
      return {
        isExported: true,
        declarationKind: VariableDeclarationKind.Const,
        docs: [`${deprecatedString}${doc}\n\n${description}`],
        declarations: [{
          name: constant,
          type: 'string',
          initializer: `"${code}"`,
        }],
      };
    });

  const reasonPhraseMembers: OptionalKind<VariableStatementStructure>[] = Codes
    .map(({
      phrase, constant, comment, isDeprecated,
    }: JsonCode):OptionalKind<VariableStatementStructure> => {
      const { doc, description } = comment;
      const deprecatedString = isDeprecated ? '@deprecated\n' : '';
      return {
        isExported: true,
        declarationKind: VariableDeclarationKind.Const,
        docs: [`${deprecatedString}${doc}\n\n${description}`],
        declarations: [{
          name: constant,
          type: 'string',
          initializer: `"${phrase}"`,
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

  const statusCodesFile = project.createSourceFile('src/status-codes.ts', {}, { overwrite: true });
  statusCodesFile.addVariableStatements(statusCodeMembers);

  const reasonPhrasesFile = project.createSourceFile('src/reason-phrases.ts', {}, { overwrite: true });
  reasonPhrasesFile.addVariableStatements(reasonPhraseMembers);

  const helpersFile = project.createSourceFile('src/helpers.ts', {
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

  [statusCodesFile, reasonPhrasesFile, helpersFile].forEach((s) => {
    s.insertStatements(0, '// Generated file. Do not edit\n');
  });

  await project.save();
  console.log('Successfully updated codes and generated source files');
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
