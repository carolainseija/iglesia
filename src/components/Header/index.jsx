import { NavBar } from "../NavBar";

import { db } from "../../firebase"; import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import vd from "../../assets/video.mp4"



export function Header() {
  const [texts, setTexts] = useState([])

  const getTexts = async () => {
    getDocs(query(collection(db, "texts")))
      .then((doc) =>
        setTexts(doc.docs.map((d) => d.data())))
  }

  useEffect(() => {
    getTexts()
  }, [])


  return (
    <>
      <div className="headerVideo">
         <video className="header-video" autoPlay loop muted>
        <source src={vd} type="video/mp4" />
        </video>
         <NavBar />
      </div>
    </>

  )
}