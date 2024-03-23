// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var rn = parseInt(getRandomArbitrary(1,65));

function App() {
  const [albums,setalbums] = useState([]);
 

  async function fetchalbum(random_number) {
    const response = await fetch('http://localhost:8000/albums?page='+random_number+'&limit=25');
    const data = await response.json();
    setalbums(data);
  }

  fetchalbum(rn);

  // const albumLines = albums.length;

  const albumLines = albums.map(album =>
    <div key={album.id} className='div-album'>
      <img src={album.cover_small}></img>
      <div className='div-album-info'>
        <h4>{album.name}</h4>
        <h5>{album.artist_id}</h5 >
        <h6>{album.release_date}</h6>
      </div>
    </div>
  );
  
  return (
    <div className="App">
      {albumLines}
    </div>
  );
}

export default App;
