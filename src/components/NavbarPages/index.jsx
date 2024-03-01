import { useState } from 'react'
import './style.css'
export function NavBarPages() {

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navbarPages">
            <div>
                <a href="/">
                    <img className="logo" src="https://idpmisi.com/wp-content/uploads/2021/08/favicon.ico.png" alt="logo de la iglesia" />
                </a>
            </div>
            <div className={`menu-sm ${showMenu ? 'show-sm' : ''}`}>
                <a href="/">Inicio</a>
                <a href="/#about">Nosotros</a>
                <a href="/#services">Servicio</a>
                <a href="/galeria">Galeria</a>
                <a href="/proyecto">Proyecto</a>
                <a href="/#footer">Contacto</a>
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