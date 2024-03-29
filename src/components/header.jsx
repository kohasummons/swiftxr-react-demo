import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='text-black flex justify-between items-center h-16'>
      <div className='flex items-center'>
        <Link to={"/"}>
          <span className='text-2xl'>Vazolu</span>
        </Link>
      </div>

      <ul className='flex space-x-4'>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
};

export default Header;
