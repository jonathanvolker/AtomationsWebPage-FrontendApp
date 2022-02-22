import React from 'react';
import './possibility.css';
import vrlady from '../../assets/manual-rpa.jpg';
import { BsFillDiagram3Fill, BsLaptop} from "react-icons/bs";
import { GiMegabot} from "react-icons/gi";



const Possibility = () => {
    return (
        <div className="rpaAutomations__possibility" id="possibility">
          
            <div className="rpaAutomations__possibility-image">
                <img src={vrlady} alt="possibility" />
            </div>
            
            <div className="rpaAutomations__possibility-content">
                <h1 className="rpaAutomations__possibility-content__text"> <BsLaptop/>  Buscamos y analizamos tus procesos.</h1>
                <h1 className="rpaAutomations__possibility-content__text"><BsFillDiagram3Fill/>  Diseñamos el diagrama de tus procesos. </h1>
                <h1 className="rpaAutomations__possibility-content__text"> <GiMegabot/> Construimos y ponemos en marcha tu robot. </h1>
            </div>
        </div>
    )
}

export default Possibility
