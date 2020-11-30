import React, { useState } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';


const Friend = () => {
    const [friend, setFriend] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    async function getFriend() {
        setLoading(true);
        try {
            const response = await fetch('https://www.randomuser.me/api?results=1');
            const data = await response.json();
            setFriend(data.results[0]);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }

    return (
        <div className="friend_container">
            {isLoading && (
                <p>Loading...</p>
            )}
            {error && (
                <p>Error! Data could not fetch!</p>
            )}
            {!error && !isLoading && Object.entries(friend).length !== 0 && (
                <FriendProfile friend={friend} />
            )}
            <Button onClick={getFriend} text="Get a friend!"/>
        </div>
    )
}

export default Friend;