import { useEffect, useState } from "react";
import "./styles.css"
import { useNavigate } from "react-router-dom";

export function GenresPage() {
    const [genres, setGenres] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchGenres() {
            await fetch('http://localhost:8000/genres').then((res) => {
                res.json().then((data) => setGenres(data))
            })
        }
        fetchGenres()
    }, [])


    return (<div className="genres-container">

        <h1>Genres musicaux disponible :</h1>
    {genres.map(genre => (
        <div onClick={() => navigate("/genres/" + genre.id)} key={genre.id} className="genre-item">
            {genre.name}
        </div>
    ))}
</div>)
}