import React from "react";

const SearchBox = ({ searchChange }) => {
    return(
        <div className="pa2">
        <input
        className="center ba b--black-20 pa2 mb2 db "
        type ='text'
        placeholder="search robots"
        onChange = { searchChange }
        />
        </div>
    );
}

export default SearchBox;