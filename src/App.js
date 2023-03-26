import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';

import './App.css';
import HomePage from "./components/homePage";
import AnotherPage from "./components/AnotherPage";
import TopNavigation from "./components/TopNavigation";

function App() {
    return (
        <div>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<TopNavigation />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/another-page" element={<AnotherPage />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;



