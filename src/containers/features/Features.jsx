import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    { title: "Automatización Excel", text: "Automatizar Excel optimíza el uso de la aplicación, ya que realiza tareas como formatear celdas, actualizar valores y ejecutar macros automáticamente, es posible integrar tareas automatizadas de Excel con otras tareas en cualquier área de la compañía."},
    { title: "Automatización de mails", text: "Automatizar el envío o recepcion de mails interactuando con formularios u otros softwares."},
    { title: "Automatización SAP", text: "Puede automatizar procesos que requieren actividades repetitivas realizadas a diario por una persona."}
]

const Features = () => {
    return (
        <div className="rpaAutomations__features section__padding" id="features">
            <div className="rpaAutomations__features-heading">
                <h1 className="gradient__text">El futuro es hoy, comenzá a automatizar y hace que suceda.</h1>

            </div>
            <div className="rpaAutomations__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
