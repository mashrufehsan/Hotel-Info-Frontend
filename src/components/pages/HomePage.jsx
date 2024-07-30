import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Our Hotel Booking Site</h1>
            <Link to="/hotel/hotel-green">Go to Hotel Green</Link>
        </div>
    );
};

export default HomePage;
