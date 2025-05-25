import { Card } from "react-bootstrap";
import { ACard } from "../pages/SearchAnime";
import { useNavigate } from 'react-router-dom';

interface IProps {
    anime: ACard
}

function AnimeCard({ anime } : IProps) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        const data = {anime}
        navigate('/animeDetails', {state:data});
    };

    return (
        <>
        <Card className="anime-card-grid" onClick={handleCardClick}>
            <Card.Img variant="top" src={anime.image}/>
            <Card.Title>{anime.english}</Card.Title>
        </Card>
        </>
    );
}

export default AnimeCard;