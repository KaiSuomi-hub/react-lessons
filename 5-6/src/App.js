import "./assets/css/styles.sass";
import React from 'react';
import TheUseEffect from './assets/components/useeffect-component'

const App = () => {
    return (
        <div className="App">
            <header className="App-header"></header>
            <div>
                <h1>Hello World!</h1>
            </div>
            <div id="useEffect">
          <h1>Hello useEffect</h1>
          <TheUseEffect />
          <button className="">dd</button>
        </div>
            <div>
                <h1>Hello World!</h1>
            </div>
        </div>
    );
};
export default App;
