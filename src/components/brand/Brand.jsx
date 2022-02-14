import React from 'react';
import './brand.css';
import { sap,uipath, excel, mails, navegadores, proceso } from './imports';

const Brand = () => {
    return (
        <div className="rpaAutomations__brand section__padding">
           {/*  <div>
                <img src={uipath} alt="uipath" />
            </div> */}
            
            <div>
                <img src={proceso} alt="excel" />
            </div>
           
           
        </div>
    )
}

export default Brand