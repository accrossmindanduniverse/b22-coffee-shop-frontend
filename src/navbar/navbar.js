/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import coffee1 from '../assets/coffee-1.png';
import { authSignOut } from '../redux/actions/auth';

const Navbar = (props) => {
  const handleSignOut = () => {
    props.authSignOut();
  };

  return (
    <div className="space-x-14 flex-row relative bg-white h-20 justify-center items-center flex m-auto w-full space-x-44">

      <div className="primary-brown-text pl-10 flex flex-row space-x-7 w-80">
        <img src={coffee1} alt="" />
        <div>
          <p className="font-bold text-xl">
            Coffee Shop
          </p>
        </div>
      </div>
      <div className="relative m-auto navlist items-center justify-center flex flex-row">
        <div className="space-x-24 w-auto">
          <Link className="nav-hover" to="/">Home</Link>
          <Link className="nav-hover" to="/product-cust">Product</Link>
          <Link className="nav-hover" to="/payment-delivery">Your Cart</Link>
          <Link className="nav-hover" to="/history">History</Link>
        </div>
        <div className="flex-1 flex flex-row relative space-x-24 w-auto justify-center items-center font-bold primary-brown-text">
          {
                  props.auth.token !== null ? (
                    <div className="flex flex-row space-x-8 items-center">
                      <Link to="/profile" className="bg-gray-700 w-7 h-7 rounded-full">
                        {/* <img src={props.auth.token.userData.picturealt} alt="" /> */}
                      </Link>
                      <button type="button" onClick={handleSignOut} className="w-32 h-10 rounded-full flex justify-center items-center primary-btn">Sign Out</button>
                    </div>
                  ) : (
                    <>
                      <Link to="/signin">Sign In</Link>
                      <Link to="/signup" className="w-32 h-10 rounded-full flex justify-center items-center primary-btn">Sign Up</Link>
                    </>
                  )
}
        </div>
      </div>
    </div>
  );
};

authSignOut.defaultProps = {
  authSignOut: () => {}
};

authSignOut.propTypes = ({
  authSignOut: PropTypes.func
});

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = { authSignOut };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
