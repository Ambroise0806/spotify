import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailDeLAlbum = () => {
  const { id } = useParams();
  const [album, definirAlbum] = useState(null);

  useEffect(() => {
    const chargerDetailsDeLAlbum = async () => {
      try {
        const reponse = await fetch(`http://localhost:8000/albums/${id}`);
        const donnees = await reponse.json();
        definirAlbum(donnees);
      } catch (erreur) {
        console.error("Erreur: ", erreur);
      }
    };

    chargerDetailsDeLAlbum();
  }, [id]);

  if (!album) return <div>Chargement...</div>;

  return (
    <div>
      <h1>{album.nom} - {album.artiste}</h1>
      <p>{album.description}</p>
      <img src={album.couverture} alt={`Couverture de l'album ${album.nom}`} />
      {album.pistes.map(piste => (
        <div key={piste.id}>
          <h2>{piste.nom}</h2>
          <audio controls src={piste.url}></audio>
        </div>
      ))}
    </div>
  );
};

export default DetailDeLAlbum;
