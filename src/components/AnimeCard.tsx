import { Card } from "react-bootstrap";
import { Anime } from "../pages/SearchAnime";
import { useNavigate } from 'react-router-dom';

interface IProps {
    anime: Anime
}

function AnimeCard({ anime } : IProps) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        const data = anime
        navigate('/animeDetails', {state:{data: anime}});
    };

    return (
        <>
        <Card className="anime-card-grid" onClick={handleCardClick}>
            <Card.Img variant="top" src={anime.coverImage.large}/>
            <Card.Title>{anime.title.english ? anime.title.english : anime.title.romaji ? anime.title.romaji : anime.title.native}</Card.Title>
        </Card>
        </>
    );
}

export default AnimeCard;