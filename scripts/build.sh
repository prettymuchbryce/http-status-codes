#!/bin/bash
rm -rf ./build
rm -rf ./build-tmp
tsc --project tsconfig-build.json
ncc build ./build-tmp/index.js -o ./build/cjs
cat ./build-tmp/index.d.ts >> ./build-tmp/codes.d.ts
# Because we are concatting .d.ts files, we need to remove all imports of codes.ts from index.ts
sed -i.old '/^import/d' ./build-tmp/codes.d.ts
# as well as exports that already exist within codes.ts
sed -i.old '/^export { StatusCodes, ReasonPhrases, }/d;' ./build-tmp/codes.d.ts
mv ./build-tmp/codes.d.ts ./build/cjs/index.d.ts
rm -rf ./build-tmp
tsc --project tsconfig-build.json
mv ./build-tmp ./build/es/
