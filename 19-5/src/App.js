import "./assets/css/App.css";
import React from "react";
// import EulerPicture from "./assets/js/component/eulerpicture.component";
// import Nav from "./assets/js/component/navbar.component";
// import { WikiSearch } from "./assets/js/component/wikisearch.component";
// import { Singles } from "./assets/js/component/singles.component";
import { Input } from "./assets/js/component/input.component";
function App() {
    const title = "Euler";
    return (
        <div className="App">
            {/* <Nav /> */}

            <div id="task1" className="shown ">
                <h1>This is task1</h1>
                <h1>{title}</h1>
                {/* <EulerPicture alt={title} /> */}
            </div>
        {/* <div id="task2" className="shown "> */}
          {/* <Singles/> */}
        {/* </div> */}
        <div id="task3">
        <h1>This is task3</h1>
            <Input/>

              </div>

        </div>
    );
}

export default App;
