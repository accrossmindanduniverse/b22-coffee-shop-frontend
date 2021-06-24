import { http } from "../../helpers/http"
// const { BACKEND_URL: URL } = process.env

export const toggleAuth = () => {
  return {
    type: 'AUTH_TOGGLE'
  }
}

export const authSignIn = (username, password, token) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('username', username)
    form.append('password', password)
    try {
      const { data } = await http(token).post(`http://localhost:3001/auth/signin`, form.toString())
    dispatch({
      type: 'AUTH_SIGNIN',
      payload: data.data
    })
    console.log(data)
    } catch(err) {
      dispatch({
        type: 'AUTH_SIGNIN_REJECTED',
        err: err.response.data.data
      })
    }
  }
}

export const authSignOut = () => ({
  type: 'AUTH_SIGNOUT'
})

export const authSignUp = (username, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('username', username)
    form.append('password', password)
    try {
      const { data } = await http().post('http://localhost:3001/auth/signup', form.toString())
      dispatch({
        type: 'AUTH_SIGNUP',
        payload: data.data
      })
    } catch (err) {
      dispatch({
        type: 'AUTH_SIGNUP_REJECTED',
        err: err.response.data.data
      })
    }
  }
}