/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import eating from '../../assets/eating.png';
import './signup.css';
import { authSignUp, errorDefault } from '../../redux/actions/auth';
import Footer from '../footer/footer';

const SignUp = (props) => {
  const history = useHistory();

  const { errMsg, signUp } = props.auth;
  const [state, setState] = useState({
    username: '',
    password: ''
  });
  const [modal, setModal] = useState({
    clicked: false
  });

  const showModal = (visible) => {
    setModal({
      ...modal,
      clicked: visible
    });
  };

  const handleSignUp = () => {
    props.authSignUp(state.username, state.password);
  };

  const signInClick = () => {
    handleSignUp();
    showModal(true);
  };

  console.log(signUp[0], 'test123123');

  useEffect(() => {
    setTimeout(() => {
      showModal(false);
    }, 3000, () => {
      history.push('signin');
    });
  }, [modal.clicked, errMsg]);

  useEffect(() => {
    if (errMsg !== '') props.errorDefault();
  }, [errMsg]);

  return (
    <div>
      {modal.clicked && (
      <div
        onChange={() => setModal({
          ...modal,
          clicked: true
        })}
        className="modal w-screen h-screen"
      >
        <div className="modal-content bg-white rounded-md justify-center items-center flex">
          <p className="primary-text font-black text-lg">Sign up success</p>
        </div>
      </div>
      )}
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
                onClick={() => props.history.push('/signin')}
                className="w-52 h-10 text-center primary-text font-bold text-lg"
              >
                Sign In

              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center px-44 space-y-10">
            <div className="flex justify-center">
              <p className="text-3xl tracking-wider font-bold primary-text">Sign Up</p>
            </div>
            <div
              role="button"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSignUp();
                }
              }}
              className="h-full w-full space-y-24"
            >
              {errMsg !== '' && (
              <p className=" text-red-700 bg-red-200 font-bold px-5 py-5 rounded-lg w-full">{errMsg}</p>
              )}
              <div className="flex flex-col space-y-10">
                <label className="font-bold text-xl">Email Address :</label>
                <input
                  className="h-16 rounded-lg p-5"
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setState({
                    ...state,
                    username: e.target.value
                  })}
                />
              </div>
              <div className="flex flex-col space-y-10">
                <label className="font-bold text-xl">Password :</label>
                <input
                  className="h-16 rounded-lg p-5"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setState({
                    ...state,
                    password: e.target.value
                  })}
                />
              </div>
              <div className="space-y-10">
                <button type="button" className="w-full h-16 bg-white rounded-lg" onClick={signInClick}>Sign Up</button>
                <button type="button" className="w-full h-16 bg-white rounded-lg inline-block space-x-5">
                  <FcGoogle className="inline-block" size={30} />
                  <span>Sign Up with Google</span>
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

SignUp.defaultProps = ({
  authSignUp: () => {},
  errorDefault: () => {}
});

SignUp.propTypes = {
  authSignUp: PropTypes.func,
  errorDefault: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = { authSignUp, errorDefault };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
