import express from 'express';

import Stock from '../../models/stock.js';

const router = express.Router();

router.delete('/delete/:stock', async (req, res) => {
    try{
        const name = req.params.stock;
        Stock.deleteOne({ name });
        res.status(200).json({ message:`Stock successfully deleted` });

    }catch(error){
        console.log(error);
    }
});

router.post('/insert', async (req, res) => {
    try{
        const name = req.body.name;
        const price = req.body.price;
        const newStock = new Stock({
            name: name,
            price: price
        });

        newStock.save().then(() => {
            res.status(200).json({ message:`Added successfully` });
        })
    }catch(error){
        console.log(error);
    }
    
});

router.get('/getprice/:stock', async (req, res) => {
    try{
        const name = req.params.stock;
        Stock.findOne({ name }).exec().then(njanji => {
            if(!njanji){
                res.status(404).json({ message:"Stock not found"} );
            }
    
            res.status(200).json( {message:`The price of the searched stock is ${njanji.price}` })
        });
    }catch(error){
        console.log(error);
    }
    
});



export default router;

