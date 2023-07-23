import logo from "./logo-no-background.png";
import {FaBars} from "react-icons/fa6";
import {FaTimes} from "react-icons/fa";
import "./Navbar.css";
function Navbar(){
    return(
        <div>
            <div>
                <nav className="navbar container-fluid">
                    <div className="logo"><img src={logo} alt="" /></div>
                    <ul className="navbar-list">
                        <input type='checkbox' id='open-close' />
                        <div className="menu">
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                            <label for="open-close" className="close-menu"><i><FaTimes/></i></label>
                        </div>
                        <label for="open-close" className="open-menu"><i><FaBars/></i></label>
                    </ul>
                    <div className="user">
                    </div>
                </nav>
            </div>
            <header>

            </header>
        </div>
    )
}

export default Navbar;;