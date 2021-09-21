import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'

const Delete = () => {
    const [stockName, setStockName] = useState('');
    const [message, setMessage] = useState('');

    const handleClickDelete = async() => {
        try{
            const response = await axios.delete(`http://localhost:5000/api/stock/delete/${stockName}`,
                { name: stockName }
            );
            handleResetDelete();
            setMessage(response.data.message);
        }catch (error){
            alert(error.message);
        }
        
    }

    const handleResetDelete = async () => {
        setStockName("");
    }

    return(
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
            <Typography variant="h4">Enter the name of the stock you want to delete</Typography>
            <br/>
            <TextField
                label="Stock name"
                variant="outlined"
                style={{ width:500 }}
                value={stockName}
                onChange={(e) => setStockName(e.target.value)}
            />
            <br/>
            <Button color="primary" variant="contained" onClick={handleClickDelete}>Delete the stock from the database</Button>
            <br/>
            <Typography variant="h6">{message}</Typography>
            <br/>
            <Link to="/insert">Insert</Link>
            <br/>
            <Link to="/getPrice">Get Price</Link>
        </Grid>
    );
};

export default Delete;