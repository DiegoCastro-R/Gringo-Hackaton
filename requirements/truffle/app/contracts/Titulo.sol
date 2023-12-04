// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./CheckPermission.sol";

error PermissionFail(address from, address to);

contract Titulo is ERC20 {
	address private checkPermission;
	address private _owner;
	mapping(address => uint256) private _identity;

	constructor(
		string memory 	_name,
		string memory 	_symbol,
		address			_checkKey
	) ERC20(_name, _symbol) {
		_owner = msg.sender;
		checkPermission = _checkKey;
	}

	function mint(address to, uint256 value) public {
		require(msg.sender == _owner);
		super._mint(to, value);
	}

	function burn(address to, uint256 value) public {
		require(msg.sender == _owner);
		super._burn(to, value);
	}

	function transferFrom(address from, address to, uint256 value) public override returns (bool) {
		return super.transferFrom(from, to, value);
	}

	function transfer(address to, uint256 value) public override returns (bool) {
		return super.transfer(to, value);
	}

	function interactWithCheckPermission(address from, address to) private view returns (bool) {
		CheckPermission cp = CheckPermission(checkPermission);
		return cp.checkPermission(from, to);
	}

	function _update(address from, address to, uint256 value) internal override {
		if (interactWithCheckPermission(from, to) == true) {
			super._update(from, to, value);
		} else {
			revert PermissionFail(from, to);
		}
	}
}