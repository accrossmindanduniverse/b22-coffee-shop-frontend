import { BrowserRouter, Switch, Route } from 'react-router-dom'

// pages
import Home from '../src/components/home/home'
import SignUp from './components/sign-up/signup'
import productDetail from './components/product/product-detail/productDetail'
import FavoriteProduct from '../src/components/product/favoriteProduct/favoriteProduct';
import ProductDetail from '../src/components/product/product-detail/productDetail';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import SignIn from './components/signin/signin';
import './app.css'
import Private from './private/private'
import Navbar from './navbar/navbar'
import ProductCust from './components/product/productCust';
import cart from './components/cart/cart';
import Profile from './components/user/profile'
import Custom from './private/custom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            {/* <Private path='/product-cust'>
            </Private> */}
            <Private path='/profile'>
              <Route component={Profile}/>
            </Private>
            <Route path='/product-cust' component={ProductCust}/>
            <Route path='/product-detail' component={productDetail}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/payment-delivery' component={cart}/>
            <Route path='/favorite-product' component={FavoriteProduct}/>
            <Private path='/product-detail/:id'>
              <Route component={ProductDetail}/>
            </Private>
            <Route component={ProductDetail}/>
          </Switch>
        </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App)