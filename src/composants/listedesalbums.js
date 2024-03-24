import React, { useEffect, useState } from 'react';

const ListedAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0); 

    useEffect(() => {
        fetch(`http://localhost:8000/albums?page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            setAlbums(data.albums);
            setTotalPages(data.totalPages);
        })
        .catch(error => console.error("Y'a un Problème avec le fetch: ", error));
    }, [currentPage]); 

    const goToPreviousPage = () => setCurrentPage(currentPage => currentPage - 1);
    const goToNextPage = () => setCurrentPage(currentPage => currentPage + 1);

    return (
        <div>
            <h1>Liste des Albums</h1>
            {albums.map(album => (
                <div key={album.id}>
                    <h2>{album.titre} - {album.artiste}</h2>
                </div>
            ))}
            <div>
                {currentPage > 1 && (
                    <button onClick={goToPreviousPage}>Précédent</button>
                )}
                {currentPage < totalPages && (
                    <button onClick={goToNextPage}>Suivant</button>
                )}
            </div>
        </div>
    );
};

export default ListedAlbums;
