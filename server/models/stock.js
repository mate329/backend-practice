import mongoose from 'mongoose';

const StockSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});

var Stock = mongoose.model("stock", StockSchema);

export default Stock;

