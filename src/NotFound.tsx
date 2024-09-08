import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
            <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
            <p className="text-xl mb-8">Oops! The page you're looking for does not exist.</p>
            <Link to="/" className="text-blue-500 hover:underline text-lg">
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;
