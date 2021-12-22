import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { Menu } from "../Menu";
import { SearchBar } from "../SearchBar";

import "./styles.scss";

export default function Navbar(props) {
    return(
        <header className="navbar">
            <nav>
                <figure id="logo-img">
                    <img src={logo}></img>
                </figure>
                <Menu />
                <SearchBar />
            </nav>
        </header>
    );
}