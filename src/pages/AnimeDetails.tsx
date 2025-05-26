import { useLocation } from "react-router-dom";
import { Anime } from "./SearchAnime";

import '../css/anime-details.css'

function AnimeDetails() {
    const location = useLocation();
    const anime : Anime = location.state?.data;

    return (
        <>
        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={anime.coverImage.large} />
                    <h1>{anime.title.english ? anime.title.english : anime.title.romaji ? anime.title.romaji : anime.title.native}</h1>
                    <h4>{anime.seasonYear ? anime.seasonYear : "No info year"}, David Ayer</h4>
                    <span className="minutes">{anime.duration}</span>
                    <span className="minutes">{anime.episodes ? anime.episodes + " episodes" : ""}</span>
                    <div>
                        <span className="text">English title: {anime.title.english}</span><br></br>
                        <span className="text">Romaji title:  {anime.title.romaji}</span><br></br>
                        <span className="text">Native title:  {anime.title.native}</span>
                    </div>
                </div>
                <div className="movie_desc">
                    <p className="text">
                        {anime.description}
                    </p>
                    <p className="text">{anime.genres.join(", ")}</p>
                </div>
                <div className="movie_social">
                    
                </div>
            </div>
            <div className="blur_back bright_back"></div>
        </div>
        <div>
            <button>Add Anime</button>
        </div>


</>



        // <div className="main-component-div anime-details">
        //     <div>
        //         <h1>{anime.english ? anime.english : anime.romaji ? anime.romaji : anime.native}</h1>
        //     </div><br></br>
        //     <div>
        //     <img src={anime.image} />
        //     </div><br />
        //     <div>
        //     <label>
        //         English
        //     <div>
        //         <label>{anime.english}</label>
        //     </div>
        //     </label>
        //     </div>
        //      <label>
        //         Romaji
        //         <label>{anime.romaji}</label>
        //     </label>
        //      <label>
        //         Native
        //         <label>{anime.native}</label>
        //     </label>
        //     <p>{anime.description}</p>
        // </div>
    )
}

export default AnimeDetails;