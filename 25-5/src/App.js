import "./App.css";
import axios from "axios";
import React, { useState,useEffect } from "react";
import apikey from "./apikey";
import Forms from "./translate.component";
function App() {
    const [text, setText] = useState("helsinki");
    const [inputText, setInputText] = useState("");
    const [data, setData] = useState("");
    let location = text;
    let weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`;

    useEffect(() => {
      async function getData() {
          const res = await axios.get(weatherUrl); //haetaan vastaus
          setData(res.data.current); //here we get the json and select current from it
          // console.log(data);
      }
      getData();
  });//kysy mit nm square bracketit teki


    return (
        <div className="App">
            <div className="Task1">
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
                            console.log(inputText); //

                        }}
                    ></input>
                </form>
        </div>
        <div className="Task2">
          <h1>Here the translation</h1>
                        {/* <Forms/> */}
        </div>
        </div>
    );
}

export default App;
