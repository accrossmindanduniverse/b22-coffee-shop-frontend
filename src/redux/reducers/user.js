const initialState = {
  user: {},
  signed: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE': {
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
        errMsg: ''
      };
    }
    case 'UPDATE_PROFILE_FAILED': {
      return {
        ...state,
        errMsg: action.err
      };
    }
    case 'GET_USER_SINGED': {
      return {
        ...state,
        signed: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default user;
