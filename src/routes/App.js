import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../components/Login';
import Products from '../pages/Products';
import Layout from '../components/Layout.jsx';
import MyPrices from '../pages/MyPrices';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Layout>
                    <Route path="/home" component={MyPrices} />
                    <Route path="/products" component={Products} />
                </Layout>
            </Switch>
        </BrowserRouter>
    )

}

export default App;

