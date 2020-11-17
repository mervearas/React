import React,{ useState, useEffect } from "react";
import Joke from "./Joke";

const RandomJoke=() =>{
    const [joke, setJoke] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res=> res.json())
        .then(res=> setJoke(res))
        .catch(err=> setError(true))
        .finally(()=> setLoading(false));
    },[]);

    return(
        <div className="joke">
            {isLoading && (
                <p>Are you ready for the joke? Loading...</p>
            )}

            {error && (
                <p>Error! Data could not fetch!</p>
            )}

            {!isLoading && !error && Object.keys(joke).length !== 0 && (
                <Joke joke={joke}/>
            )}   
        </div>
    )
}

export default RandomJoke;