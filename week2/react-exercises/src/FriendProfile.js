import React from 'react';

const FriendProfile = (props) => {
    const { name: {first, last} , location: {city, country}, email, phone, picture: {large} } = props.friend;
    return (
        <ul style={{border: "5px solid pink"}}>
            <img src={large} alt={first}/>
            <li><span className="title">Name:</span>{first + " " + last}</li>
            <li><span className="title">Adress:</span>{city + "/" + country}</li>
            <li><span className="title">Email:</span>{email}</li>
            <li><span className="title">Phone:</span>{phone}</li>
        </ul>
    )
}

export default FriendProfile;