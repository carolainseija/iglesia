import { useEffect, useState } from "react"
import { db } from "../../firebase"
import { collection, getDocs, query } from "firebase/firestore"

export function Services() {

  const [services, setServices] = useState([])

  const getServices = async () => {
    getDocs(query(collection(db, "services")))
      .then((doc) =>
        setServices(doc.docs.map((d) => d.data())))
  }

  useEffect(() => {
    getServices()
  }, [])

  return (
    <div id="services" className='services'>
      <p className='subtitle'>¿Que actividades tenemos?</p>
      <p className='subtitle2'>ERES BIENVENIDO A CADA UNO DE NUESTROS SERVICIOS</p>
      <div className='informationCards'>
          {services.length > 0 && (
            <div className='informations'>
              {services.map((service) => (
                <div>
                  <img src={service.image} alt="Imagen 3" />
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  )
}