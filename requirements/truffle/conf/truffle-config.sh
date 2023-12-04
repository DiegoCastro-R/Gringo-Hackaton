#!/bin/sh

npm install @truffle/hdwallet-provider@latest
npm install @openzeppelin/contracts
truffle compile
#truffle migrate --network $TEST_NETWORK
tail -f /dev/null