import React from 'react';
import './possibility.css';
import vrlady from '../../assets/manual-rpa.jpg';

const Possibility = () => {
    return (
        <div className="rpaAutomations__possibility" id="possibility">
            <div className="rpaAutomations__possibility-image">
                <img src={vrlady} alt="possibility" />
            </div>
            <div className="rpaAutomations__possibility-content">
                <h1 className="gradient__text">Posibilidades mas allá de tu imaginación</h1>
                <p className="rpaAutomations__possibility-content__text"></p>
            </div>
        </div>
    )
}

export default Possibility
