import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./styles.css"

export function GenrePage() {
    let { id } = useParams();
    const [genre, setGenre] = useState(null)

    useEffect(() => {
        async function fetchGenres() {
            await fetch(`http://localhost:8000/genres/${id}`).then((res) => {
                res.json().then((data) => setGenre(data))
            })
        }
        fetchGenres()
    }, [id])

    if (genre === null) {
        return <div className="genre-container">En cours de chargement...</div>
    }

    return  (<div className="genre-container">
        <h1>Genre {genre.genre.name}</h1>
        <h2>Nombre d'albums: {genre.albums.length}</h2>
</div>)
}