/* eslint-disable no-console */

/**
 * This script should be run after modifying codes.json
 * It regenerates codes.ts, and updates the table in README.md
 * */

import fs from 'fs-extra';

import {
  Writers,
  VariableDeclarationKind,
  Project,
  StructureKind,
  EnumMemberStructure,
  OptionalKind,
  StatementStructures,
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

  const reasonPhraseMembers: OptionalKind<EnumMemberStructure>[] = Codes
    .map(({
      phrase, constant, comment, isDeprecated,
    }: JsonCode) => {
      const { doc, description } = comment;
      const deprecatedString = isDeprecated ? '@deprecated\n' : '';
      return {
        name: constant,
        value: phrase,
        docs: [`${deprecatedString}${doc}\n\n${description}`],
      };
    });

  const statusCodeMembers: OptionalKind<EnumMemberStructure>[] = Codes
    .map(({
      code, constant, comment, isDeprecated,
    }: JsonCode) => {
      const { doc, description } = comment;
      const deprecatedString = isDeprecated ? '@deprecated\n' : '';
      return {
        name: constant,
        value: code,
        docs: [`${deprecatedString}${doc}\n\n${description}`],
      };
    }).sort(({ value: aValue }, { value: bValue }) => aValue - bValue);

  const statusClassStatements: StatementStructures[] = ['Informational', 'Successful', 'Redirection', 'ClientError', 'ServerError'].map((className, i) => {
    const codesInRange = Codes.filter(
      (code) => code.code >= (100 * i + 100) && code.code < (100 * i + 200),
    );
    const codesAsTypeString = codesInRange.map((code) => `StatusCodes.${code.constant}`);
    const officialDocsString = `Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.${2 + i}`;
    const rangeDescriptorString = `Union of all status codes between ${100 * i + 100} and ${100 * i + 200}:`;
    const comprehensiveListOfTypes = '- '.concat(codesAsTypeString.join('\n- '));
    return {
      docs: [`${officialDocsString}\n\n${rangeDescriptorString}\n${comprehensiveListOfTypes}`],
      kind: StructureKind.TypeAlias,
      name: className,
      type: '\n| '.concat(codesAsTypeString.join('\n| ')),
      isExported: true,
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
    statements: [{
      kind: StructureKind.Enum,
      name: 'StatusCodes',
      isExported: true,
      members: statusCodeMembers,
    }],
  },
  {
    overwrite: true,
  });

  const statusClassFile = project.createSourceFile('src/status-classes.ts', {
    statements: [
      {
        kind: StructureKind.Namespace,
        name: 'StatusClasses',
        isExported: true,
        statements: statusClassStatements,
      },
    ],
  }, {
    overwrite: true,
  });
  statusClassFile.addImportDeclaration({
    namedImports: [
      {
        name: 'StatusCodes',
      },
    ],
    moduleSpecifier: './status-codes',
  });

  const reasonPhraseFile = project.createSourceFile('src/reason-phrases.ts', {
    statements: [
      {
        kind: StructureKind.Enum,
        name: 'ReasonPhrases',
        isExported: true,
        members: reasonPhraseMembers,
      },
    ],
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

  [statusCodeFile, statusClassFile, reasonPhraseFile, utilsFile].forEach((sf) => {
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
