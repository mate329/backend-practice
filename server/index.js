import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import stock from './routes/api/stock.js';

const app = express();
const port = 5000;

app.use(
    bodyParser.urlencoded({
      extended: false
    })
);

app.use(express.json());
app.use(cors());

const url = `lol not gonna connect motherfucker`;

mongoose.connect(
    url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true  
    }
)
.then(() => console.log(`Database successfully connected`))
.catch((err) => console.log(err));

app.use("/api/stock", stock);

app.listen(port, () => {
    console.log(`Backend practice - listening at http://localhost:${port}`);
})
