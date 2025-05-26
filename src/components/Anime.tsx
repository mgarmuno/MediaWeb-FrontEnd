import { useNavigate } from "react-router-dom";

function Anime() {

    const navigate = useNavigate();

    const navigateToSearchAnime = () => navigate('/searchAnime');

    return (
        <div className="main-component-div">
            <div>
                <h1>Anime</h1>
            </div>
            <div>
                <h4>Search Anime</h4>
                <button onClick={navigateToSearchAnime}>Search Anime</button>
            </div>
        </div>
    )
}

export default Anime;