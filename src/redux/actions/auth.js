import { http } from '../../helpers/http';

// const { REACT_APP_BACKEND_URL: URL } = process.env;
const URL = 'http://localhost:8000';

export const toggleAuth = () => ({
  type: 'AUTH_TOGGLE'
});

export const authSignIn = (username, password, token) => async (dispatch) => {
  const form = new URLSearchParams();
  form.append('username', username);
  form.append('password', password);
  try {
    const { data } = await http(token).post(`${URL}/auth/signin`, form.toString());
    dispatch({
      type: 'AUTH_SIGNIN',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'AUTH_SIGNIN_REJECTED',
      err: err.response.data.data
    });
  }
};

export const authSignOut = () => ({
  type: 'AUTH_SIGNOUT'
});

export const authSignUp = (username, password) => async (dispatch) => {
  const form = new URLSearchParams();
  form.append('username', username);
  form.append('password', password);
  try {
    const { data } = await http().post(`${URL}/auth/signup`, form.toString());
    dispatch({
      type: 'AUTH_SIGNUP',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'AUTH_SIGNUP_REJECTED',
      err: err.response.data.data
    });
  }
};

export const authRefreshToken = (token, setData) => async (dispatch) => {
  const form = new URLSearchParams();
  form.append('refreshToken', setData.refreshToken);
  try {
    const { data } = await http(token).post(`${URL}/auth/refresh-token`, form);
    dispatch({
      type: 'REFRESH_TOKEN',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'REFRESH_TOKEN_REJECTED',
      error: err.response?.data.data
    });
  }
};

export const errorDefault = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'ERROR_DEFAULT'
    });
  }, 3000);
};
