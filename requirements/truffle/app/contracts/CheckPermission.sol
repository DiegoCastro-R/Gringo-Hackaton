// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract CheckPermission {

	struct Identity {
		uint256		id;
		bool		hasPermission;
	}

	mapping(address => Identity) private participants;
	address private owner;

	event PermissionAdded(address indexed id);
	event PermissionRemoved(address indexed id);

	constructor () {
		owner = msg.sender;
		participants[address(0)] = Identity(0, true);
	}

	function checkPermission(address from, address to) public view returns (bool) {
		if (from == owner && to == address(0)) {
			return true;
		} else if (to == owner && from == address(0)) {
			return true;
		}
		if (owner != to && participants[to].hasPermission == false) {
			return false;
		} else if (from != owner && participants[from].hasPermission == false) {
		 	return false;
		}
		return true;
	}

	function addPermission(address id, Identity memory infos) public {
		require(msg.sender == owner);
		participants[id] = infos;

		emit PermissionAdded(id);
	}

	function removePermission(address id) public {
		require(msg.sender == owner);
		participants[id].hasPermission = false;

		emit PermissionRemoved(id);
	}
}