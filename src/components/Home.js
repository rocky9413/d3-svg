import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="div-home">
      <ul>
        <li>
          <Link to="/face">Smile Face</Link>
        </li>
        <li>
          <Link to="/barchart">Bar Chart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
