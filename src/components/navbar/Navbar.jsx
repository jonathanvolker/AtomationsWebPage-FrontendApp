import React, {useState} from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/iarpa.png';
import {SiHomeassistant } from "react-icons/si";
import {DiCodeBadge, DiGitCompare} from "react-icons/di";
import {RiContactsBookLine} from "react-icons/ri";



const Menu = () => (
    <>
    <p><SiHomeassistant/><a href="#home"> Home</a></p>
    <p><DiCodeBadge/><a href="#wrpaAutomations"> Que es RPA?</a></p>
    <p><DiGitCompare/><a href="#possibility"> Demos</a></p>
    <p><RiContactsBookLine/><a href="#blog"> Contacto</a></p>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="rpaAutomations__navbar">
            <div className="rpaAutomations__navbar-links">
                <div className="rpaAutomations__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="rpaAutomations__navbar-title"> 
                    <h1>J&J RPA Automations</h1>
                </div>
                <div className="rpaAutomations__navbar-links_container"> 
                    <Menu />
                </div>
            </div>
            <div className="rpaAutomations__navbar-menu">
                {toggleMenu ? 
                (<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />) : 
                (<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />)}

                {toggleMenu && (
                    <div className="rpaAutomations__navbar-menu_container scale-up-center">
                        <div className="rpaAutomations__navbar-menu_container-links">
                            <Menu />

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
