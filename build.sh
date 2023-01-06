#!/bin/bash

cd github.io

npm run build

cd ..

rm -rf assets

mkdir assets

mv github.io/dist ./

mv dist/* .

mv dist/assets/* ./assets/*

rmdir dist