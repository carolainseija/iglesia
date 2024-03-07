import React from "react";
import './style.css'
import multimedia from "../../assets/multimedia.png"
import acceso from "../../assets/acceso.png"
import comunicacion from "../../assets/comunicacion.png"
import alcance from "../../assets/alcance.png"
export default function Benefit() {



    const benefits = [
        { icon: alcance, title: 'Ministerio de Alabanza', content: 'Experimenta la adoración a través de nuestra vibrante música y alabanza que busca conectar a las personas con la presencia de Dios.' },
        { icon: comunicacion, title: 'Estudios Bíblicos', content: 'Participa en estudios bíblicos profundos que fortalecen tu comprensión de las Escrituras y te ayudan a crecer espiritualmente.' },
        { icon: acceso, title: 'Comunidad Activa', content: 'Únete a nuestra comunidad activa y participa en eventos, actividades y grupos que fomentan la conexión y las relaciones significativas.' },
        { icon: multimedia, title: 'Servicio Comunitario', content: 'Contribuye a hacer una diferencia en nuestra comunidad y más allá a través de oportunidades de servicio y proyectos comunitarios.' },
      
    ]

    const servicios = [
        { icon: alcance, title: 'Ministerio de Alabanza', content: 'Experimenta la adoración a través de nuestra vibrante música y alabanza que busca conectar a las personas con la presencia de Dios.' },
        { icon: comunicacion, title: 'Estudios Bíblicos', content: 'Participa en estudios bíblicos profundos que fortalecen tu comprensión de las Escrituras y te ayudan a crecer espiritualmente.' },
        { icon: acceso, title: 'Comunidad Activa', content: 'Únete a nuestra comunidad activa y participa en eventos, actividades y grupos que fomentan la conexión y las relaciones significativas.' },
        { icon: multimedia, title: 'Servicio Comunitario', content: 'Contribuye a hacer una diferencia en nuestra comunidad y más allá a través de oportunidades de servicio y proyectos comunitarios.' },
      
    ];
      
    return (
        <>

            <section id="benefits">
                <h2 className="titleBenefit">¿Cuales son nuestros servicios?</h2>
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

