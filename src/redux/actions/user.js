import { http } from '../../helpers/http';

// const { REACT_APP_BACKEND_URL: URL } = process.env;
const URL = 'http://localhost:8000';

export const updateProfile = (token, id, userData) => async (dispatch) => {
  const formData = new FormData();
  formData.append('first_name', userData.first_name);
  formData.append('last_name', userData.last_name);
  formData.append('name', userData.name);
  formData.append('phone_number', userData.phone_number);
  formData.append('user_address', userData.user_address);
  formData.append('username', userData.username);

  try {
    const { data } = await http(token, id).put(`${URL}/user/update-profile`, formData);
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'UPDATE_PROFILE_FAILED',
      error: err.response.data.data
    });
  }
  return null;
};

export const uploadPicture = (token, setData) => async (dispatch) => {
  const form = new FormData();
  form.append('picture', setData.picture);
  try {
    const { data } = await http(token).put(`${URL}/user/upload-picture`, form);
    dispatch({
      type: 'UPLOAD_PICTURE',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'UPLOAD_PICTURE_REJECTED',
      error: err.response.data.data
    });
  }
};

export const getUserSigned = (token) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/user/signed`);
    dispatch({
      type: 'GET_USER_SIGNED',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const confirmPassword = (token, setData) => async (dispatch) => {
  const form = new URLSearchParams(setData);
  try {
    const { data } = await http(token).post(`${URL}/user/confirm-password`, form);
    dispatch({
      type: 'CONFIRM_PASSWORD',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'CONFIRM_PASSWORD_REJECTED',
      error: err.response.data.data
    });
  }
};

export const editPassword = (token, setData) => async (dispatch) => {
  const form = new URLSearchParams();
  form.append('password', setData.password);
  form.append('resendPassword', setData.resendPassword);
  try {
    const { data } = await http(token).patch(`${URL}/user/update-password`, form);
    dispatch({
      type: 'UPDATE_PASSWORD',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'UPDATE_PASSWORD_REJECTED',
      error: err.response.data.data
    });
  }
};

export const searchUser = (token, search) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/user?search=${search}`);
    dispatch({
      type: 'SEARCH_USER',
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: 'SEARCH_USER_REJECTED',
      error: err.response.data.data,
    });
  }
};

export const getErrorDefault = () => (dispatch) => {
  dispatch({
    type: 'GET_USER_DEFAULT'
  });
};

export const uploadErrorDefault = () => (dispatch) => {
  dispatch({
    type: 'UPLOAD_ERROR_DEFAULT'
  });
};
