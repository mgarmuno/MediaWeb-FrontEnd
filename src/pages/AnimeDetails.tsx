import { useLocation } from "react-router-dom";

function AnimeDetails() {
    const location = useLocation();
    const anime = location.state?.data;
}

export default AnimeDetails;