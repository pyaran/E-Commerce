import "./Header.css";
import {FaSearch}from "react-icons/fa";
import {FaTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6";
import {FaFacebookF} from "react-icons/fa6";
import logo from "./logo-no-background.png";


function Header(){

    return(
        <div className="header container-fluid">
            <div className="logo-header"><img className="img-fluid" src={logo} alt="" /></div>
            <div className="header-search-bar">
                <input className="header-search" type="text" name="busqueda"placeholder="¿Que estas buscando?"/>
                <button className="header-boton-search"><FaSearch/></button>
            </div>
            <dir className="Social-icons">
                <i><FaTwitter/></i>
                <i><FaInstagram/></i>
                <i><FaFacebookF/></i>
            </dir>
        </div>
    )
}

export default Header