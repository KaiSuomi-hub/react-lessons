import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

import apikey from "./apikey";

let location = "Oulu";
let weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`;

let text = text;

function Input({}) {
  const [text, setText] = useState("");
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <form id="myform">
        <input type="text" id="myinput" name="myinput" onChange={(e) => setInputText(e.target.value)}></input>
        <input
          type="submit"
          id="mybutton"
          name="mybutton"
          onClick={(e) => {
            setText(inputText);
            e.preventDefault();
          }}
        ></input>
      </form>
    </div>
  );
}


const GetWeather = () => {
    const [data, setData] = useState("");
    useEffect(() => {
        async function getData() {
            const res = await axios.get(weatherUrl); //haetaan vastaus
            setData(res.data.current); //here we get the json and select current from it
            console.log(data);
        }
        getData();
    }, []);

    return (
        <div>
            <p>Location: </p>
        <p>Temperature: {data.temp_c} C</p>

        </div>
    );
};

function App() {

    return (
        <div className="App">
            <div>



          <h1>The weather in Oulu</h1>
            </div>
        <GetWeather />

        <p>Give a location: {text} </p>
        <Input/>
        </div>
    );
}

export default App;
