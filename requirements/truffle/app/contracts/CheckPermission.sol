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
	}

	function checkPermission(address to) public view returns (bool) {
		if (participants[to].hasPermission == false) {
			return false;
		}
		if (msg.sender == owner) {
			return true;
		} else if (participants[msg.sender].hasPermission == false) {
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