import React from 'react';
import { Link, Route } from 'react-router-dom';
import SvgRoutes from './SvgRoutes';

const SvgLists = () => {
  return (
    <div>
      <h3>
        <a href="/">Back to Main Page</a>
      </h3>
      <ul>
        {SvgRoutes.map(({ path, name }) => (
          <li key={path}>
            <Link key={path} to={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <hr />

      {/* {SvgRoutes.filter(({ path }) => path !== '/svg').map(
        ({ path, exact, component: Component, ...rest }) => (
          <Route key={path} path={path} exact={exact}
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

// =================================================
// Allow components to be controlled elsewhere

// import React from 'react'
// import './styles.css'

// function Navbar({
//   items,
//   selectedItem: selectedItemProp,
//   onSelect: onSelectProp = () => {},
// }) {
//   const { current: isControlled } = React.useRef(selectedItemProp !== undefined)
//   const [selectedItem, setSelectedItem] = React.useState(
//     isControlled ? selectedItemProp : '/home',
//   )

//   function onClick(value) {
//     return (e) => {
//       if (isControlled) onSelectProp(value, e)
//       else setSelectedItem(value)
//     }
//   }

//   const selectedItemResult = isControlled ? selectedItemProp : selectedItem

//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.to} onClick={onClick(item.to)}
//           style={{listStyle: 'none', display: 'inline-block', marginRight: 15,
//             color: selectedItemResult === item.to ? 'purple' : undefined }}
//         > {item.label} </li>
//       ))}
//     </ul>
//   )
// }

// function App() {
//   const [selectedItem, setSelectedItem] = React.useState('/home')
//   const items = [
//     { to: '/home', label: 'Home' }, { to: '/blog', label: 'Blog' },
//     { to: '/about', label: 'About' }, { to: '/contact', label: 'Contact' } ]

//   return (
//     <div>
//       <Navbar items={items} selectedItem={selectedItem} onSelect={setSelectedItem} />
//     </div>
//   )
// }
// export default App
