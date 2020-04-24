import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SvgLists from './SvgLists';
import './svgStyles.css';

const Svg = () => (
  <BrowserRouter>
    <SvgLists />
  </BrowserRouter>
);

if (typeof window !== 'undefined') {
  hydrate(<Svg />, document.getElementById('app'));
}
