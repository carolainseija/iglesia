import { useState } from 'react'
import './style.css'
import logo from "../../assets/logo-white.png"
import web from "../../assets/web-yellow.png"
import gallery from "../../assets/gallery-yellow2.png"
import about from "../../assets/about-yellow.png"
import inicio from "../../assets/inicio-yellow.png"


export function NavBarPages() {


    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <div className="navbarPages">
            <div>
                <a href="/">
                    <img className="logo" src={logo} alt="logo de la iglesia" />
                </a>
            </div>
            <div className={`menu-sm ${showMenu ? 'show-sm' : ''}`}>
                <a href="/">
                <img src={inicio} className='iconoNav' alt='icono' />
                    Inicio</a>
                <a href="/#about">
                <img src={about} className='iconoNav' alt='icono' />
                    Nosotros</a>
                <a href="/#services">
                    <img src={web} className='iconoNav' alt='icono' />
                    Servicio</a>
                <a href="#">
                    <img src={gallery} className='iconoNav' alt='icono' />
                    Galeria</a>
                <a href="/proyecto">Proyecto</a>
                <a className='contact' href="/#footer">Contacto</a>
            </div>
            <div className="hamburger-menu-sm" onClick={toggleMenu}>
                <div className="bar-sm"></div>
                <div className="bar-sm"></div>
                <div className="bar-sm"></div>
                <div className="bar-sm"></div>
            </div>
        </div>
    )
}