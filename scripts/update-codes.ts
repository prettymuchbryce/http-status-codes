/**
 * This script should be run after modifying codes.json
 * It regenerates codes.ts, and updates the table in README.md
 **/

// eslint-disable no-console
import fs from 'fs-extra';

import {
  Writers, VariableDeclarationKind, Project, StructureKind, EnumMemberStructure, OptionalKind,
} from 'ts-morph';

import markdownTable from 'markdown-table';

import Codes from '../codes.json';

interface jsonCodeComment {
  doc: string;
  description: string;
}

interface jsonCode {
  code: number;
  phrase: string;
  constant: string;
  comment: jsonCodeComment;
  isDeprecated?: boolean;
}

const run = async () => {
  console.log('Updating src/codes.ts');

  const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
  });

  // TODO @prettymuchbryce clean up these horribly unreadable one-liners
  const reasonPhraseMembers: OptionalKind<EnumMemberStructure>[] = Codes.map(({ phrase, constant, comment, isDeprecated }:jsonCode) => ({ name: constant, value: phrase, docs: [`${isDeprecated ? '@deprecated\n': ''}${comment.doc}\n\n${comment.description}`] }));
  const statusCodeMembers: OptionalKind<EnumMemberStructure>[] = Codes.map(({ code, constant, comment, isDeprecated }:jsonCode) => ({ name: constant, value: code, docs: [`${isDeprecated ? '@deprecated\n' : ''}${comment.doc}\n\n${comment.description}`] }));
  const statusCodeToReasonPhrase = Codes.reduce((acc, { code, phrase }) => { (acc as Record<string, string>)[`"${code.toString()}"`] = `"${phrase}"`; return acc; }, {});
  const reasonPhraseToStatusCode = Codes.reduce((acc, { code, phrase }) => { (acc as Record<string, number>)[`"${phrase}"`] = code; return acc; }, {});

  project.createSourceFile('src/codes.ts', {
    statements: [{
      kind: StructureKind.Enum,
      name: 'StatusCodes',
      isExported: true,
      members: statusCodeMembers,
    },
    {
      kind: StructureKind.Enum,
      name: 'ReasonPhrases',
      isExported: true,
      members: reasonPhraseMembers,
    },
    {
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

  await project.save();
  console.log('Successfully updated codes and generated src/codes.ts');
  console.log('Updating README.md table');

  let readmeFile = await fs.readFile('./README.md', 'utf8')
  const sortedCodes = Codes.sort((a:jsonCode, b:jsonCode) => { return (a.code - b.code) });

  const table = markdownTable([
    ['Code', 'Constant', 'Reason Phrase'],
    ...sortedCodes.map((code: jsonCode) => [code.code.toString(), code.constant, code.phrase]),
  ]);

  const readmeRegex = /## Codes\n\n([^#]*)##/g
  readmeFile = readmeFile.replace(readmeRegex, `## Codes \n\n${table}\n\n##`)

  fs.writeFile('./README.md', readmeFile);
  console.log('Successfully updated README.md table');
};

run();
