import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

export function DetailArtistes() {
    let { id } = useParams();
    const [artist, setArtist] = useState(null);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        async function fetchArtist() {
            const responseArtist = await fetch(`http://localhost:8000/artists/${id}`);
            const artistData = await responseArtist.json();
            setArtist(artistData);
        }

        async function fetchAlbums() {
            const responseAlbums = await fetch(`http://localhost:8000/albums/artist/${id}`);
            const albumsData = await responseAlbums.json();
            setAlbums(albumsData);
        }

        fetchArtist();
        fetchAlbums();
    }, [id]);

    if (artist === null) {
        return <div className="artistes-container">Veuillez patienter...</div>;
    }

    return (
        <div className="artistes-container">
            <h1>Artiste: {artist.name}</h1>
            <h2>Description: {artist.description}</h2>
            <p>Bio: {artist.bio}</p>
            <img src={artist.photo} alt={artist.name} />
            {albums.length > 0 && (
                <div>
                    <h3>Albums de {artist.name}:</h3>
                    <ul>
                        {albums.map((album) => (
                            <li key={album.id}>
                                <p>Nom: {album.name}</p>
                                <p>Description: {album.description}</p>
                                <p>Date de sortie: {album.release_date}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>)
}