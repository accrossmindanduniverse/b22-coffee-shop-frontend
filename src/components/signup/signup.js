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

  const { errMsg } = props.auth;
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
    props.authSignUp(state.username, state.password).then((res) => {
      setState({
        ...state,
        username: '',
        password: ''
      });
      console.log(res, 'signup result');
    });
  };

  useEffect(() => {
    if (props.auth.signup !== undefined) {
      showModal(true);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      showModal(false);
    }, 3000, () => {
      history.push('/signin');
    });
  }, [modal.clicked]);

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
        <div className="bg-white relative top-96 ml-14 mr-14 md:ml-96 md:mr-96 rounded-md justify-center items-center flex">
          <p className="primary-text font-black text-lg mt-10 mb-10">Sign up success</p>
        </div>
      </div>
      )}
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
                onClick={() => history.push('/signin')}
                className="w-52 h-10 text-center primary-text font-bold text-lg"
              >
                Sign In

              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col mr-14 ml-14 md:mr-0 md:ml-0 justify-center items-center md:px-44 space-y-10">
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
              <div className="bg-red-300 rounded-xl">
                <p className="text-xl px-12 font-bold text-red-700">{errMsg}</p>
              </div>
              )}
              <div className="flex flex-col space-y-10">
                <label htmlFor className="font-bold text-xl">
                  <p>
                    Email Address :
                  </p>
                  <input
                    className="h-16 p-5 rounded-lg w-full outline-none"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setState({
                      ...state,
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
                    onChange={(e) => setState({
                      ...state,
                      password: e.target.value
                    })}
                  />
                </label>
              </div>
              <div className="space-y-10 pb-10 md:pb-0">
                <button type="button" className="w-full bg-white h-16 rounded-lg" onClick={handleSignUp}>Sign Up</button>
                <button type="button" className="w-full bg-white h-16 rounded-lg inline-block space-x-5">
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
