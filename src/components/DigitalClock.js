import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];

        return `${year}/${month}/${day} ${dayOfWeek}`;
    };

    return (
        <div className="Digit_Clock">
            <p>Digital Clock</p>
            <p>{formatDate(currentDateTime)}</p>
            <p>{currentDateTime.toLocaleTimeString()}</p>
        </div>
    );
};

export default DigitalClock;
