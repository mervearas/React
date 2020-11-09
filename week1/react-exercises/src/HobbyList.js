import React from 'react'
import Hobbies from './Hobbies';

function Hobbylist() {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
    return(
        <div>
            {hobbies.map((hobby, index) => {
                return (
                    <Hobbies key={index} hobby={hobby}/>
                )
            })}
        </div>
    )
}

export default Hobbylist;