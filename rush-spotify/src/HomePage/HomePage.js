import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from 'react';


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

var rn = parseInt(getRandomArbitrary(1, 163));


export function HomePage() {
  const [albums, setalbums] = useState([]);

  async function fetchalbum(random_number) {
    const response = await fetch('http://localhost:8000/albums?page=' + random_number + '&limit=10');
    const data = await response.json();
    setalbums(data);
  }

  fetchalbum(rn);

  const albumLines = albums.map(album =>
    <div key={album.id} className='div-album'>
      <img src={album.cover_small}></img>
      <div className='div-album-info'>
        <h3>{album.name}</h3>
      </div>
    </div>
  );

  return (
    <div className="page">
      <div className="navbar">
        <ul>
          <li>
            <Link to={`genres`}>Genres</Link>
          </li>
          <li>
            <Link to={`artistes` `artiste`}>Artistes</Link>
          </li>
          <li>
            <Link to={`albums`}>Albums</Link>
          </li>
          <li>
            <Link to={`search`}>Recherche</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        {albumLines}
      </div>
    </div>
  );
}