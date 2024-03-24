import react, {useEffect, useState} from 'react';
const listedesalbums = () => {
    const [albums, definiralbums] = useState ([]); 

    useEffect(() => {
        fetch('http://localhost:8000/albums')
        .then(reponse => reponse.json())
        .then(donnees => definiralbums(donnees))
        .catch(erreur => console.erreur("Y'a un Problème avec le fetch: ",erreur));
    }, []);

    return (
        <div>
            <h1>Liste des Albums</h1>
            <div>
                {albums.map(album => (
                    <div key={album.id}>
                        <h2>{album.titre} - {album.artiste}</h2>                       
            </div>
        ))}
        </div>
        </div>
    );
};
export default listedesalbums;