import React, { useEffect, useState } from 'react';

const ListedAlbums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/albums')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setAlbums(data.albums); 
            })
            .catch(error => {
                console.error("Il y a eu un problème avec la requête Fetch:", error);
            });
    }, []); 

    return (
        <div>
            <h1>Liste des Albums</h1>
            {albums.map(album => (
                <div key={album.id}>
                    <h2>{album.name} - Artiste ID: {album.artist_id}</h2>
                    <img src={album.cover_small} alt={`Couverture de l'album ${album.name}`} />
                    <p>{album.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ListedAlbums;

