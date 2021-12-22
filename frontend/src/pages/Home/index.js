import { useMovies } from "../../Hooks/useMovies";
import { ListMovies } from "../../components/ListMovies";

import SearchImg from "../../assets/the-search-img.png";
import NotFoundImg from "../../assets/not-found-img.png";

import { useNavigation } from "../../Hooks/useNavigation";
import { useEffect } from "react";

import "./styles.scss";

export default function Home(){
    const {movies} = useMovies();
    const {setMenuActive} = useNavigation();
    
    useEffect(() => setMenuActive("/Home"));
    
    function NotFound(){
        return(
            <div className="content">
            <figure id="searching-img">
                <img src={NotFoundImg}/>
                <div>
                    <h2 className="title">Oops...</h2>
                    <h3 className="subtitle">Movie not found!</h3>
                </div>
            </figure>
        </div>
        )
    }

    function Search(){
        return (
            <div className="content">
                <figure id="searching-img">
                    <img src={SearchImg}/>
                    <div>
                        <h2 className="title">All about movies...</h2>
                        <h3 className="subtitle">Just search!</h3>
                    </div>
                </figure>
            </div>
        );
    }
    
    return (    
        <main id="home-page">
            <h1 className="title">Search Movie...</h1>
            {movies ? movies.length > 0 ? <ListMovies list={movies} viewMore={true} /> : <NotFound/> : <Search/> }
        </main>
    );
}

