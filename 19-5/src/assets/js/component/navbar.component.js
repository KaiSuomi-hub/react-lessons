import React, {useState} from "react";

const Nav = () => {
const [dp, setDp] = useState("none");


    return(
    <nav className="navtop">
        <a        onClick={() => {
          setDp("block");
        }} > Task1</a>
        <a>Task2</a>
        <a>Task3</a>
    </nav>);
};

export default Nav;
