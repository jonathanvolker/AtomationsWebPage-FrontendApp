import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
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

export default Article;
