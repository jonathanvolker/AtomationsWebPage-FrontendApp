import React from 'react';
import './possibility.css';
import vrlady from '../../assets/manual-rpa.jpg';

const Possibility = () => {
    return (
        <div className="gpt3__possibility" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={vrlady} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h1 className="gradient__text">Posibilidades mas alla de su imaginacion</h1>
                <p className="gpt3__possibility-content__text"></p>
            </div>
        </div>
    )
}

export default Possibility
