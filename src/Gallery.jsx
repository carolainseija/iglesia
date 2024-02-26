import { Footer } from "./components/Footer";
import { NavBarPages } from "./components/NavbarPages";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";


const GalleryItem = ({ imageUrl, key }) => {
  return (
    <div className="gallery-item">
      <img key={key}  src={imageUrl} />
    </div>
  );
};

export default function Gallery() {

  const [images, setImages] = useState([])

  const getGallery = async () => {
    getDocs(query(collection(db, "gallery")))
      .then((doc) =>
        setImages(doc.docs.map((d) => ({
          id: d.id,
          ...d.data()
        }))))
  }

  useEffect(() => {
    getGallery()
  }, [])

  return (
    <>
    <NavBarPages />
      <div className="headerGallery">
      </div>
      <div className="galleryPage">
        <h2>Nuestra Galeria de fotos</h2>
        <div className="gallery-container">
           {images.map((image) => (
            <GalleryItem key={image.id} imageUrl={image.href}  />
          ))} 
        </div>
      </div>
      <Footer />
      </>
  );
}


