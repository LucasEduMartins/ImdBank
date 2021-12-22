import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useNavigation } from "../../Hooks/useNavigation";

import {FavoriteBorderOutlined, HomeOutlined} from "@material-ui/icons";

import "./styles.scss";

export function Menu(props){
    const {menuActive, setMenuActive, history} = useNavigation();

    function handleClick(url){
        setMenuActive(url);
        history.push(url);
    }

    return(
        <div id="menu">
            <ul>
                <li className={`menu-item ${menuActive === "/Home" && "active"}`} onClick={()=> handleClick("/Home")}>
                    <HomeOutlined /> <a>Home</a>
                </li>
                <li className={`menu-item ${menuActive === "/Favorites" && "active"}`} onClick={()=> handleClick("/Favorites")}>
                    <FavoriteBorderOutlined/> <a>Favorites</a>
                </li>
            </ul>
        </div>
    );
}