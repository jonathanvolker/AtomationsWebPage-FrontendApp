import React from "react";
import "./playerDemo.css";

const PlayerDemo = ({ imgUrl, date, title }) => {
  return (
    <div className="rpaAutomations__blog-container_article">
      <div className="rpaAutomations__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="rpaAutomations__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>ver demo</p>
      </div>
    </div>
  );
};

export default PlayerDemo;