const HDWalletProvider = require('@truffle/hdwallet-provider');

const infuraProjectId = process.env["INFURA_PROJECT_ID"];
const mnemonic = process.env["MNEMONIC"];
const network_id = process.env["NETWORK_ID"];
const chain_id = process.env["CHAIN_ID"];

const host = process.env["DEV_HOST"];
const port = process.env["DEV_PORT"];

module.exports = {
	networks: {
	  development: {
	   host: host,
	   port: port,
	   network_id: "*",
	  },

	  goerli: {
	    provider: () => new HDWalletProvider(mnemonic, 'https://goerli.infura.io/v3/' + infuraProjectId),
	    network_id: network_id,
	    chain_id: chain_id,
		gas: 5500000,
	  }
	},
  
	// Set default mocha options here, use special reporters etc.
	mocha: {
	  // timeout: 100000
	},
  
	// Configure your compilers
	compilers: {
	  solc: {
		version: "0.8.13",      // Fetch exact version from solc-bin
	  }
	}
  };
  