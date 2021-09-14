/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Private = ({ children, auth, ...rest }) => {
  const { token } = auth;
  return (
    <Route
      {...rest}
      render={() => {
        if (token === null) {
          return (<Redirect to="/signin" />);
        }
        return (children);
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Private);
