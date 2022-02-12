import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    { title: "Automatizacion Excel", text: "Automatizar Excel optimiza el uso de la aplicación, ya que realiza tareas como formatear celdas, actualizar valores y ejecutar macros automáticamente, es posible integrar tareas automatizadas de Excel con otras tareas en cualquier área de la compañía.."},
    { title: "Automatizacion de mails", text: "Automatizar el envio o recepcion de mails interactuando con formularios u otros softwares."},
    { title: "Automatizacion SAP", text: "Puede automatizar procesos que requieren actividades repetitivas realizadas a diario por una persona."}
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">El futuro es hoy, comienza a automatizar y haz que suceda.</h1>

            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
