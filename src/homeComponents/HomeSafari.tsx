import React from 'react';
import Safari from '../components/SafariDemo';
import ss from "../assets/images/overview.png"

const HomeSafari = () => {
    return (
    <div className='flex justify-center'>
        <div className="relative w-[80%]">
        <Safari
          url="CoderXen"
          className="size-full"
          src={ss}
        />
      </div>
    </div>
        
    );
};

export default HomeSafari;