import express from 'express';
import React from 'react';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import App from '../../src/mainComponent/App';
import svgLists from '../../src/svg/svgLists';

const router = express.Router();

router.get('/', (req, res) => {
  const componentStream = renderToNodeStream(<App />);
  const htmlStart = ` <!DOCTYPE html>
    <html>
    <head>
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <style>
        body { font-family: Arial, sans-serif; font-size: 15px; }
      </style>
    </head>
    <body>
    <div id="app">`;

  res.write(htmlStart);

  componentStream.pipe(res, { end: false });

  const htmlEnd = `</div>
    <script src="/static/vendors~main~svg.js"></script>
    <script src="/static/main.js"></script>
  </body>
  </html>`;

  componentStream.on('end', () => {
    res.write(htmlEnd);

    res.end();
  });
});

router.get('/svg*', (req, res) => {
  const context = {};

  const component = renderToString(
    <StaticRouter location={req.url} context={context}>
      <svgLists />
    </StaticRouter>
  );

  const html = `
    <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>D3-SVG</title>
      </head>
      <body>
        <div id="app">${component}</div>
        <script src="/dist/vendors~main~svg.js"></script>
        <script src="/dist/svg.js"></script>
      </body>
      </html>`;

  if (context.url) {
    res.writeHead(301, { Location: context.url });
    res.end();
  } else {
    res.send(html);
  }
});

router.get('*', (req, res) => {
  res.status(404).send(`
    <html>
      <head>
        <style>
          body { font-family: sans-serif; font-size: 15px; }
          h1 { color: #c7c7c7; text-align: center; }
        </style>
        <title>D3-SVG</title>
      </head>
      <body>
        <h1>404 - Not Found</h1>
      </body>
    </html>`);
});

export default router;

// router.get('/*', (req, res, next) => {
//   const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
//   const promise = activeRoute.fetchInitialData
//     ? activeRoute.fetchInitialData(req.path)
//     : Promise.resolve();
//   promise
//     .then(data => {
//       const context = { data };
//       const markup = renderToString(
//         <StaticRouter location={req.url} context={context}>
//           <App />
//         </StaticRouter>
//       );

//       res.send(`
//       <!DOCTYPE html>
//         <html lang="en">
//           <head>
//             <meta charset="UTF-8" />
//             <title>D3-SVG</title>
//             <script src="/dist/bundle.js" defer></script>
//             <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
//           </head>
//           <body>
//             <div id="app">${markup}</div>
//           </body>
//         </html>
//       `);
//     })
//     .catch(next);
// });

// export default router;

// ==============================

// const ReactDOMServer = require('react-dom/server');

// const render = (reactComponent) => {
//     return new Promise((resolve, reject) => {
//         const body = [];
//         const bodyStream = ReactDOMServer.renderToNodeStream(reactComponent);
//         bodyStream.on('data', (chunk) => {
//             body.push(chunk.toString());
//         });
//         bodyStream.on('error', (err) => {
//             reject(err);
//         });
//         bodyStream.on('end', () => {
//             resolve(body.join(''));
//         });
//     });
// };

// export default render;
