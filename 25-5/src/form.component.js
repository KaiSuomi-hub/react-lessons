import React, { sessionStorage, useContext } from "react";
import dictionary from "./translation.data";

const InfoForm = (props) => {
	let LangContext = React.createContext(props.LangContext);

	const submitHandler = () => { };

    const context = useContext(LangContext);
    return ( <div className="form-container">
        <form className="info-form" onSubmit={submitHandler}>
            <label>{dictionary.name[context]}: </label>
			{ console.log(dictionary.name[context]) }
			<input id="name" type="text"></input>
            <br />
            <label>{dictionary.nat[context]}: </label>
            <input id="nat" type="text"></input>
            <br />
            <label>{dictionary.add[context]}: </label>
            <input id="add" type="text"></input>
            <br />
            <label>{dictionary.main[context]}: </label>
            <input id="main" type="text"></input>
            <br />
            <button type="submit">{dictionary.save[context]}</button>
		</form>
		</div>
    );
};

export default InfoForm;
