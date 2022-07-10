import React from "react";

const Form = ({searchValue, setSearchValue}) => {
    return(
    <>
        <input
        type = "text"
        name = "search"
        value = {searchValue}
        onChange={e => setSearchValue(e.target.value)}
    />
    </>
    )
}
export default Form