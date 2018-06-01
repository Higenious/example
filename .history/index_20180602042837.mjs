import express from 'express';
import { welcome } from './chetan';
const app = express();




app.get('/', (req, res)=> res.send('hello chet@n'));

const port = 5000;

app.listen(port, () => console.log(`App listening on port ${port}`));