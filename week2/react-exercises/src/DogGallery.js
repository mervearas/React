import React, { useState } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

const DogGallery = () => {
    const [dogPhotos, setDogPhotos] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);


    function getDogPhoto() {
        setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(res => setDogPhotos((prevState) => [...prevState, res.message]))
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }

    return (
        <div className="dog_gallery">
            { isLoading && (
                <p>Loading...</p>
            )}
            { error && (
                <p>Error!</p>
            )}
            { !error && !isLoading && dogPhotos.length > 0 ? (
                dogPhotos.map((dogPhotoUrl) => <DogPhoto dogPhoto={dogPhotoUrl} />)
            ) : (
                <p>Get your first dog by clicking the button!</p>
            )}

            <Button onClick={getDogPhoto} text="Get a dog!" />
        </div>
    )
}

export default DogGallery;