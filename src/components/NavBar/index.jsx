import { useState } from 'react'

export function NavBar() {

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    
    return (
        <div className="navbar">
            <div> <img className="logo" src="https://idpmisi.com/wp-content/uploads/2021/08/favicon.ico.png" alt="logo de la iglesia" /></div>
            <div className={`menu ${showMenu ? 'show' : ''}`}>
                <a href="/">Nosotros</a>
                <a href="/">Servicio</a>
                <a href="/">Contacto</a>
            </div>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    )
}