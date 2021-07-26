import { http } from '../../helpers/http';

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const updateProfile = (token, id, userData) => async (dispatch) => {
  const formData = new FormData();
  formData.append('picture', userData.picture);
  formData.append('first_name', userData.fistName);
  formData.append('last_name', userData.lastName);
  formData.append('name', userData.name);
  formData.append('phone_number', userData.phoneNumber);
  formData.append('user_address', userData.userAddress);
  formData.append('username', userData.username);
  // eslint-disable-next-line no-plusplus
  // const cleanData = (setData) => {
  // eslint-disable-next-line no-restricted-syntax
  // for (const newData in setData) {
  // eslint-disable-next-line max-len
  // if (setData[newData] === null || setData[newData] === undefined || setData[newData] === '' || setData[newData] === {}) {
  // eslint-disable-next-line no-param-reassign
  //       delete setData[newData];
  //     }
  //   }
  //   return setData;
  // };
  // eslint-disable-next-line no-restricted-syntax
  console.log(userData, 'test action');
  // eslint-disable-next-line no-restricted-syntax
  // const cleanData = (setData) => {
  // eslint-disable-next-line no-restricted-syntax
  //   for (const pair of setData.entries()) {
  //     console.log(`${pair[0]}, ${pair[1]}`);
  //     console.log(pair[setData], 'test pair');
  // eslint-disable-next-line max-len
  //     if (pair[setData] === null || pair[setData] === undefined || pair[setData] === '' || pair[setData] === {}) {
  //       delete pair[setData];
  //     }
  //   }
  //   return setData;
  // };

  try {
    const { data } = await http(token, id).put(`${URL}/user/update-profile`, formData);
    // picture: formData.picture,
    // first_name: [...formData][1][1],
    // last_name: [...formData][2][1],
    // name: [...formData][3][1],
    // phone_number: [...formData][4][1],
    // user_address: [...formData][5][1],
    // username: [...formData][6][1],
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: data.data
    });
    console.log(data);
  } catch (err) {
    dispatch({
      type: 'UPDATE_PROFILE_FAILED',
      payload: err.response.data.data
    });
  }
  return null;
};

export const getUserSigned = (token) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/user/singed`);
    dispatch({
      type: 'GET_USER_SINGED',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};
