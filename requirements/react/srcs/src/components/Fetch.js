import { useState, useEffect } from "react";

const Fetch = ({ state, account }) => {
	const { contract } = state;

	const [storedNumber, setStoredNumber] = useState("Not Available");

	useEffect(() => {
		const fetchNumber = async () => {
			const number = await contract.getBalance(account);
			console.log("olha ela ai: ", number.toString());
			setStoredNumber(number.toString());
		};

		contract && fetchNumber();
	}, [contract]);

	return (
		<>
			<label className="form-label">Stored Number : { storedNumber } </label>
		</>
	);
};

export default Fetch;