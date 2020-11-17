import React, { useState } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';


const Friend = () => {
    const [friend, setFriend] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    async function getFriend() {
        setLoading(true)
        await fetch('https://www.randomuser.me/api?results=1')
            .then(res => res.json())
            .then(res => setFriend(res.results[0]))
            .catch(err => setError(true))
            .finally(() => setLoading(false))
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