const SendCoin = ({ state }) => {

	const sendValue = async (event) => {
		event.preventDefault();

		const { contract } = state;

		const setNumber = document.querySelector("#setNumber").value;

		console.log(setNumber, contract);

		const transaction = await contract.sendCoin("0x8a671331a7d809B9e182D11F04c45bAE279aDdC8" , setNumber);

		await transaction.wait();

		console.log("Transaction is done");
	};

	return (
		<>
			<form onSubmit={sendValue}>
				<label className="form-label">Enter Number</label>
				<input type="text" id="setNumber" placeholder="Number to Send"/>
				<button type="submit" className="btn btn-primary" disabled={!state.contract}>Send Coin</button>
			</form>
		</>
	);
};

export default SendCoin;