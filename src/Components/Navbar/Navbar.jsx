import logo from "./logo-no-background.png";
import {FaBars} from "react-icons/fa6";
import {FaTimes} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import {FaSearch}from "react-icons/fa";
import {FaRegCircleQuestion} from "react-icons/fa6";
import "./Navbar.css";
function Navbar(){
    return(
            <div>
                <nav className="navbar container-fluid">
                    <div className="logo"><img className="img-fluid" src={logo} alt="" /></div>
                    <ul className="navbar-list">
                        <input type='checkbox' id='open-close' />
                        <div className="menu">
                            <li>    
                                <div className="search-bar">
                                    <input className="search" type="text" name="busqueda"placeholder="¿Que estas buscando?"/>
                                    <button className="boton-search"><FaSearch/></button>
                                </div>
                            </li>
                            <li>Home</li>
                            <li>Destacado</li>
                            <li>Contacto</li>
                            <li>Favoritos</li>
                            <li><FaShoppingCart/></li>
                            <li><FaRegCircleQuestion/></li>
                            <label for="open-close" className="close-menu"><i><FaTimes/></i></label>
                        </div>
                        <label for="open-close" className="open-menu"><i><FaBars/></i></label>
                    </ul>
                </nav>
            </div>
    )
}

export default Navbar;