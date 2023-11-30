#!/bin/sh

npm install @truffle/hdwallet-provider@latest
truffle compile
truffle migrate --network $TEST_NETWORK
truffle watch