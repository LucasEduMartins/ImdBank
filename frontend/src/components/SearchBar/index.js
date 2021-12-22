import { SearchOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useMovies } from "../../Hooks/useMovies";
import Api from "../../services/Api";
import { ButtonOutline } from "../Buttons";
import { useHistory } from "react-router-dom";
import { useNavigation } from "../../Hooks/useNavigation";

import "./styles.scss";

export function SearchBar(props) {
    const [search, setSearch] = useState('');
    const {movies, setMovies, lastSearch, setLastSearch} = useMovies();
    const{menuActive, setMenuActive, history} = useNavigation();

    async function handleSearch(event){
        event.preventDefault();
        if(search){
            Api.get(`/movies/title/${search}`).then(response => {
                if(response.data.Response && response.data.Search){
                    setLastSearch({
                        totalPages: Math.ceil(response.data.totalResults / 10),
                        page: 1,
                        search: search
                     });
                    setMovies(response.data.Search);
                }else{
                    setMovies({});
                }
            }).catch(response => {
                alert(response.message);
            });
        }else{
            setMovies({});
        }
        history.push("/Home")
    }
    
    return(
        <div id="search">
            <form onSubmit={handleSearch}>
                <input id="input-search" type="text" placeholder="Search" value={search} onChange={(event)=> setSearch(event.target.value)}/>
                <ButtonOutline id="button-search">
                    <SearchOutlined />
                </ButtonOutline>
            </form>
        </div>
    );
}