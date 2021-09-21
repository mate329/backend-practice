import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, Typography, Button, Grid } from '@material-ui/core';

const GetPrice = () => {
    const [stockName, setStockName] = useState('');
    const [message, setMessage] = useState('');

    const handleClickGetPrice = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/stock/getprice/${stockName}`,
                { name: stockName }
            );
            handleResetInsert();
            setMessage(response.data.message);
        } catch (error) {
            alert(error.message);
        }
    }

    const handleResetInsert = async () => {
        setStockName('');
    }

    return(
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
            <Typography variant="h4">Enter the stock to see the price of it</Typography>
            <br/>
            <TextField
                label="Stock name"
                variant="outlined"
                style={{ width:500 }}
                value={stockName}
                onChange={(e) => setStockName(e.target.value)}
            />
            <br/>
            <Button color="primary" variant="contained" onClick={handleClickGetPrice}>Get price</Button>
            <br/>
            <Typography variant="h6">{message}</Typography>
            <br/>
            <Link to="/insert">Insert</Link>
            <br/>
            <Link to="/delete">Delete</Link>
        </Grid>
    )
}

export default GetPrice;