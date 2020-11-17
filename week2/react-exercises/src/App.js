import React from 'react';
import './App.css';
import DogGallery from './DogGallery';
import Friend from './Friend';
import RandomJoke from './RandomJoke';

function App() {
  return (
    <React.Fragment>
      <Friend/>
      <DogGallery/>
      <RandomJoke/>
    </React.Fragment>
  );
}

export default App;
