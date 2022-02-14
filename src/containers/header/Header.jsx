import React from 'react';
import './header.css';
import rpa from '../../assets/robotgrafico.png';

const Header = () => {
    return (
        <div className="rpaAutomations__header section__padding" id="home">
            <div className="rpaAutomations__header-content">
                <h1 className="gradient__text">Soluciones rapidas a tareas recurrentes</h1>
                
                <p>Todos los procesos que sean recurrentes y monótonos son automatizables.</p>
                <p>Te ayudamos a mejorar la experiencia del usuario, minimizando errores, ofreciendo una calidad de servicio superior y mejorando tus costos en hasta un 80%.
                    Automatizando tus procesos, podés focalizarte en tu negocio.</p>
                
            </div>
            <br/>

            <div className="rpaAutomations__header-image">
                    <img src={rpa} alt="ai"/>
            </div>
        </div>
    )
}

export default Header
