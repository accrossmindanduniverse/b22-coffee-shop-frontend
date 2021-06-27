/* eslint-disable react/prefer-stateless-function */
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Home from './components/home/home';
import SignUp from './components/signup/signup';
import FavoriteProduct from './components/product/favoriteProduct/favoriteProduct';
import ProductDetail from './components/product/product-detail/productDetail';
import SignIn from './components/signin/signin';
import './app.css';
import Private from './private/private';
import Navbar from './navbar/navbar';
import ProductCust from './components/product/productCust';
import cart from './components/cart/cart';
import Profile from './components/user/profile';
import History from './components/history/history';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Private path='/product-cust'>
            </Private> */}
          <Private path="/profile">
            <Route component={Profile} />
          </Private>
          <Route path="/product-cust" component={ProductCust} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Private path="/payment-delivery">
            <Route path="/payment-delivery" component={cart} />
          </Private>
          <Route path="/favorite-product" component={FavoriteProduct} />
          <Private path="/product-detail/:id">
            <Route component={ProductDetail} />
          </Private>
          <Private path="/history">
            <Route component={History} />
          </Private>
          <Route component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);
