import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const detaildelalbum = () => {
  const { id } = useParams();
  const [album, definirAlbum] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/albums/${id}`)
      .then(reponse => reponse.json())
      .then(donnees => definirAlbum(donnees))
      .catch(erreur => console.error("Y'a un problème avec le fetch: ", erreur));
  }, [id]);

  if (!album) return <div>Chargement...</div>;

  return (
    <div>
      <h1>{album.titre} - {album.artiste}</h1>
      <p>{album.description}</p>
      <img src={album.couverture} alt={'couverture de l'album ${album.nom}'} />
      {album.pistes.map(piste => (
        <div key={piste.id}>
            <h2>{piste.nom}</h2>
        <audio controls src={piste.url}></audio>
        </div>
      ))}
    </div>
  );
};

export default detaildelalbum;