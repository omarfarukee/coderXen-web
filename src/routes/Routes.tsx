import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../homeComponents/Home';
import AboutUs from '../aboutUs/AboutUs';
import NotFound from '../NotFound';




const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/aboutUs',
                element: <AboutUs/>,
            },
            {
                path: '*',
                element: <NotFound/>,
            },
        ],
    }
]);

export default routes;