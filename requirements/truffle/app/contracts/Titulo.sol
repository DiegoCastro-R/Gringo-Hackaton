// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./CheckPermission.sol";
import "./SwapTokens.sol";
import "./utils.sol";

contract Titulo is ERC20 {
	address private 					_owner;
	TituloInformation private			_TFPi;

	/**
	* @dev set {name} and {symbol} of token. Set contract for check Permission.
	*/
	constructor(
		TituloInformation memory tInfo
	) ERC20(tInfo._name, tInfo._symbol) {
		_owner = msg.sender;
		_TFPi = tInfo;
	}

	function name() public view override returns (string memory) {
		return super.name();
	}

	function symbol() public view override returns (string memory) {
		return super.symbol();
	}

	function decimals() public view override returns (uint8) {
		return _TFPi._fractionsOfToken;
	}

	function totalSupply() public view override returns (uint256) {
		return super.totalSupply();
	}

	function balanceOf(address account) public view override returns (uint256) {
		return super.balanceOf(account);
	}

	function mint(address to, uint256 value) public {
		require(msg.sender == _owner);
		super._mint(to, value);
	}

	function transfer(address to, uint256 value) public override returns (bool) {
		return super.transfer(to, value);
	}

	function allowance(address owner, address spender) public view override returns (uint256) {
		return super.allowance(owner, spender);
	}

	function approve(address spender, uint256 value) public override returns (bool) {
		require(interactWithCheckPermission(msg.sender, spender) == true);
		return super.approve(spender, value);
	}

	function transferFrom(address from, address to, uint256 value) public override returns (bool) {
		return super.transferFrom(from, to, value);
	}

	function _update(address from, address to, uint256 value) internal override {
		if (interactWithCheckPermission(from, to) == true) {
			super._update(from, to, value);
		} else {
			revert PermissionFail(from, to);
		}
	}

	function burn(address to, uint256 value) public {
		require(msg.sender == _owner);
		super._burn(to, value);
	}

	function interactWithCheckPermission(address from, address to) private view returns (bool) {
		CheckPermission cp = CheckPermission(_TFPi._checkKey);
		return cp.checkPermission(from, to);
	}

	function automaticRedemption() public {
		require(block.timestamp >= _TFPi._payDay);
		IERC20 t1 = IERC20(_TFPi._drex);
		IERC20 t2 = IERC20(msg.sender);
		require(TokenSwap.approveTokens(t1, t2, balanceOf(msg.sender)));
		require(TokenSwap.swap(t1, t2, balanceOf(msg.sender)));
	}

	function swapTokens(IERC20 t1, IERC20 t2, uint256 amount) public {
		require(TokenSwap.approveTokens(t1, t2, amount));
		require(TokenSwap.swap(t1, t2, amount));
	}
}