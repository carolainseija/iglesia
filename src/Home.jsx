
import { About } from './components/About'
import { Quote } from './components/Quote'
import { Services } from './components/Services'
import { SectionImage } from './components/SectionImage'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import Ig from '../src/assets/instagram.png'
import Fb from '../src/assets/facebook.png'
import Yb from '../src/assets/youtube.png'
import Wpp from '../src/assets/whatsapp.png'
import Carrusel from './components/Carrusel'
import { Childrens } from './components/Childrens'
import { GallerySwiper } from './components/GallerySwiper'

function Home() {

  return (
    <>
       <Header />
      <About />
       <Quote />
      <Services />
      <Carrusel />
       <Childrens />
      <div className='contentGallerySwipper'>
      <h2>Nuestras Fotos</h2>
      <GallerySwiper />
      </div>

      <SectionImage /> 
      <div className="redes-sociales-section">
        <h2>Síguenos en Redes Sociales</h2>
        <div className="redes-iconos">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={Fb} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={Ig} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={Yb} alt="YouTube" />
          </a>
        </div>
      </div>
      <a href="https://api.whatsapp.com" target="_blank" rel="noopener noreferrer" className='whatsapp'>
        <img src={Wpp} alt="icono whatsapp" />
      </a>
      <Footer />
    </>
  )
}

export default Home
