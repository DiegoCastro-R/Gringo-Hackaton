// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/**
 * @dev Titulo Information 
 * @param _name is nm
 *
 *
 *
 *
 *
 *
 *
 *
 */

struct TituloInformation {
	string		 	_name;
	string		 	_symbol;
	address			_checkKey;
	uint8			_fractionsOfToken;
	uint256			_payDay;
	uint256			_income;
	address			_drex;
}

error PermissionFail(address from, address to);