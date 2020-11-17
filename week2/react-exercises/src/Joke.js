const Joke= (props) => {
    const {joke: {setup, punchline}} = props
    return(
        <div className="joke_item">
            <p>{setup}</p>
            <p>{punchline}</p>
        </div>
    )
}

export default Joke;