import { useEffect, useState } from "react";
import "./styles.css"
import { useNavigate } from "react-router-dom";

export function ListingArtistes() {
    const [artists, setArtists] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchArtists() {
            await fetch('http://localhost:8000/artists').then((res) => {
                res.json().then((data) => setArtists(data))
            })
        }
        fetchArtists()
    }, [])


    return (<div className="artistes-container">

        <h1>Artistes :</h1>
    {artists.map(artist => (
        <div onClick={() => navigate("/listingArtistes/" + artist.id)} key={artist.id} className="artistes-item">
            {artist.name}
        </div>
    ))}
</div>)
}