#!/bin/sh

sleep 3

if [ -d "/app" ]; then
	echo "app exist"
else
	mkdir -p app
	cd app
	truffle unbox metacoin .
	cp ../truffle-config.js . 
	truffle compile
	truffle migrate --network development
fi

# truffle watch
tail -f /dev/null