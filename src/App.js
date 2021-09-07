import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React from 'react';
import Home from './components/home/home';
import SignUp from './components/signup/signup';
import FavoriteProduct from './components/product/favoriteProduct/favoriteProduct';
import ProductDetail from './components/product/product-detail/productDetail';
import SignIn from './components/signin/signin';
import './app.css';
import Private from './private/private';
import ProductCust from './components/product/productCust';
import cart from './components/cart/cart';
import Profile from './components/user/profile';
import History from './components/history/history';
import Cart2 from './components/cart/cart2';
import ConfirmPassword from './components/user/ConfirmPassword';
import Chat from './components/chat/Chat';
import { getChat, getChatRoom } from './redux/actions/chat';
import ChatRoom from './components/chat/ChatRoom';
import EditPassword from './components/user/EditPassword';

const App = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Private path="/profile">
        <Route component={Profile} />
      </Private>
      <Private path="/chat">
        <Route component={Chat} />
      </Private>
      <Private path="/chatRoom">
        <Route component={ChatRoom} />
      </Private>
      <Private path="/confirm-password">
        <Route component={ConfirmPassword} />
      </Private>
      <Private path="/edit-password">
        <Route component={EditPassword} />
      </Private>
      <Route path="/product-cust" component={ProductCust} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Private path="/payment-delivery">
        {
              props.cart.items.length > 0 ? (
                <Route component={cart} />
              ) : (
                <Route component={Cart2} />
              )
          }
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

App.propTypes = {
  cart: PropTypes.node.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart
});

const mapDispatchToProps = { getChat, getChatRoom };

export default connect(mapStateToProps, mapDispatchToProps)(App);
