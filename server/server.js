import express from 'express';
import path from 'path';
import cors from 'cors';
import router from './router/ssr';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

// app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../src/index.html')));

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`##### listen on Port ${PORT}`));
