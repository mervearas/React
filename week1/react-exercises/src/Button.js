import React from 'react';

function Button(props) {
    const addOne = props.addOne;
    return(
        <button onClick={addOne}>
            Add 1!
        </button>
    )
}

export default Button;