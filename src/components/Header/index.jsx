import { NavBar } from "../NavBar";

import { db } from "../../firebase"; import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";


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
    <div className="frontHeader">
      <div className="overlayHeader"></div>
      <NavBar classColor='navbar' />
      {texts.map((text) => (
        <div className="contentHeader">
          <h1>{text.titleHeader}</h1>
          <p>{text.subtitleHeader}</p>
          <button className="btnConect">Charlemos</button>
        </div>
      ))}
    </div>

  )
}