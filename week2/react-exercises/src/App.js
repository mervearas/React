import React from 'react';
import './App.css';
import DogGallery from './DogGallery';
import Friend from './Friend';

function App() {
  return (
    <React.Fragment>
      <Friend/>
      <DogGallery/>
    </React.Fragment>
  );
}

export default App;
