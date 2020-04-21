import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './mainRoutes';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      <hr />
      <h3>Sections</h3>
      {/* <Switch>
        {routes.map(({ path, exact, component: Component, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={props => <Component {...props} {...rest} />}
          />
        ))}
      </Switch> */}
      <a href="/svg">d3-SVG-Lists</a>
    </div>
  );
};

export default App;
