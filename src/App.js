import React from 'react';
import {Footer, Blog, Possibility, Features, WhatrpaAutomations, Header} from './containers';
import { Brand, Navbar} from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header />
            </div>
            <Brand />
            <WhatrpaAutomations />
            <Features />
            <Possibility />
            <Blog/> 
            <Footer /> 
        </div>
    )
}

export default App
