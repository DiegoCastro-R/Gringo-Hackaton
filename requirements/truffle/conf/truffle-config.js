const HDWalletProvider = require('@truffle/hdwallet-provider');

const infuraProjectId = process.env["INFURA_PROJECT_ID"];
const mnemonic = process.env["MNEMONIC"];
 

module.exports = {
	networks: {
	  development: {
	   host: process.env[DEV_HOST],
	   port: process.env[DEV_PORT],
	   network_id: "*",
	  },

	  goerli: {
	    provider: () => new HDWalletProvider(mnemonic, infuraProjectId),
	    network_id: process.env["NETWORK_ID"],
	    chain_id: process.env["CHAIN_ID"]
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
  