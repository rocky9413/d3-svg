import express from 'express';
import path from 'path';
import cors from 'cors';
import router from './router/ssr';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('dist', express.static(path.resolve(__dirname, '../dist')));

// app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../src/index.html')));

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listen on Port ${PORT}`));

// ============================================

// import template from '../src/template';
// import ssr from '../src/ssr';
// import data from './assets/data.json';

// let initialState = {
//   isFetching: false
// };

// // server rendered home page
// app.get('/', (req, res) => {
//   // const { preloadedState, content } = ssr(initialState);
//   const { content } = ssr(initialState);
//   const response = template('Server Rendered Page', content);
//   res.setHeader('Cache-Control', 'assets, max-age=604800');
//   res.send(response);
// });

// // Pure client side rendered page
// app.get('/client', (req, res) => {
//   let response = template('Client Side Rendered page');
//   res.setHeader('Cache-Control', 'assets, max-age=604800');
//   res.send(response);
// });
