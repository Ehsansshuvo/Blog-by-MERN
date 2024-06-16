import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const api = ["/", "/user/:id", "/About"];
  const menunav = ['Home', 'Profile', 'About'];
  const location = useLocation();

  useEffect(() => {
    const currentIndex= api.findIndex(path=>{
      if(path=== "/user"){
        return location.pathname.includes("user");
      }
      return path===location.pathname;
    });
    setActiveIndex(currentIndex);
  }, [location.pathname]);


  return (
    <div className="flex flex-row w-full items-center justify-between shadow-md">
      <div className="text-red-500 mt-5  pl-40  ">
        <p>Ahosan's Blog</p>
      </div>
      <div className="mt-5 flex-grow flex justify-center items-center space-x-4">
        <input type='text' name='search' class="border-solid border-2 border-sky-100"/>
        {[0, 1, 2].map((i) => (
          <p
            key={i}
            className={`cursor-pointer ${activeIndex === i ? 'underline' : ''} hover:underline hover:text-red-900`}
            
          >
            <Link to={api[i]}>{menunav[i]}</Link>
          </p>
        ))}
      </div>
      <div className="mt-5">
        <select id="options" name="options" className="ml-auto">
          <option value="account">Account settings</option>
          <option value="support">Support</option>
          <option value="license">License</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
