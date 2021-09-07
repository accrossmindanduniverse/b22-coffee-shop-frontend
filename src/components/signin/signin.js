import React, { useState, useEffect } from 'react';
import './signin.css';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import eating from '../../assets/eating.png';
import { authSignIn, toggleAuth, errorDefault } from '../../redux/actions/auth';
import Footer from '../footer/footer';

const SignIn = (props) => {
  const { errMsg } = props.auth;
  const history = useHistory();
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
      history.push('/');
    }
  });

  useEffect(() => {
    if (errMsg !== '') {
      props.errorDefault();
    }
  }, [errMsg]);

  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col md:flex-row bg-gray-100">
        <div className="flex-1">
          <img className="w-0 md:w-screen h-0 object-cover md:h-screen" src={eating} alt="" />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col space-y-10 md:space-y-0 items-center md:flex-row md:justify-between md:px-44 py-16">
            <div className="items-center flex">
              <p className="primary-text font-bold text-lg">
                Coffee Shop
              </p>
            </div>
            <div className="signup-btn rounded-full flex justify-center items-center ml-14 mr-14 md:ml-0 md:mr-0">
              <button
                type="button"
                onClick={() => history.push('/signup')}
                className="w-52 h-10 text-center primary-text font-bold text-lg"
              >
                Sign Up

              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col mr-14 ml-14 md:mr-0 md:ml-0 justify-center items-center md:px-44 space-y-10">
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
                <label htmlFor className="font-bold text-xl">
                  <p>
                    Email Address :
                  </p>
                  <input
                    className="h-16 p-5 rounded-lg w-full outline-none"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setSignIn({
                      ...signIn,
                      username: e.target.value
                    })}
                  />
                </label>
              </div>
              <div className="flex flex-col space-y-10">
                <label htmlFor className="font-bold text-xl">
                  <p>Password :</p>
                  <input
                    className="h-16 p-5 rounded-lg w-full outline-none"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setSignIn({
                      ...signIn,
                      password: e.target.value
                    })}
                  />
                </label>
              </div>
              <div className="space-y-10 pb-10 md:pb-0">
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

SignIn.defaultProps = {
  authSignIn: () => {},
  toggleAuth: () => {},
  errorDefault: () => {},
  auth: []
};

SignIn.propTypes = {
  authSignIn: PropTypes.func,
  toggleAuth: PropTypes.func,
  errorDefault: PropTypes.func,
  auth: PropTypes.node
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = { toggleAuth, authSignIn, errorDefault };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
