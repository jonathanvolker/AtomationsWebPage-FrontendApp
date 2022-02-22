import React from 'react';
import { Feature } from '../../components';
import './whatrpaAutomations.css';

const WhatrpaAutomations = () => {
    return (
        <div className="rpaAutomations__whatrpaAutomations section__margin" id="wrpaAutomations">
            <div className="rpaAutomations__whatrpaAutomations-feature">
                <Feature title="Que es RPA?" text="Un RPA (Robotic Process Automation) se encarga de automatizar procesos que requieren actividades repetitivas realizadas a diario por una persona." />
            </div>
            <div className="rpaAutomations__whatrpaAutomations-heading">
                <h1 className="gradient__text">Procesa grandes volúmenes de información sin demoras.</h1>
                <h1 className="gradient__text">Manipula aplicaciones y datos con precisión.</h1>
            </div>
            
          
        </div>
    )
   
}	

export default WhatrpaAutomations
