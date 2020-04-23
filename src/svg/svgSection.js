import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SvgLists from './SvgLists';

const Svg = () => (
  <BrowserRouter>
    <SvgLists />
  </BrowserRouter>
);

hydrate(<Svg />, document.getElementById('app'));
