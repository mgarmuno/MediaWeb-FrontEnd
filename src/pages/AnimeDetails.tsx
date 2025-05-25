import { useLocation } from "react-router-dom";
import { ACard } from "./SearchAnime";

function AnimeDetails() {
    const location = useLocation();
    const anime : ACard = location.state?.data;

    return (
        <div className="main-component-div">
            <img src={anime.image} />
        </div>
    )
}

export default AnimeDetails;