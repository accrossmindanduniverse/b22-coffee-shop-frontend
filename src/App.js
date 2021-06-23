import { BrowserRouter, Switch, Route } from 'react-router-dom'

// pages
import Home from '../src/components/home/home'
import SignUp from '../src/components/sign-up/signUp'
import productCust from '../src/components/product/productCust'
import productDetail from './components/product/product-detail/productDetail'
import FavoriteProduct from '../src/components/product/favoriteProduct/favoriteProduct';
import ProductDetail from '../src/components/product/product-detail/productDetail';

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    number: 0
  }
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/product-cust' component={productCust}/>
          <Route path='/product-detail' component={productDetail}/>
          <Route path='/favorite-product' component={FavoriteProduct}/>
          <Route path='/product-detail' component={ProductDetail}/>
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}
