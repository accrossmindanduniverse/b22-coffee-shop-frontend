const initialState = {
  onAuth: false,
  token: null,
  data: {},
  errMsg: ''
}

const auth = (state=initialState, action) => {
  switch(action.type) {
    case 'AUTH_TOGGLE': {
      return {
        ...state,
        onAuth: !state.onAuth
      }
    }
    case 'AUTH_SIGNIN': {
      console.log(action.payload.data)
      return {
        ...state,
        data: action.payload.data,
        token: action.payload
      }
    }
    case 'AUTH_SIGNOUT': {
      return {
        ...state,
        onAuth: false,
        token: null
      }
    }
    case 'AUTH_SIGNIN_REJECTED': {
      console.log(action.err)
      return {
        ...state,
        errMsg: action.err
      }
    }
    case 'AUTH_SIGNUP': {
      return {
        ...state
      }
    }
    case 'AUTH_SIGNUP_REJECTED': {
      return {
        ...state,
        errMsg: action.err
      }
    }
    default: {
      return {
        ...state
      }
   }
}
}

export default auth