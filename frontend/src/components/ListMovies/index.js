import { CardMovie } from "../CardMovie";
import { useMovies } from "../../Hooks/useMovies";
import { ButtonOutline } from "../Buttons";
import Api from "../../services/Api";

import "./styles.scss";

export function ListMovies(props){
    const {list: moviesToList, viewMore} = props;
    const { movies, setMovies, lastSearch, setLastSearch } = useMovies();

    function handleClickViewMore(){
        let nextPage = lastSearch.page + 1;
        if( nextPage <= lastSearch.totalPages)
        Api.get(`/movies/title/${lastSearch.search}/${nextPage}`).then((response)=>{
            if(response.data.Response && response.data.Search){
                const moviesResponse = response.data.Search;
                setMovies([...movies,...moviesResponse]);
                lastSearch.page = nextPage;
                setLastSearch(lastSearch);
            }
        }).catch((error)=>{
            alert(error.message);
        })
    }

    function ButtonViewMore(){
        return(
            <div id="btn-more-container">
                <ButtonOutline className="viewMore" onClick={handleClickViewMore}> View More...</ButtonOutline>
            </div>
        )
    }

    return (
        <>
            <ul id="list-movies">
                {moviesToList.map((movie)=> <CardMovie key={movie.imdbID} movie={movie} /> )}
            </ul>
            {viewMore ? <ButtonViewMore /> : ""}
        </>
    );
}