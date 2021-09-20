import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

var database = [];

app.post('/insert', (req, res) => {
    const name = req.body.name;
    const stock = { name, price };
    database.push(stock);
    res.status(200).json({ message:"Stock successfully added" });
})

app.get('getPrice/:stock', (req, res) => {
    const name = req.params.stock;
    res.status(200).json( { message:`Price of the stock searched: ${database.find(name)}` });
})

app.get('*', (req, res) => {
    res.send('Working');
})

app.listen(port, () => {
    console.log(`Backend practice - listening at http://localhost:${port}`);
})
   