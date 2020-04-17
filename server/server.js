// const path = require('path');
// const express = require('express');

import express from 'express';
import path from 'path';
import template from '../src/template';
import ssr from '../src/ssr';
// import data from './assets/data.json';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../dist')));

// app.get('/', (req, res) =>
//   res.status(200).sendFile(path.join(__dirname, '../src/index.html'))
// );

// app.get('/*', (req, res) => {
//   console.log('redirect paget 1');
//   res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
// });

// app.all((err, req, res, next) => {
//   console.log('global error', err);
//   res.status(500).send('Internal Server Error');
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listen on Port ${PORT}`));

// ============================================

let initialState = {
  isFetching: false,
  apps: data // data not use
};

// server rendered home page
app.get('/', (req, res) => {
  const { preloadedState, content } = ssr(initialState);
  const response = template('Server Rendered Page', preloadedState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});

// Pure client side rendered page
app.get('/client', (req, res) => {
  let response = template('Client Side Rendered page');
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});

module.exports = app;
