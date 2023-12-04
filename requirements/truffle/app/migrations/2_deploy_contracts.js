const CheckPermission = artifacts.require("CheckPermission");
const Titulo = artifacts.require("Titulo");

module.exports = async function(deployer) {
  await deployer.deploy(CheckPermission);
  const name = "Titulo";
  const signal = "TP";
  const addr = await CheckPermission.deployed();
  await deployer.deploy(Titulo, name, signal, addr.address);
};
