import { useState } from 'react'
import './style.css'
import logo from "../../assets/iglesia.png"
import web from "../../assets/web-yellow.png"
import faq from "../../assets/faq-yellow.png"
import about from "../../assets/about-yellow.png"
import inicio from "../../assets/inicio-yellow.png"
import design from "../../assets/diseño.png" 

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
                <a href="/#benefits">
                    <img src={web} className='iconoNav' alt='icono' />
                    ¿Porque tener un sitio web?</a>
                <a href="#proyectos">
                <img src={design} className='iconoNav' alt='icono' />
Diseños</a>
                 {/* <a href="/#faq">
                    <img src={faq} className='iconoNav' alt='icono' />
                    Preguntas frecuentes</a>  */}
                <a className='contact' href="/#contact">Contacto</a>
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