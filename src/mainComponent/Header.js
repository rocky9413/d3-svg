import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/svg">
      <h1>d3-SVG-SSR</h1>
    </Link>
  );
};

export default Header;
