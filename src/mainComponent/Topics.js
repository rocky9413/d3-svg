import React from 'react';
import { Link } from 'react-router-dom';

const Topics = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/svgs/face">Smile Face</Link>
        </li>
        <li>
          <Link to="/svgs/barchart">Bar Chart</Link>
        </li>
        <li>
          <Link to="/linktest">Link Testing</Link>
        </li>
      </ul>
    </div>
  );
};

export default Topics;
