import axios from "axios";
import { useState, useEffect } from "react";


const TheUseEffect = (props) => {
	const [time, setTime] = useState(""+props.second);

	const now = new Date();

	const current = now.getSeconds();
	const timer = setInterval(function () {
		setTime(current);
	}, 1000);


	useEffect(() => {

		setTime(timer);

	},[]
	)

	return (
		<p>{time}</p>
	)
}

export default TheUseEffect;