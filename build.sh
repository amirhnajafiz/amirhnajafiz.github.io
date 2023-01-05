#!/bin/bash

cd github.io

npm run build

cd ..

mv github.io/dist ./

mv dist/* .

mv dist/assets/* ./assets/*

rmdir dist