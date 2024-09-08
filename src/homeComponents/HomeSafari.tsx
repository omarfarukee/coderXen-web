import React from 'react';
import Safari from '../components/SafariDemo';


const HomeSafari = () => {
    return (
    <div className='flex justify-center'>
        <div className="relative w-[80%]">
        <Safari
          url="CoderXen"
          className="size-full"
          src="https://present.readthedocs.io/en/latest/_images/welcome-to-coding.gif"
        />
      </div>
    </div>
        
    );
};

export default HomeSafari;