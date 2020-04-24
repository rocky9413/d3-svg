import React from 'react';
import { Link, Route } from 'react-router-dom';
import SvgRoutes from './SvgRoutes';

const SvgLists = () => {
  return (
    <div>
      <h3>
        <a href="/">Back to Main Page</a>
      </h3>
      <h3>adding new text</h3>
      <ul>
        {SvgRoutes.map(({ path, name }) => (
          <li key={path}>
            <Link key={path} to={path}>
              {name}
            </Link>
          </li>
        ))}
        {/* <li><Link to="/svg/barchart">Bar Chart</Link></li>  */}
      </ul>

      <hr />

      {/* {SvgRoutes.filter(({ path }) => path !== '/svg').map(
        ({ path, exact, component: Component, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={props => <Component {...props} {...rest} />}
          />
        )
      )} */}
      {SvgRoutes.filter(({ path }) => path !== '/svg').map(
        ({ path, exact, component }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        )
      )}
    </div>
  );
};

export default SvgLists;
