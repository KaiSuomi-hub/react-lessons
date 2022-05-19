import { useState, React } from "react";



function Input() {
	const [text, setText] = useState("");
	return (

		<div className="state" >
			<h4 className="output">{text}</h4>
			<input type="text" className="input-field"
			placeholder="..." onChange={getInput => setText(getInput.target.value)}/>
		</div>
	)
}


export default Input;