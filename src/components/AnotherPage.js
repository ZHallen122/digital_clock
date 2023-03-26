import React from 'react';
import {Link} from "react-router-dom";

const AnotherPage = () => {
    return (
        <div>
            <h1>Another Page</h1>
            <p>Sorry nothing here.
                Please go to home page
            </p>
            <Link to="/">Go back to navigation</Link>
        </div>
    );
};

export default AnotherPage;