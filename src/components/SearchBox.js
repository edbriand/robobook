import React from "react";
import "./SearchBox.css";


const SearchBox = ({searchfield, searchChange}) => {
    return (
        <>
        <input type="text" placeholder="search robots" onChange={searchChange}/>
        </>
    );
}

export default SearchBox;