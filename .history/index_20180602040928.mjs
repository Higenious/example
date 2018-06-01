import express from 'express';

const app = express();




app.get('/', (req, res)=> res.send('hello chet@n'));

const port = 5000;

app.listen(port, () => console.log(`App listening on port ${port}`));