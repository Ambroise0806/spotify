import { useEffect, useState } from "react";
import "./styles.css"
import { useNavigate } from "react-router-dom";

export function ListingArtistes() {
    const [artists, setArtists] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchArtists() {
            await fetch('http://localhost:8000/listingartistes').then((res) => {
                res.json().then((data) => setArtists(data))
            })
        }
        fetchArtists()
    }, [])


    return (<div className="artistes-container">

        <h1>Artistes :</h1>
    {artists.map(artists => (
        <div onClick={() => navigate("/ListingArtistes/" + artists.id)} key={artists.id} className="artistes-item">
            {artists.name}
        </div>
    ))}
</div>)
}