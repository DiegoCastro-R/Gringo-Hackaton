// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./CheckPermission.sol";

library TokenSwap {
   function approveTokens(IERC20 t1, IERC20 t2, uint256 amount) public returns (bool) {
       require(t1.approve(address(this), amount) == true);
       require(t2.approve(address(this), amount) == true);
	   return (true);
   }

   function swap(IERC20 t1, IERC20 t2, uint256 amount) public returns (bool) {
       require(t1.allowance(msg.sender, address(this)) >= amount, "Insufficient allowance");
       require(t2.balanceOf(address(this)) >= amount, "Insufficient balance");

       t1.transferFrom(msg.sender, address(this), amount);
       t2.transfer(msg.sender, amount);
	   return true;
   }
}