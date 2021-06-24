import { http } from "../../helpers/http"

export const updateProfile = (token, id, user) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token, id, user).post(`http://localhost:3001/user/update-profile`)
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