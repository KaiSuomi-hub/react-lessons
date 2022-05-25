import React from "react";
import singlesData  from "../data/singles.data";

const Singles = () => {
    const listItems = singlesData.map((item) => (
        <p >
            {item.title} - year: {item.year} - from album: {item.album}{" "}
        </p>
    ));
    return <div>{listItems}</div>;
};

export default Singles;
