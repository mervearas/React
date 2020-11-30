import React, { useState } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

const DogGallery = () => {
    const [dogPhotos, setDogPhotos] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);


    async function getDogPhoto() {
        setLoading(true);
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            setDogPhotos((prevState) => [...prevState, data.message])
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
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