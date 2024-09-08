import React from 'react';
import './Loader.css'
const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white backdrop-blur-sm">
            <div>
             <span className="loader"></span>
            <h1 className='mt-12 text-4xl font-bold'>Loading..</h1>   
            </div>
            
        </div>
    );
};

export default Loader;
