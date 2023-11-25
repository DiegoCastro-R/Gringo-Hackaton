#!/bin/sh

mkdir -p app
cd app
truffle init
cp ../truffle-config.js app -y
truffle compile

truffle dashboard --port 7545 --host 0.0.0.0