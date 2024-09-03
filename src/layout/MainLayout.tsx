
import { Outlet } from 'react-router-dom';
import React from 'react';

const MainLayout = () => {
  return (
    <div className="">
      <div>
        <Navbar/> 
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;