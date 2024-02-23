import { GallerySwiper } from "./components/GallerySwiper";
import audiovisual from '../src/assets/audiovisual1.jpg'

import esc1 from '../src/assets/esc1.jpg'
import esc2 from '../src/assets/esc2.avif'
import esc3 from '../src/assets/esc3.jpg'
import esc4 from '../src/assets/esc4.jpg'
import esc5 from '../src/assets/esc5.webp'
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { NavBarPages } from "./components/NavbarPages";


const GalleryItem = ({ imageUrl, altText }) => {
  return (
    <div className="gallery-item">
      <img  src={imageUrl} alt={altText} />
    </div>
  );
};

export default function Gallery() {
  const images = [
    { id: 1, url: esc1, alt: 'Image 1' },
    { id: 2, url: esc2, alt: 'Image 2' },
    { id: 3, url: esc3, alt: 'Image 3' },
    { id: 4, url: esc4, alt: 'Image 1' },
    { id: 5, url: esc5,  alt: 'Image 2' },
    { id: 6, url: esc1, alt: 'Image 3' },
  ];
  return (
    <>
    <NavBarPages />
      <div className="headerGallery">
      </div>
      <div className="galleryPage">
        <h2>      Nuestra Galeria de fotos
        </h2>
        <div className="gallery-container">
          {images.map((image) => (
            <GalleryItem key={image.id} imageUrl={image.url} altText={image.alt} />
          ))}
        </div>
        <GallerySwiper />
      </div>
      <Footer />
      </>
  );
}


