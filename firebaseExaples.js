import { db } from '../../firebase'; //firebase config
import { collection, getDocs, query, where } from 'firebase/firestore';



//traer todos los datos
const getAllBanners = () => {
    getDocs(query(collection(db, "images")))
        .then((doc) => {
            console.log("dooocs", doc.docs.map((d) => d.data()))
        })
}


//traer datos con la id
const getAllBannersWithId = () => {
    getDocs(query(collection(db, "images")))
        .then((doc) =>
            console.log(
                doc.docs.map((d) => ({
                    id: d.id,
                    ...d.data()
                }))
            ))
}

//traer datps con async await
const getAllBannerAsyncAwait = async () => {
    const q = query(collection(db, "images"))
    const docs = (await getDocs(q)).docs.map((d) => ({
        ...d.data(),
        id: d.id,
    }))
    console.log("docsss", docs)
}

//traer el dato con la id
const getBannerID = async () => {
    const docRef = doc(db, "images", "banners")
    const docSnap = await getDoc(docRef)
    console.log("documneto especifico por id", docSnap.data())
}


//cuando los datos estan como objetos, se iteran asi:

{Object.keys(banners).length > 0 && (
    <>
      {Object.values(banners).map((banner, index) => (
        <div key={index}>
          <img src={banner} alt={`Banner ${index + 1}`} />
        </div>
      ))}
    </>
  )}


  