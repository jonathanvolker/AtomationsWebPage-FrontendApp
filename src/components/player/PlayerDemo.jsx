import React from "react";
import "./playerDemo.css";
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";

const PlayerDemo = (demoID) => {
  return (
      <>
    <div className="rpaAutomations__blog-container_article">
       <ReactPlayer
          url='https://www.youtube.com/watch?v=JNDZ1dRjlpk&ab_channel=AuraQuantic'
          className='react-player'
          playing
          width='100%'
          height='100%'
        />
        <Link to="/">
             <span><a href="#">Volver</a></span>
        </Link>
    </div>
    </>
  );
};

export default PlayerDemo;