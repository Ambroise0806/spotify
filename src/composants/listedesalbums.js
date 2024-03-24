import react, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const listedesalbums = () => {
    const [albums, definiralbums] = useState ([]); 
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchAlbums = async () => {
          const response = await fetch(`http://localhost:8000/albums?page=${page}`);
          const data = await response.json();
          setAlbums(data);
        };
    
        fetchAlbums();
      }, [page]);

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