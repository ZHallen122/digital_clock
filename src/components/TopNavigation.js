import {BrowserRouter as Router, Link, Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./homePage";
import AnotherPage from "./AnotherPage";
import React from "react";

function TopNavigation() {
    const location = useLocation();

    if (location.pathname === '/home') {
        return null;
    }

    if (location.pathname === '/another-page') {
        return null;
    }

    return (
        <div className="top_navigation">
            <h1>Please choose one</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/another-page">Another Page</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TopNavigation;