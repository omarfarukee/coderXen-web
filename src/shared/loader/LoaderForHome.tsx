import React from 'react';
import './Loader.css';
// import logo from '../../assets/logo/logo.png';

const LoaderForHome = () => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white backdrop-blur-sm"
            style={{
                backgroundImage: `url(https://astrogeekz.wordpress.com/wp-content/uploads/2019/02/warptrails001-1.gif)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div>
                {/* <img className='w-72' src={logo} alt="Logo" /> */}
                <span className='text-5xl text-[#2694c7]'>Coder</span><span className='text-6xl text-white'>X</span><span className='text-5xl text-[#2694c7]'>en </span>
                <span className="loader-home"></span>
            </div>
        </div>
    );
};

export default LoaderForHome;
