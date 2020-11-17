const DogPhoto = (props) => {
    const {dogPhoto} = props;
    return(
        <img src={dogPhoto} alt="dog"/>
    )
}

export default DogPhoto;