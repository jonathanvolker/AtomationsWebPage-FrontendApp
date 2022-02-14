import React from 'react';
import './brand.css';
import { sap,uipath, excel, mails, navegadores } from './imports';

const Brand = () => {
    return (
        <div className="rpaAutomations__brand section__padding">
            <div>
                <img src={uipath} alt="uipath" />
            </div>
            
            <div>
                <img src={excel} alt="excel" />
            </div>
           
            <div>
                <img src={sap} alt="sap" />
            </div>
            <br/>
            <div>
                <img src={mails} alt="mails" />
            </div>
            <br/>
            <div>
                <img src={navegadores} alt="mails" />
            </div>
        </div>
    )
}

export default Brand