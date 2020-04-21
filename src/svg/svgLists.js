import React from 'react';
import { Link, Route } from 'react-router-dom';
import svgRoutes from './svgRoutes';

const svgLists = () => {
  return (
    <div>
      <ul>
        {svgRoutes.map(({ path, name }) => (
          <li key={path}>
            <Link key={path} to={path}>
              {name}
            </Link>
          </li>
        ))}
        {/* <li><Link to="/svg/face">Smile Face</Link></li> */}
        {/* <li><Link to="/svg/barchart">Bar Chart</Link></li>  */}
        <li>
          <a href="/">Back to Main Server</a>
        </li>
      </ul>
      <hr />
      {svgRoutes.map(({ path, exact, component: Component, ...rest }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={props => <Component {...props} {...rest} />}
        />
      ))}
    </div>
  );
};

export default svgLists;
