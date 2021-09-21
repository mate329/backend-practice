import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { Delete, GetPrice, Insert } from './components';

const App = () => {
    return(
        <Grid>
            <Router>
                <Switch>
                    <Route exact path = "/insert"><Insert/></Route>
                    <Route exact path = "/delete"><Delete/></Route>
                    <Route exact path = "/getPrice"><GetPrice/></Route>
                </Switch>
            </Router>
        </Grid>
    );
}

export default App;