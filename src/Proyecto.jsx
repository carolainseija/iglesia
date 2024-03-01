import { Footer } from "./components/Footer";
import { NavBarPages } from "./components/NavbarPages";
import user from './assets/usuario.png'
import init from './assets/inicios.png'
import helps from './assets/ayudas.png'
import food from './assets/alimentacion.jpg'
import food2 from './assets/alimentacion2.jpg'




const GalleryItem = ({ imageUrl, altText }) => {
  return (
    <div className="gallery-item">
      <img  src={imageUrl} alt={altText} />
    </div>
  );
};

export default function Proyecto() {


    const proyectoData = {
        title: "Proyecto de Alimentación para Niños: 'Manos Generosas'",
        description: "Nuestra iglesia se enorgullece de llevar a cabo el proyecto 'Manos Generosas', una iniciativa dedicada a brindar apoyo alimenticio a los niños de nuestra comunidad que enfrentan dificultades económicas. Creemos en la importancia de cuidar y nutrir a las generaciones futuras, y este proyecto refleja nuestro compromiso con el bienestar de los más pequeños.",
        date: "Fecha de inicio: 01 de enero de 2023",
        location: "Ubicación: Montevideo, Uruguay",
        team: "Equipo de Proyecto: Carolain Seija, Juliana Silva.",
        objectives: [
          "Objetivo 1: Aliviar la Inseguridad Alimentaria: Buscamos abordar la inseguridad alimentaria que afecta a niños en situaciones desfavorecidas, garantizando que tengan acceso a comidas nutritivas y equilibradas.",
          "Objetivo 2: DHabilidades y Desarrollo Personal:  ir más allá de la alimentación física y abordar aspectos más amplios del desarrollo de los niños, creando oportunidades para que descubran y cultiven sus talentos.",
          // Agrega más objetivos si es necesario
        ],
      };

      const blogs = [
        {
            title: "Blog 2: Colaboración Comunitaria",
            description: "Cómo la colaboración comunitaria puede marcar la diferencia en nuestra misión.",
            image: food2,
          },
        {
            
          title: "Blog 1: Alimentación Saludable",
          description: "Descubre la importancia de una alimentación saludable para los niños.",
          image: food,
        },
        {
          title: "Blog 2: Colaboración Comunitaria",
          description: "Cómo la colaboración comunitaria puede marcar la diferencia en nuestra misión.",
          image: food2,
        },
        {
            
            title: "Blog 1: Alimentación Saludable",
            description: "Descubre la importancia de una alimentación saludable para los niños.",
            image: food,
          },
        // Agrega más blogs según sea necesario
      ];
    

  return (
    <>
    <NavBarPages />
      <div className="headerProyecto">
      </div>
      <div className="proyectoDetails">
       <h2>{proyectoData.title}</h2>
        <p>{proyectoData.description}</p>
        <p>{proyectoData.date}</p>
        <p>{proyectoData.location}</p>

        <h3 style={{ color: '#001c28'}}>Equipo de Proyecto</h3>
        <p>{proyectoData.team}</p>

        <h3 style={{ color: '#001c28'}}>Objetivos del Proyecto</h3>
        <ul>
          {proyectoData.objectives.map((objective, index) => (
            <li style={{color: 'black'}} key={index}>{objective}</li>
          ))}
        </ul>
       
        <section className="project-section">
          <div className="category">
            <img src={init} alt="Rocket" className="icon" />
            <p>Inicios</p>
          </div>
          <div className="category">
            <img src={helps} alt="Hands Helping" className="icon" />
            <p>Ayudantes</p>
          </div>
          <div className="category">
            <img src={user} alt="Users" className="icon" />
            <p>Personas Ayudadas</p>
          </div>
        </section>
        <a href="/galeria" style={{ color: '#001c28', textDecoration: 'underline', cursor: 'pointer' }}>
          Ver imagenes del proyecto en Galería de Fotos
        </a>

        <section className="blogs-section">
          <h2>Reuniones Recientes</h2>
          <p>Que hemos hecho en nuestras ultimas reuniones con ellos</p>
          <div className="blog-container">
            {blogs.map((blog, index) => (
              <div className="blog" key={index}>
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
      </>
  );
}


