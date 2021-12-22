import { useEffect, useState } from "react";
import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons";
import { useNavigation } from "../../Hooks/useNavigation";
import { useMovies } from "../../Hooks/useMovies";

import DefaultMovieImg from "../../assets/default-movie-img.png";
import Api from "../../services/Api";

import "./styles.scss";

export function CardMovie(props){
    const [hover, setHover] = useState(false);
    const [movie] = useState(props.movie);
    const {moviesFavorites,setMoviesFavorites} = useMovies();
    const {history} = useNavigation();
    const [favorite, setFavorite] = useState(false);
    
    useEffect(()=>{
        if(moviesFavorites){
            let movieFavorite = moviesFavorites.find((movieFavorite)=> movieFavorite.imdbID == movie.imdbID);
            if(movieFavorite){
                setFavorite(true);
            }else{
                setFavorite(false);
            }
        }else{
            setFavorite(false);
        }
    },[]);

    async function handleClick(event){
        Api.get(`/movies/id/${movie.imdbID}`).then(response =>{
            history.push(`Details/${movie.imdbID}`);
        }).catch(error =>{
            alert(error.message);
        });
    }

    function handleAddFavorite(event){
        event.preventDefault();
        event.stopPropagation();

        if(moviesFavorites){

            let movieFavorite = moviesFavorites.find((movieFavorite)=> movieFavorite.imdbID == movie.imdbID);
            if(movieFavorite){
                let indexMovieFavorite = moviesFavorites.indexOf(movieFavorite);
                moviesFavorites.splice(indexMovieFavorite, 1);
                setFavorite(false);
            }else{
                setFavorite(true);
                setMoviesFavorites([...moviesFavorites, movie])
            }
        }else{
            setFavorite(true);
            setMoviesFavorites([movie])
        }
    }

    return(
        <li className="movie" key={movie.imdbID} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={handleClick}>
            <figure className="movie-poster">
                <img src={movie.Poster !== "N/A" ? movie.Poster : DefaultMovieImg}  />
                <div className={`movie-content ${hover ? "active" : ""}`}>
                    <div className={`favorite-icon ${favorite ? "active" : ""}`}>
                        {favorite ? <Favorite onClick={handleAddFavorite}/> : <FavoriteBorderOutlined onClick={handleAddFavorite}/>}
                    </div>
                    <div className="content">
                        <strong>{movie.Title}</strong>
                        <p>{movie.Year}</p>
                    </div>
                </div>
            </figure>
        </li>
    );
}