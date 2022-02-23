import React from "react";
import "./home.css";
import { Brand, Feature, Navbar } from "../../components";
import {Footer, Blog, Possibility, WhatrpaAutomations, Header} from '../../containers';




export default function Home() {
    return (

        <>
         <div className="gradient__bg">
             <Navbar/>
             <Header />
         </div>
            <Brand />
            <WhatrpaAutomations />
            <Feature />
            <Possibility />
        
            <Footer /> 
        </>
    )
}