import { Link } from "react-router";
import "../css/menubar.css"

function MenuBar() {
    return (
        <ul className="menubar">
            <Link className="menuitem" to="/">Home</Link>
            <Link className="menuitem" to="/movies">Movies</Link>
            <Link className="menuitem" to="/tvshows">TV Shows</Link>
            <Link className="menuitem" to="/anime">Anime</Link>
            <Link className="menuitem" to="/manga">Manga</Link>
            <Link className="menuitem" to="/books">Books</Link>
        </ul>
    )
}

export default MenuBar;