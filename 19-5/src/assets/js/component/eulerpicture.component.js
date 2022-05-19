import React from "react";

import logo from "../../img/euler.jpg";



const EulerPicture = (props) => {
    return (
        <div>
            <img src={logo} alt={props.alt} />
            <p className="darkcenter">Small Text</p>


        </div>
    );
};

export default EulerPicture;
