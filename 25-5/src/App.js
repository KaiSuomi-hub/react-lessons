import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import apikey from "./apikey";

function App() {
    const [text, setText] = useState("helsinki");
    const [inputText, setInputText] = useState("");
    const [data, setData] = useState("");
    let location = text;
    let weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`;
    async function getData() {
            const res = await axios.get(weatherUrl); //haetaan vastaus
            setData(res.data.current); //here we get the json and select current from it
            // console.log(data);
        }
    getData();
    return (
        <div className="App">
            <div>
                <h1>The weather in <span className="location"> {location}</span></h1>
                <p>Location:<span className="location"> {location}</span></p>
                <p>Temperature: {data.temp_c} C</p>

                <form id="myform">
                    <input
                        type="text"
                        id="myinput"
                        name="myinput"
                        onChange={(e) => setInputText(e.target.value)}
                    ></input>
                    <input
                        type="submit"
                        id="mybutton"
                        name="mybutton"
                        onClick={(event) => {
                            setText(inputText);
                            event.preventDefault();
                            // console.log(inputText); //

                        }}
                    ></input>
                </form>
            </div>
        </div>
    );
}

export default App;
