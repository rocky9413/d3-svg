import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import svgLists from './svgLists';

hydrate(
  <BrowserRouter>
    <svgLists />
  </BrowserRouter>,
  document.getElementById('app')
);
