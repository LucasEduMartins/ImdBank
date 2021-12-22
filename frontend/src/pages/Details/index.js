import { useState,useEffect } from 'react';
import {useHistory, useParams} from "react-router-dom";
import Api from '../../services/Api';

import { ArrowBack, Favorite, FavoriteBorderOutlined} from '@material-ui/icons';
import { useMovies } from '../../Hooks/useMovies';
import { useNavigation } from '../../Hooks/useNavigation';
import "./styles.scss";

export default function Details() {
    const{moviesFavorites, setMoviesFavorites} = useMovies();
    const [movie, setMovie]= useState({});
    const { imdbID } = useParams();
    const { history, setMenuActive,} = useNavigation();
    const [favorite, setFavorite] = useState(false);

    useEffect(()=>{
        setMenuActive("/Details");

        if(imdbID){
            Api.get(`/movies/id/${imdbID}`).then(response => {
                if(response.data){
                    handleCheckFavorite(response.data);
                }else{
                    setMovie({});
                }
            }).catch(response => {
                alert(response.message);
            });
        }else{
            setMovie({});
        }
    },[]);
    
    function handleCheckFavorite(responseMovie){
        if(moviesFavorites){
            let movieFavorite = moviesFavorites.find((movieFavorite)=> movieFavorite.imdbID == responseMovie.imdbID);
            if(movieFavorite){
                setFavorite(true);
            }else{
                setFavorite(false);
            }
        }else{
            setFavorite(false);
        }
        setMovie(responseMovie);

    }

    function handleBack(event){
        history.goBack();
    }

    function Ratings(){
        return(
            <div id="ratings">
                <div className="rating">
                    <figure>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" />
                    </figure>
                    <span>
                        {movie.Ratings !== undefined ? movie.Ratings[0] != undefined ? movie.Ratings[0].Value : "N/A" : "N/A"}
                    </span>
                </div>
                <div className="rating">
                    <figure>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Rotten_Tomatoes_logo.svg" />
                    </figure>
                    <span>
                        { movie.Ratings !== undefined ? movie.Ratings[1] !== undefined ? movie.Ratings[1].Value : "N/A" : "N/A" }
                    </span>
                </div>
                <div className="rating">
                    <figure>
                        <img src={"https://upload.wikimedia.org/wikipedia/commons/2/20/Metacritic.svg"} />
                    </figure>
                    <span>
                        { movie.Ratings !== undefined ? movie.Ratings[2] !== undefined ? movie.Ratings[2].Value : "N/A" : "N/A" }
                    </span>
                </div>
            </div>
        );
    }

    function handleAddFavorite(){
        if(moviesFavorites){

            let movieFavorite = moviesFavorites.find((movieFavorite)=> movieFavorite.imdbID == movie.imdbID);
            if(movieFavorite){
                let indexMovieFavorite = moviesFavorites.indexOf(movieFavorite);
                moviesFavorites.splice(indexMovieFavorite, 1);
                setFavorite(false);
            }else{
                setMoviesFavorites([...moviesFavorites, movie]);
                setFavorite(true);
            }
        }else{
            setMoviesFavorites([movie]);
            setFavorite(true);

        }
    }

    return (    
        <main id="details-page">
            <span id="arrow-back" ><ArrowBack onClick={handleBack}/></span> 
            <section id="details">
                <figure>
                    <img src={movie.Poster }/>
                </figure>
                <aside>
                    <div id="group-title">
                        <h1 id="title">{movie.Title}</h1>
                        <div id="btn-favorite" className={favorite ? "active" : ""} onClick={handleAddFavorite}>
                            {favorite ? "Remove Favorite" : "Add Favorite"}
                            {favorite ? <Favorite/> : <FavoriteBorderOutlined/>}
                        </div>
                    </div>
                    <p id="year">{movie.Runtime + ' / ' + movie.Year }</p>
                    <p id="plot">{movie.Plot }</p>
                    <div id="more">
                        <div>
                            <h4 id="director-label">Director</h4>
                            <p id="director">{movie.Director }</p>
                        </div>
                        <div>
                            <h4 id="actors-label">Genre</h4>
                            <p id="actors">{movie.Genre }</p>
                        </div>
                        <div>
                            <h4 id="actors-label">Cast</h4>
                            <p id="actors">{movie.Actors }</p>
                        </div>
                    </div>
                    <Ratings />
                </aside>
            </section>
        </main>
        // <h1>aaa</h1>
    );
}