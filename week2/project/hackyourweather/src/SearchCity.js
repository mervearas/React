import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SearchCity = (props) => {
    const [city, setCity] = useState("");
    const { handleClick } = props;

    function handleChange(value) {
        setCity(value)
    }
    return (
        <div className="search_form">
            <span className="icon">
                <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input type="text" placeholder="Search City" value={city} onChange={(event) => handleChange(event.target.value)} />
            <button onClick={() => handleClick(city)}>Search</button>
        </div>
    )
}

export default SearchCity;