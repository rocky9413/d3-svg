import express from 'express';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
// import serialize from 'serialize-javascript';
import App from '../../src/mainComponent/App';
import SvgLists from '../../src/svg/SvgLists';

const router = express.Router();

const htmlStart = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>D3-SVG</title>
    </head>
    <body>
      <div id="app">`;

// <link rel="stylesheet" type="text/css" href="/static/main.css">

router.get('/', (req, res) => {
  const componentStream = renderToNodeStream(<App />);

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
      <SvgLists />
    </StaticRouter>
  );

  const htmlEnd = `</div>
        <script src="/static/vendors~main~svg.js"></script>
        <script src="/static/svg.js"></script>
      </body>
    </html>`;

  const html = `${htmlStart} ${component} ${htmlEnd}`;

  if (context.url) {
    res.writeHead(301, { Location: context.url });
    res.end();
  } else {
    res.send(html);
  }
});

router.get('/readme', (req, res) => {
  fs.readFile(
    path.resolve(__dirname, '../../readme.md'),
    'utf8',
    (err, data) => {
      if (err) throw err;
      else res.json({ data });
    }
  );
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

// =============================================================

// const render = (reactComponent) => {
//     return new Promise((resolve, reject) => {
//         const body = [];
//         const bodyStream = renderToNodeStream(reactComponent);
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

// =============================================================

// const stylesheet = new ServerStyleSheet();
// const html = ReactDOMServer.renderToString(
//   stylesheet.collectStyles(
//     <Root />
//   )
// );
// const styleTags = stylesheet.getStyleTags();

// res.status(200);
// res.send(`
//     <html>
//       <head>
//         <title>My awesome server-rendered app!</title>
//         ${styleTags}
//         <script src="/static/main.js" />
//       </head>
//       <body>
//         <div id="app">${appHTML}</div>
//       </body>
//     </html>
// `);
