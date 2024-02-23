import service1 from "../../assets/service1.jpg"
import service2 from "../../assets/service2.jpg"
import service6 from "../../assets/service6.jpg"

export function Services(){
    return (
        <div id="services" className='services'>
        <p className='subtitle'>¿Que actividades tenemos?</p>
        <p className='subtitle2'>ERES BIENVENIDO A CADA UNO DE NUESTROS SERVICIOS</p>
        <div className='informationCards'>
          <div className='informations'>
            <div>
              <img src={service1} alt="Imagen 3" />
              <h2>Lectura Biblica</h2>
              <p>Explora nuestros servicios de lectura biblica.</p>
            </div>
            <div>
              <img src={service2} alt="Imagen 3" />
              <h2>Oración</h2>
              <p>Explora nuestros servicios y tiempo de oraciòn.</p>
            </div>
            <div>
              <img src={service6} alt="Imagen 3" />
              <h2>Reuniones</h2>
              <p>Explora nuestros servicios de adoración y descubre cómo puedes unirte a nosotros en la celebración.</p>
            </div>
          </div>
        </div>
      </div>
    )
}