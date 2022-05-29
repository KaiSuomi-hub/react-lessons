import React from 'react';

const Input = (props) => {
	const [todos, setTodos] = useState({
		key: "1",
		task: "get milk",
		isDone: false
	});



	return (

		<div className="input-container">
			<form onSubmit={this.setState.bind(this)}>
				<input type="text"
					name="input"
					placeholder="Task NR"
					className="field"
					alt="Enter Task">

					</input>
				<button className="btn">Add Task</button>
				</form>
		</div>
	)

}

export default Input;