pragma solidity ^0.8.13;

contract CheckPermission {

	struct Identity {
		uint256		id;
		bool		hasPermission;
	}

	mapping(address => Identity) public participants;
	address public owner;

	function checkPermissions(address from, address to) public view returns (bool) {
		if (participants[from].id == 0) {
			return false;
		} else if (participants[to].id == 0) {
			return false;
		}
		return true;
	}

	constructor () {
		owner = msg.sender;
	}

	function addPermission(address id, Identity calldata infos) public {
		require(msg.sender == owner);
		participants[id] = infos;
	}

	function removePermission(address id) public {
		require(msg.sender == owner);
		participants[id].hasPermission = false;
	}
}