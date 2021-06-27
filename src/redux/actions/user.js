import { http } from '../../helpers/http';

const updateProfile = (token, id, userData) => async (dispatch) => {
  const sizeLimit = 1024 * 1024 * 2;
  const formData = new FormData();
  formData.append('picture', userData.picture);
  formData.append('first_name', userData.first_name);
  formData.append('last_name', userData.last_name);
  formData.append('name', userData.name);
  formData.append('phone_number', userData.phone_number);
  formData.append('username', userData.username);
  formData.append('password', userData.password);
  if (userData.picture > sizeLimit) {
    return window.alert('File size is too large');
  }
  try {
    const { data } = await http(token, id).put('http://localhost:3001/user/update-profile', formData);
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: data.data
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
  return null;
};

export default updateProfile;
