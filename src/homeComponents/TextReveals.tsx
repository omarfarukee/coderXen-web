

import React from 'react';
import TextRevealByWord from '../components/TextRevealByWord';

export default function TextRevealForhomepage() {
  return (
    <div className="z-10 flex items-center justify-center bg-white rounded-lg dark:bg-black" data-aos="zoom-in"data-aos-duration="2000">
        <h1 className="absolute text-[11em] uppercase text-[#00000017]">CoderXen</h1>
      <TextRevealByWord className='' text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio quo molestiae maxime magnam enim vel dolorum itaque aspernatur culpa deleniti ab alias repellat ipsa optio quidem, cumque sapiente. Tenetur!"  />
      
    </div>
  );
}
