import './App.css';
import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import Fetch from "./components/Fetch";
import SendCoin from './components/SendCoin';

function App() {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  let [account, setAccount] = useState("que isso");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x7971fAAcA71680f79d7ca5Ac6D8Cea21e8750c50";//process.env.CONTRACT_ADDRESS;
      console.log("Contract Address: ", contractAddress);
      // Não sei por que isso é isso ?
      const contractABI = [{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}];

      //const contractABI = [{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "_from","type": "address"},{"indexed": true,"internalType": "address","name": "_to","type": "address"},{"indexed": false,"internalType": "uint256","name": "_value","type": "uint256"}],"name": "Transfer","type": "event"},{"inputs": [{"internalType": "address","name": "receiver","type": "address"},{"internalType": "uint256","name": "amount","type": "uint256"}],"name": "sendCoin","outputs": [{"internalType": "bool","name": "sufficient","type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "addr","type": "address"}],"name": "getBalanceInEth","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function","constant": true},{"inputs": [{"internalType": "address","name": "addr","type": "address"}],"name": "getBalance","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function","constant": true}];
      try {
        const { ethereum } = window;

        if (ethereum) {

          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          console.log("Account: ", account[0]);
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          
          window.ethereum.on("accountsChanged", () => {
            setAccount(account[0]);
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(window.ethereum)

          const signer = provider.getSigner();

          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
            
          setAccount(account[0]);
          setState({ provider, signer, contract });
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  console.log(state);

  return (
    <div className="App">
      <header className="App-header">
        User Account Address : { account }
        <Fetch state={state} account={account}></Fetch>
        <SendCoin state={state}></SendCoin>
      </header>
    </div>
  );
}

export default App;