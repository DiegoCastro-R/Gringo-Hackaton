pragma solidity ^0.8.13;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CheckPermission.sol";

contract TestCheckPermission {
	struct Identity {
		uint256		id;
		bool		hasPermission;
	}

	function testAddPermissionForUser() public {
		CheckPermission cp = CheckPermission();

		bool expected = true;
		cp.addPermission(DeployedAddresses.CheckPermission(), Identity{id: 10, hasPermission: true});
		Assert.equal(cp.checkPermissions(DeployedAddresses.CheckPermission(), DeployedAddresses.CheckPermission()), expected, "O proprietario deve possuir autorizacao!");
	}

	function testRemovePermission() public {
		CheckPermission cp = CheckPermission();

		bool expected = false;
		cp.addPermission(DeployedAddresses.CheckPermission(), Identity{id: 10, hasPermission: true});
		cp.removePermission(DeployedAddresses.CheckPermission());
		Assert.equal(cp.checkPermissions(DeployedAddresses.CheckPermission(), DeployedAddresses.CheckPermission()), expected, "O proprietario nao deve possuir autorizacao");
	}
}