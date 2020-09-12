#!/bin/bash
rm -rf ./build
tsc --project tsconfig-cjs.json
tsc --project tsconfig-es.json
