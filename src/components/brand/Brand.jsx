import React from 'react';
import './brand.css';
import {google, sap,uipath, excel,atlassian, dropbox, slack, shopify} from './imports';

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={uipath} alt="uipath" />
            </div>
            <br/>
            <div>
                <img src={excel} alt="excel" />
            </div>
            <br/>
            <div>
                <img src={sap} alt="sap" />
            </div>
        </div>
    )
}

export default Brand