#!/bin/bash
tsc --project tsconfig-build.json
ncc build ./build-tmp/index.js -o ./build
cat ./build-tmp/codes.d.ts >> ./build-tmp/index.d.ts
mv ./build-tmp/index.d.ts ./build
rm -rf ./build-tmp
