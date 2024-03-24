import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AlbumDetails = () => {
  const { id } = useParams(); 
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/albums/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setAlbum(data); 
      })
      .catch(error => {
        console.error("Il y a eu un problème avec la requête Fetch:", error);
      });
  }, [id]);

  const formatDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleDateString("fr-FR");
  };

  if (!album) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{album.name}</h1>
      <p>{album.description}</p>
      <img src={album.cover} alt={`Couverture de l'album ${album.name}`} style={{ maxWidth: '100%', height: 'auto' }} />
      <div>Date de sortie: {formatDate(album.release_date)}</div>
      <div>Popularité: {album.popularity}</div>
    </div>
  );
};

export default AlbumDetails;