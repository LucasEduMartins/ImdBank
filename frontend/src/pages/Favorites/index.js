import { useEffect, useState } from 'react';
import { ListMovies } from '../../components/ListMovies';
import { useMovies } from '../../Hooks/useMovies';
import { useNavigation } from '../../Hooks/useNavigation';

import SearchImg from "../../assets/the-search-img.png";
import AddFavoritesImg from "../../assets/add-favorite-img.png";

import "./styles.scss";
import { Link } from 'react-router-dom';

export default function Favorites(){
    const {moviesFavorites} = useMovies();
    const {setMenuActive} = useNavigation();

    useEffect(()=> setMenuActive("/Favorites"));

    function AddFavorites(){
        return(
            <div className="content">
                <figure id="add-favorites-img">
                    <img src={AddFavoritesImg}/>
                    <div>
                        <h2 className="title">You don't have any favorites?</h2>
                        <h3 className="subtitle" id="link-here">Click <Link to="/Home">here</Link> to search!</h3>
                    </div>
                </figure>
            </div>
        );
    }

    return (    
        <main id="favorites-page">
            <h1 className="title">My Favorites...</h1>
            {moviesFavorites ? moviesFavorites.length > 0 ? <ListMovies list={moviesFavorites} viewMore={false}/> : <AddFavorites/> : <AddFavorites/> }
        </main>
    );
}