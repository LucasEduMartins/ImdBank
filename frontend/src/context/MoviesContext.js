import { createContext, useState } from "react";

export const MoviesContext = createContext({});

export function MoviesProvider(props){
    const [movies, setMovies] = useState();
    const [moviesFavorites, setMoviesFavorites] = useState();
    const [lastSearch, setLastSearch] = useState();

    return (
        <MoviesContext.Provider value={{movies, setMovies, moviesFavorites, setMoviesFavorites, lastSearch, setLastSearch}}>
            {props.children}
        </MoviesContext.Provider>
    );
}