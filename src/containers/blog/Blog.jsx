import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03} from './imports';

const Blog = () => {
    return (
        <div className="rpaAutomations__blog section__padding" id="blog">
            <div className="rpaAutomations__blog-heading">
                <h1 className="gradient__text">Mirá demos de automatizaciones realizadas.</h1>
            </div>
            <div className="rpaAutomations__blog-container">
                <div className="rpaAutomations__blog-container_groupA">
                    <Article imgUrl={blog01} date="Sep 26, 2021" title="Automatizacion 1"/>
                </div>
                <div className="rpaAutomations__blog-container_groupB">
                    <Article imgUrl={blog02} date="Sep 26, 2021" title="Automatizacion 2"/>
                    <Article imgUrl={blog03} date="Sep 26, 2021" title="Automatizacion 3"/>
                </div>
            </div>
        </div>
    )
}

export default Blog
