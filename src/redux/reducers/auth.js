const initialState = {
  onAuth: false,
  signUp: [{}],
  token: null,
  data: {},
  errMsg: ''
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_TOGGLE': {
      return {
        ...state,
        onAuth: !state.onAuth
      };
    }
    case 'AUTH_SIGNIN': {
      return {
        ...state,
        data: action.payload.data,
        token: action.payload
      };
    }
    case 'AUTH_SIGNOUT': {
      return {
        ...state,
        onAuth: false,
        token: null
      };
    }
    case 'AUTH_SIGNIN_REJECTED': {
      console.log(action.err);
      return {
        ...state,
        errMsg: action.err,
      };
    }
    case 'AUTH_SIGNUP': {
      return {
        ...state,
        signUp: action.payload,
        onAuth: !state.onAuth,
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
        token: null,
        data: {},
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
