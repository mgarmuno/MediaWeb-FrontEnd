import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import '../css/cards.css'
import AnimeCard from "../components/AnimeCard";

export interface ACard {
    id: string;
    english: string
    romaji: string
    native: string
    image: string;
    episodes: number;
    isAdult: boolean;
    season: string;
    seasonYear: number;
    averageScore: number;
    genres: string[];
}

function SearchAnime() {
    const location = useLocation();
    const animes = location.state?.data;
    const navigate = useNavigate()

    const [values, setFormData] = useState({
        searchString: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target
        setFormData({ ...values, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const params = {
            searchString: values.searchString
        }
        axios.get('http://localhost:8080/api/anime/search', { params })
            .then(response => {
                const data: ACard[] = response.data;
                navigate("/searchAnime", {state: {data: data}});
            })
    };

    return (
        <div className="main-component-div">
            <div>
                <h1>Search Anime</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text'
                        name='searchString'
                        value={values.searchString}
                        onChange={handleChange}
                        placeholder='Search anime' />
                </form>
            </div>
            <div>
                <Container className="mt-4">
                    <Row className="g-4">
                        {animes ? animes.map((anime: ACard, index : number) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={3}>
                                <AnimeCard anime={anime} />
                            </Col>
                        )) : <div></div>}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default SearchAnime;