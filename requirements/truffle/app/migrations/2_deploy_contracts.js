const CheckPermission = artifacts.require("CheckPermission");

module.exports = function(deployer) {
  deployer.deploy(CheckPermission);
};
