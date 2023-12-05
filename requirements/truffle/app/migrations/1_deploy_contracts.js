const TokenSwap = artifacts.require("TokenSwap");
const DREX = artifacts.require("DREX");
const CheckPermission = artifacts.require("CheckPermission");
const Titulo = artifacts.require("Titulo");

module.exports = async function(deployer) {
  await deployer.deploy(TokenSwap);
  await deployer.link(TokenSwap, DREX);
  await deployer.deploy(DREX, "Real Digital", "DREX");
  await deployer.link(TokenSwap, Titulo);
  await deployer.deploy(CheckPermission);
  const addr = await CheckPermission.deployed();
  const dr = await DREX.deployed();
  await deployer.deploy(Titulo, {_name: "Tesouro SELIC 2026", _symbol: "S26", _checkKey: addr.address, _fractionsOfToken: 18, _payDay: 1702248492000, _income: 10, _drex: dr.address});
  await deployer.deploy(Titulo, {_name: "Tesouro Prefixado 2033", _symbol: "P33", _checkKey: addr.address, _fractionsOfToken: 18, _payDay: 1702248492000, _income: 10, _drex: dr.address});
};