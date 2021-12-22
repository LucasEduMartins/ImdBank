import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

export function useMovies(){
    const value = useContext(MoviesContext);
    return value
}