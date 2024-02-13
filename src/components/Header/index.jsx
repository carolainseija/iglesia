import { NavBar } from "../NavBar";

export function Header(){
    return(
        <div className="frontHeader">
        <NavBar/>
        <div className="contentHeader">
          <h1>Donde la Fe Encuentra un Hogar</h1>
          <p>
            Un refugio espiritual donde las puertas siempre están abiertas para aquellos en busca de paz, consuelo.
          </p>
          <button className="btnConect">Charlemos</button>
        </div>
      </div>
    )
}