const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'))
);

app.get('/*', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
  console.log('redirect paget to bar chart');
});

// app.all((err, req, res, next) => {
//   console.log('global error', err);
//   res.status(500).send('Internal Server Error');
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listen on Port ${PORT}`));

module.exports = app;
