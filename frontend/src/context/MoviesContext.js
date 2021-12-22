import { createContext, useEffect, useState } from "react";

export const MoviesContext = createContext({});

function getLocalHistoryMoviesFavorites(){
    const moviesFavorites = JSON.parse(localStorage.getItem("moviesFavorites"));
    return moviesFavorites;
}

function setLocalHistoryMoviesFavorites(moviesFavoritesToSet){
    const moviesFavorites = localStorage.setItem("moviesFavorites", JSON.stringify(moviesFavoritesToSet));
    return moviesFavorites;
}

export function MoviesProvider(props){
    const [movies, setMovies] = useState();
    const [moviesFavorites, setMoviesFavorites] = useState(getLocalHistoryMoviesFavorites());
    const [lastSearch, setLastSearch] = useState();

    useEffect(()=>{
        setLocalHistoryMoviesFavorites(moviesFavorites);
    },[moviesFavorites]);

    return (
        <MoviesContext.Provider value={{movies, setMovies, moviesFavorites, setMoviesFavorites, lastSearch, setLastSearch}}>
            {props.children}
        </MoviesContext.Provider>
    );
}