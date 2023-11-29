import { useState, useEffect } from "react";

const SendCoin = ({ state }) => {

	const sendValue = async (event) => {
		event.preventDefault();

		const { contract } = state;

		const setNumber = document.querySelector("#setNumber").value;

		console.log(setNumber, contract);

		const transaction = await contract.sendCoin("0xBe109878d401f9D15dd3C1399886199FfCcbdcce" , setNumber);

		await transaction.wait();

		console.log("Transaction is done");
	};

	return (
		<>
			<form onSubmit={sendValue}>
				<label className="form-label">Enter NUmber</label>
				<input type="text" id="setNumber" placeholder="Number to Send"/>
				<button type="submit" className="btn btn-primary" disabled={!state.contract}>Send Coin</button>
			</form>
		</>
	);
};

export default SendCoin;