import React from 'react';
import DigitalClock from "./DigitalClock";
import { Link } from 'react-router-dom';

function HomePage () {
    return(
        <div className="HomePage">
            <h1>this is the HomePage</h1>
            <DigitalClock/>
            <Link to="/">Go back to navigation</Link>
        </div>
    );
}

export default HomePage;


