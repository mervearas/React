import React from 'react'

function Guarantee(props) {
    const { img, title, description } = props;
    return (
        <div>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Guarantee;