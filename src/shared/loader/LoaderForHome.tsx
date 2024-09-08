import React from 'react';
import './Loader.css'
import logo from '../../assets/logo/logo.png'
const LoaderForHome = () => {
    return (
        
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white backdrop-blur-sm">
            <div>
             <img className='w-72' src={logo} alt="" />
             <span className="loader-home"></span>
            </div>
            
        </div>
    );
};

export default LoaderForHome;
