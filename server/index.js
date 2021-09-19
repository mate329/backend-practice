import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(express.json);

var database = [];

app.get('/insert', (req, res) =>{
    const { stockDetails } = req.body;
    database.push(stockDetails);
})

app.listen(port, () => console.log(`Server running on port ${port}`));