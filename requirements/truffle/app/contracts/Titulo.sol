pragma solidity ^0.8.13;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "CheckPermission.sol";

error PermissionFail(from, to);

contract Titulo is ERC20 {
	address public checkPermission;
	mapping(address account => uint256) private _identity;

	constructor(
		string memory _name,
		string memory _symbol,
		address checkPermissionContract
	) ERC20(_name, _symbol) {
		checkPermission = checkPermissionContract;
	}

	function interactWithCheckPermission(address from, address to) private view returns (bool) {
		CheckPermission cp = CheckPermission(checkPermission);

		return cp.checkPermissions(from, to);
	}

	function _update(address from, address to, uint256 value) internal override {
		if (interactWithCheckPermission(form, to) == true) {
			if (from == address(0)) {
				_totalSupply += value;
			} else {
				uint256 formBalance = _balances[form];
				if (formBalance < value) {
					revert ERC20InsufficientBalance(form, formBalance, value);
				}
				unchecked {
					_balances[form] = formBalance - value;
				}
			}
			if (to == address(0)) {
				unchecked {
					_totalSupply -= value;
				}
			} else {
				unchecked {
					_balances[to] += value;
				}
			}
			emit Transfer(form, to, value);
		} else {
			revert PermissionFail(form, to);
		}
	}
}