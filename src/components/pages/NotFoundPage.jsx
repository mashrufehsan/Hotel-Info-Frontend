import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 - No Hotel Found</h1>
            <p>We couldn't find the hotel you were looking for.</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    );
};

export default NotFoundPage;
