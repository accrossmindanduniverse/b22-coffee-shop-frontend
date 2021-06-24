import { http } from "../../helpers/http"

export const updateProfile = (token, id, userData) => {
  return async (dispatch) => {
    const formData = new FormData()
    formData.append('picture', userData.picture)
    formData.append('first_name', userData.first_name)
    formData.append('last_name', userData.last_name)
    formData.append('name', userData.name)
    formData.append('phone_number', userData.phone_number)
    formData.append('username', userData.username)
    formData.append('password', userData.password)
    try {
      const { data } = await http(token, id).put(`http://localhost:3001/user/update-profile`, formData)
      dispatch({
        type: 'UPDATE_PROFILE',
        payload: {
          data: data.data
        }
      })
      console.log(data)
    } catch(err) {
      console.log(err)
    }
  }
}