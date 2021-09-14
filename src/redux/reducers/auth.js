const initialState = {
  onAuth: false,
  signUp: [{}],
  signUpToggle: false,
  refreshToken: null,
  token: null,
  errMsg: ''
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SIGNIN': {
      return {
        ...state,
        token: action.payload,
        onAuth: !state.onAuth
      };
    }
    case 'REFRESH_TOKEN': {
      return {
        ...state,
        refreshToken: action.payload
      };
    }
    case 'REFRESH_TOKEN_REJECTED': {
      return {
        ...state,
        errMsg: action.error,
      };
    }
    case 'AUTH_SIGNOUT': {
      return initialState;
    }
    case 'AUTH_SIGNIN_REJECTED': {
      return {
        ...state,
        errMsg: action.err,
      };
    }
    case 'AUTH_SIGNUP': {
      return {
        ...state,
        signUp: action.payload,
        signUpToggle: !state.signUpToggle
      };
    }
    case 'AUTH_SIGNUP_REJECTED': {
      return {
        ...state,
        errMsg: action.err,
        signUp: [{}]
      };
    }
    case 'ERROR_DEFAULT': {
      return {
        ...state,
        errMsg: '',
        onAuth: false,
        signUpToggle: false,
        signUp: [{}]
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default auth;
