import { Link } from "react-router";
import "../css/menubar.css"

function MenuBar() {
    return (
        <ul className="menubar">
            <Link className="menuitem" to="/anime">Anime</Link>
            <Link className="menuitem" to="/manga">Manga</Link>
        </ul>
    )
}

export default MenuBar;