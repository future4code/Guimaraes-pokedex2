import React from "react";
import logo from "../../Assets/Imgs/logo.png"
import { Link } from "react-router-dom";
import { NavbarMenu } from "./HeaderStyled";


const Header = () => {

    return (
        <NavbarMenu>
            <Link to="/"><img src={logo} alt="" /></Link>
            <Link to="/"><h2>Pokedex</h2></Link>
        </NavbarMenu>
    )
}

export default Header
