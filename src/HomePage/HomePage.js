import { Link } from "react-router-dom";
import "./styles.css"

export function HomePage() {
    return (<div className="navbar">
    <ul>
      <li>
        <Link to={`genres`}>Genres</Link>
      </li>
      <li>
        <Link to={`artistes`}>Artistes</Link>
      </li>
      <li>
        <Link to={`albums`}>Albums</Link>
      </li>
    </ul>
  </div>)
}