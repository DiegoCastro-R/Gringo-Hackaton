const HDWalletProvider = require('@truffle/hdwallet-provider');

const infuraProjectId = process.env["INFURA_PROJECT_ID"];
const mnemonic = process.env["MNEMONIC"];
const network_id = process.env["NETWORK_ID"];
const chain_id = process.env["CHAIN_ID"];
const test_network = process.env["NETWORK_URL"];

const host = process.env["DEV_HOST"];
const port = process.env["DEV_PORT"];

module.exports = {
	networks: {
	  development: {
	   host: host,
	   port: port,
	   gas: 5500000,
	   gasPrice: 1000000000,
	   network_id: "*",
	  },

	  goerli: {
		provider: () => new HDWalletProvider(mnemonic, test_network + infuraProjectId),
		network_id: network_id,
		chain_id: chain_id,
		gas: 5500000,
		gasPrice: 1000000000,
		confirmations: 2,
		timeoutBlocks: 200,
		skipDryRun: true,
		}
	},
  
	// Set default mocha options here, use special reporters etc.
	mocha: {
	  // timeout: 100000
	},
  
	
	// Configure your compilers
	compilers: {
	  solc: {
		version: "0.8.20",      // Fetch exact version from solc-bin
	  }
	}
  };
  