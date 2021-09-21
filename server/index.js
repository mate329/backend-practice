import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import stock from './routes/api/stock.js';

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const url = `mongodb+srv://mrasetina:avicii@stockdatabase.zylui.mongodb.net/StockDatabase?retryWrites=true&w=majority`;

const connectDatabase = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

        app.listen(port, () => console.log(`Backend practice - listening at http://localhost:${port}`))
    } catch (error) {
        console.log(error);
    }
}

connectDatabase();

app.use("/api/stock", stock);