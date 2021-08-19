/* eslint-disable react/no-unused-prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { editPassword, uploadErrorDefault } from '../../redux/actions/user';
import { authSignOut } from '../../redux/actions/auth';

const EditPassword = (props) => {
  const { updatePassword } = props.user;
  const [typed, setTyped] = useState(false);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState({
    password: '',
    resendPassword: '',
  });

  const handleChangePassword = () => {
    props.editPassword(props.auth.refreshToken?.token, password);
    setModal(false);
  };

  const showModal = (visible) => {
    setModal(visible);
  };

  useEffect(() => {
    if (password.resendPassword !== password.password || password.password.length < 8) {
      setTyped(true);
    } else {
      setTyped(false);
    }
  }, [typed, password]);

  useEffect(() => {
    if (updatePassword) {
      setSuccess(true);
      props.uploadErrorDefault();
    }
  }, [updatePassword]);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
        props.authSignOut();
      }, 2000);
    }
  }, [success]);

  return (
    <div>
      {success && (
      <div className="modal w-screen h-screen flex justify-center items-center">
        <div className="flex justify-center items-center rounded-lg bg-white">
          <p className="font-bold text-2xl primary-brown-text my-14 mx-24">Password Updated</p>
        </div>
      </div>
      )}
      {modal && (
      <div onChange={() => setModal(true)} className="modal w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col bg-white rounded-xl h-72 btn ensure-btn p-5 space-y-20">
          <p className="font-bold text-2xl text-center">Are you sure want to change your password? After this you should back to sign in</p>
          <div className="flex-1 font-black text-2xl flex flex-row space-x-40">
            <button
              onClick={() => showModal(false)}
              type="button"
              className="h-14 w-32 cancel-btn rounded-xl"
            >
              Cancel

            </button>
            <button
              onClick={handleChangePassword}
              type="button"
              className="h-14 w-32 delete-btn rounded-xl"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      )}
      <div className="justify-center items-center flex flex-col mt-72">
        <div className="h-10 mx-14 w-full items-center flex justify-center">
          {password.password.length < 8 && (
          <p className="text-xl font-semibold text-red-600">Password must be 8 or greater characters long</p>
          )}
        </div>
        <div className="bg-white rounded-lg my-10 px-4 shadow-lg space-y-7">
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full bg-gray-50 my-7 mx-14 justify-center w-full shadow-lg">
              <input
                onChange={(e) => setPassword({
                  ...password,
                  password: e.target.value
                })}
                className="font-xl mx-10 my-4 bg-transparent w-full outline-none"
                type="password"
                placeholder="Enter your new password"
              />
            </div>
            <div className="rounded-full bg-gray-50 my-7 mx-14 w-full shadow-lg justify-between flex-row flex items-center">
              <input
                onChange={(e) => setPassword({
                  ...password,
                  resendPassword: e.target.value
                })}
                className="font-xl mx-10 my-4 bg-transparent w-full outline-none"
                type="password"
                placeholder="retype your new password"
              />
              {typed ? (
                <div className="h-5 w-7 rounded-full bg-red-600 mr-10" />
              ) : (
                <div className="h-5 w-7 rounded-full bg-green-600 mr-10" />
              )}
            </div>
          </div>
        </div>
        {typed ? (
          <div className="w-96 text-one-bg rounded-xl flex justify-center items-center">
            <p className="font-bold text-white text-xl my-4 opacity-5">Confirm</p>
          </div>
        ) : (
          <button onClick={() => showModal(true)} className="w-96 text-one-bg rounded-xl" type="button">
            <p className="font-bold text-white text-xl my-4">Confirm</p>
          </button>
        )}
      </div>
    </div>
  );
};

EditPassword.defaultProps = ({
  editPassword: () => {},
  uploadErrorDefault: () => {},
  authSignOut: () => {},
  user: [],
  auth: []
});

EditPassword.propTypes = {
  editPassword: PropTypes.func,
  uploadErrorDefault: PropTypes.func,
  authSignOut: PropTypes.func,
  user: PropTypes.node,
  auth: PropTypes.node,
};

const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth
});

const mapDispatchToProps = { editPassword, uploadErrorDefault, authSignOut };

export default connect(mapStateToProps, mapDispatchToProps)(EditPassword);
