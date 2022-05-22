import React, { useState  } from "react";



function Input() {
	const [text, setText] = useState("");
	return (

		<div className="state" >
			<h4 className="output">{text}</h4>
			<p>Font is at 2 rem</p>
			<input type="text" className="input-field"
			placeholder="..." onChange={getInput => setText(getInput.target.value)}/>
		</div>
	)
}


export default Input;