import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Insert = () => {
    const [stockName, setStockName] = useState('');
    const [stockPrice, setStockPrice] = useState('');
    const [message, setMessage] = useState('');

    const handleClickInsert = async () => {
        try{
                const response = await axios.post(`http://localhost:5000/api/stock/insert`,
                { name: stockName, price: stockPrice }
            );
            handleResetInsert();
            setMessage(response.data.message);
        }catch(error){
            alert(error.message);
        }
    }

    const handleResetInsert = async () => {
        setStockName('');
        setStockPrice('');
    }

    return(
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
            <Typography variant="h4">Enter the name and price of the stock you want to insert</Typography>
            <br/>
            <TextField
                label="Stock name"
                variant="outlined"
                style={{ width:500 }}
                value={stockName}
                onChange={(e) => setStockName(e.target.value)}
            />
            <br/>
            <TextField
                label="Stock price"
                variant="outlined"
                style={{ width:500 }}
                value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)}
            />
            <br/>
            <Button color="primary" variant="contained" onClick={handleClickInsert}>Insert the stock</Button>
            <br/>
            <Typography variant="h6">{message}</Typography>
            <br/>
            <Link to="/delete">Delete</Link>
            <br/>
            <Link to="/getPrice">Get Price</Link>
        </Grid>
    )

}

export default Insert;