import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="Que es RPA?" text="Un RPA (Robotic Process Automation) se encarga de automatizar procesos que requieren actividades repetitivas realizadas a diario por una persona." />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">Tareas recurrentes y repetitivas.</h1>
                <h1 className="gradient__text">Optimize el valor agregado de sus empleados.</h1>
            </div>
          {/*   <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments." />
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments." />
            </div> */}
        </div>
    )
}

export default WhatGPT3
