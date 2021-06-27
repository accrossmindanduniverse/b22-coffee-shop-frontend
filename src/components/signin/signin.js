/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './signin.css';
import { connect } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import eating from '../../assets/eating.png';
import { authSignIn, toggleAuth } from '../../redux/actions/auth';
import Footer from '../footer/footer';

const SignIn = (props) => {
  const { errMsg } = props.auth;
  const [signIn, setSignIn] = useState({
    username: '',
    password: ''
  });

  const handleSignIn = () => {
    props.authSignIn(signIn.username, signIn.password);
  };

  useEffect(() => {
    const { token } = props.auth;
    if (token !== null) {
      props.toggleAuth();
      props.history.push('/');
    }
  });

  // useEffect(() => {
  //   if (err) {
  //     return errMsg;
  //   }
  //   return errMsg;
  // }, [errMsg]);

  return (
    <div>
      <div className="flex flex-col md:flex-row bg-gray-100">
        <div className="flex-1">
          <img className="w-screen h-screen" src={eating} alt="" />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex md:flex-row justify-between px-44 py-16">
            <div className="items-center flex">
              <p className="primary-text font-bold text-lg">
                Coffee Shop
              </p>
            </div>
            <div className="signup-btn rounded-full ">
              <button
                type="button"
                onClick={() => props.history.push('/signup')}
                className="w-52 h-10 text-center primary-text font-bold text-lg"
              >
                Sign Up

              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center px-44 space-y-10">
            <div className="flex justify-center">
              <p className="text-3xl tracking-wider font-bold primary-text">Sign In</p>
            </div>
            <div>
              {
                errMsg !== ''
                && (
                <div className="text-red-700 bg-red-200 font-bold px-5 py-5 rounded-lg w-full">
                  {errMsg}
                </div>
                )
             }
            </div>
            <div
              role="button"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSignIn();
                }
              }}
              className="h-full w-full space-y-24"
            >
              <div className="flex flex-col space-y-10">
                <label className="font-bold text-xl">Email Address :</label>
                <input
                  className="h-16 p-5 rounded-lg"
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setSignIn({
                    ...signIn,
                    username: e.target.value
                  })}
                />
              </div>
              <div className="flex flex-col space-y-10">
                <label className="font-bold text-xl">Password :</label>
                <input
                  className="h-16 p-5 rounded-lg"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setSignIn({
                    ...signIn,
                    password: e.target.value
                  })}
                />
              </div>
              <div className="space-y-10">
                <button type="button" className="w-full bg-white h-16 rounded-lg" onClick={handleSignIn}>Sign In</button>
                <button type="button" className="w-full bg-white h-16 rounded-lg inline-block space-x-5">
                  <FcGoogle className="inline-block" size={30} />
                  <span>Sign In with Google</span>

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = { toggleAuth, authSignIn };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
