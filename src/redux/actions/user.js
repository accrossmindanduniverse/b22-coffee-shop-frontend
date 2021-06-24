import { http } from "../../helpers/http"

export const updateProfile = (token, id, userData) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token, id).post(`http://localhost:3001/user/update-profile`, {
        first_name: userData.first_name,
        last_name: userData.lastname,
        name: userData.name,
        phone_number: userData.phone_number,
        user_address: userData.user_address,
        username: userData.username
       })
      dispatch({
        type: 'UPDATE_PROFILE',
        payload: {
          data: data.data
        }
      })
      console.log(data)
    } catch(err) {

    }
  }
}