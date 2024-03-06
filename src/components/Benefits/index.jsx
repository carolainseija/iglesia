import React from "react";
import './style.css'
import multimedia from "../../assets/multimedia.png"
import acceso from "../../assets/acceso.png"
import comunicacion from "../../assets/comunicacion.png"
import alcance from "../../assets/alcance.png"
export default function Benefit() {



    const benefits = [
        { icon: alcance, title: 'Alcance más amplio', content: 'Un sitio web permite que la iglesia alcance a un público más amplio. Las personas interesadas en encontrar una comunidad religiosa pueden descubrir la iglesia en línea, lo que puede resultar en un crecimiento de la congregación.' },
        { icon: comunicacion, title: 'Comunicación efectiva', content: 'Un sitio web sirve como una plataforma centralizada para compartir información clave, como horarios de servicios, eventos especiales, actividades comunitarias y noticias relevantes. ' },
        { icon: acceso, title: 'Accesibilidad las 24 horas del día, los 7 días de la semana', content: 'Un sitio web permite que la iglesia esté disponible en línea en todo momento. Los miembros de la comunidad pueden acceder a información relevante, eventos, mensajes y recursos en cualquier momento.' },
        { icon: multimedia, title: 'Contenido Accesible y Centralizado', content: 'Los usuarios pueden acceder a toda la variedad de contenido multimedia desde un solo lugar, eliminando la necesidad de navegar por diferentes secciones del sitio.' },
    ]


    return (
        <>

            <section id="benefits">
                <h2 className="titleBenefit">¿Por qué es necesario tener una página web para tu iglesia?</h2>
                <p>
                    Tener una presencia online es esencial en la era digital actual. Aquí te mostramos algunos beneficios:
                </p>
                {/* {`faq-item ${expandedIndex === index ? 'expanded' : ''}`} */}
                <div className="church-section">
                    {benefits.map((benefit, index) => (
                        <>
                            <div className={`benefits benefit${index}`}>
                                <img className='iconBenefit' src={benefit.icon} />
                                <h3>{benefit.title}</h3>
                                <p>{benefit.content}</p>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}


// mi css

