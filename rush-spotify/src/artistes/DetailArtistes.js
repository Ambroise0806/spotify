import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

export function DetailArtists() {
    let { id } = useParams();
    const [artist, setArtist] = useState(null);

    useEffect(() => {
    async function fetchArtist() {
        try {
        const response = await fetch(`http://localhost:8000/listingArtistes/${id}`);
        const data = await response.json();
        setArtist(data);
        } catch (error) {
        console.error("Erreur lors de la récupération des données de l'artiste:", error.message);
        }
    }
    fetchArtist();
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
        <h3>Nombre d'albums: {artist.genre.albums.length}</h3>
    </div>
    );
}
