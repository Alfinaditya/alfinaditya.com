import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/blog'>Blog</Link>
      <a href='mailto:alfinaditia02@gmail.com'>Contact</a>
    </nav>
  );
};

export default Navbar;
