import React, { useState } from "react";

const SearchCity = (props) => {
    const [city, setCity] = useState("");
    const { handleClick } = props;

    function handleChange(value) {
        setCity(value)
    }

    function handleOnClick () {
        handleClick(city)
        setCity("");
    }

    return (
        <form className="search_form" onSubmit={() => handleOnClick()}>
            <span className="icon">
                <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input type="text" placeholder="Search City" value={city} onChange={(event) => handleChange(event.target.value)} />
            <button type="submit" disabled={city.length === 0} onClick={() => handleOnClick()}>Search</button>
        </form>
    )
}

export default SearchCity;