import { useState } from 'react'
import './style.css'


export function NavBar() {


    
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    console.log('lovc', window.location.pathname
    )
    return (
        <div className="navbar">
            <div> <img className="logo" src="https://idpmisi.com/wp-content/uploads/2021/08/favicon.ico.png" alt="logo de la iglesia" /></div>
            <div className={`menu ${showMenu ? 'show' : ''}`}>
                <a href="/">Inicio</a>
                <a href="#about">Nosotros</a>
                <a href="#services">Servicio</a>
                <a href="/galeria">Galeria</a>
                <a href="/proyecto">Proyecto</a>
                <a href="#footer">Contacto</a>
            </div>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    )
}