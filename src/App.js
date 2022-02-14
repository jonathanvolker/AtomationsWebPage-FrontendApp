import React,{ useEffect } from 'react';
import { PlayerDemo, Home } from './components';
import './App.css';
import { Routes, Route } from "react-router-dom";

const App = () => {
   
    return (
        <div className="App">
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/player" element={<PlayerDemo />} />
            </Routes>
        </div>
    )
}

export default App
