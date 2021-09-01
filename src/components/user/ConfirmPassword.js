/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router';
import './profile.css';
import { confirmPassword, uploadErrorDefault } from '../../redux/actions/user';

const ConfirmPassword = (props) => {
  const history = useHistory();
  const { errMsg, confirmToggle } = props.user;
  const [password, setPassword] = useState({
    password: ''
  });

  const handleConfirm = () => {
    props.confirmPassword(props.auth.refreshToken?.token, password);
  };

  useEffect(() => {
    if (confirmToggle) {
      props.uploadErrorDefault();
      history.push('/edit-password');
    }
  }, [confirmToggle]);

  return (
    <div>
      <div className="justify-center items-center flex flex-col mt-72">
        <div className="h-10 mx-14 w-full items-center flex justify-center">
          <p className="text-xl font-semibold text-red-600">{errMsg}</p>
        </div>
        <div className="bg-white rounded-lg justify-center flex my-10 shadow-lg space-y-7">
          <div
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleConfirm();
              }
            }}
            className="rounded-full bg-gray-50 my-24 mx-14 justify-center w-full shadow-lg"
          >
            <input
              onChange={(e) => setPassword({
                ...password,
                password: e.target.value
              })}
              className="font-xl mx-10 bg-transparent w-full outline-none"
              type="password"
              placeholder="Enter your old password"
            />
          </div>
        </div>
        <button onClick={handleConfirm} className="w-96 text-one-bg rounded-xl justify-center items-center" type="button">
          <p className="font-bold text-white text-xl my-4">Confirm</p>
        </button>
      </div>
    </div>
  );
};

ConfirmPassword.defaultProps = ({
  confirmPassword: () => {},
  uploadErrorDefault: () => {},
  user: [],
  auth: []
});

ConfirmPassword.propTypes = {
  confirmPassword: PropTypes.func,
  uploadErrorDefault: PropTypes.func,
  user: PropTypes.node,
  auth: PropTypes.node,
};

const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth
});

const mapDispatchToProps = { confirmPassword, uploadErrorDefault };

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPassword);
