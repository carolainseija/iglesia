// src/components/Pricing.js
import React, { useState } from 'react';
import imageFaq from "../../assets/faq.png"
import "./style.css"

const Questions = () => {
    const faqData = [
        {
            question: '¿Cómo puedo comprar el sitio web?',
            answer: 'Puedes adquirir nuestros diseños fácilmente completando el formulario de compra. Solo tienes que indicar la opción de diseño que te interesa y proporcionar la información requerida.',
        }, {
            question: '¿Puedo personalizar el diseño del sitio web?',
            answer: '¡Sí! Ofrecemos opciones de personalización para adaptar el diseño a tus preferencias. Durante el proceso de compra, tendrás la oportunidad de especificar tus requisitos de diseño o puedes comunicarte con nuestro equipo después de la compra para discutir las personalizaciones.',
        }, {
            question: '¿Qué incluye el paquete estándar de diseño del sitio web?',
            answer: 'Nuestro paquete estándar incluye el diseño y desarrollo del sitio web, integración de características esenciales, optimización para dispositivos móviles y pruebas de calidad.',
        }, {
            question: '¿Cuánto tiempo lleva completar el proceso de diseño y desarrollo del sitio?',
            answer: 'El tiempo de entrega puede variar según la complejidad del proyecto y la cantidad de personalizaciones requeridas. Sin embargo, generalmente proporcionamos una estimación de tiempo durante el proceso de compra. Además, nuestro equipo se comunicará contigo para brindarte actualizaciones a lo largo del proceso.',
        },
        {
            question: '¿Ofrecen servicios de mantenimiento después de la compra?',
            answer: 'Sí, ofrecemos servicios de mantenimiento para garantizar el rendimiento continuo de tu sitio web. Estos servicios pueden incluir actualizaciones de seguridad, corrección de errores y soporte técnico. Puedes seleccionar un plan de mantenimiento durante el proceso de compra o comunicarte con nosotros más tarde para obtener más detalles.',
        }
        // Agrega más preguntas y respuestas según sea necesario
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };


    return (
        <div className='faq'>
            <img src={imageFaq} alt='icono de faq' />
            <h1>Sección de Preguntas Frecuentes</h1>

            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div key={index} className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`} onClick={() => handleToggle(index)}>
                        <h3>{item.question}</h3>
                        <p className="answer">{item.answer}</p>
                    </div>
                ))}
            </div></div>
    );
};

export default Questions;
// MI CSS