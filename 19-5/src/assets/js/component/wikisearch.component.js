//Antti Suomi
//19.5
//this doesn't work

import React from "react";

const WikiSearch = (props) => {
    let searchUrl =
        "https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&namespace=0&format=json&search=" +
        props.search;
    return (
        <div>
            <a href="{searchUrl}">{props.search}</a>
        </div>
    );
};

export default WikiSearch;
