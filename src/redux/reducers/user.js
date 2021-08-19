const initialState = {
  user: {},
  signed: [],
  search: [],
  updateToggle: false,
  pictureToggle: false,
  updatePassword: false,
  confirmToggle: false,
  picErrMsg: '',
  errMsg: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE': {
      return {
        ...state,
        user: action.payload,
        updateToggle: !state.updateToggle
      };
    }
    case 'UPDATE_PROFILE_FAILED': {
      return {
        ...state,
        errMsg: action.error,
        updateToggle: state.updateToggle
      };
    }
    case 'UPLOAD_PICTURE': {
      return {
        ...state,
        pictureToggle: !state.pictureToggle
      };
    }
    case 'UPLOAD_PICTURE_REJECTED': {
      return {
        ...state,
        picErrMsg: action.error,
        pictureToggle: state.pictureToggle
      };
    }
    case 'CONFIRM_PASSWORD': {
      return {
        ...state,
        confirmToggle: !state.confirmToggle
      };
    }
    case 'CONFIRM_PASSWORD_REJECTED': {
      return {
        ...state,
        errMsg: action.error,
        confirmToggle: state.confirmToggle
      };
    }
    case 'UPDATE_PASSWORD': {
      return {
        ...state,
        updatePassword: !state.updatePassword
      };
    }
    case 'UPDATE_PASSWORD_REJECTED': {
      return {
        ...state,
        errMsg: action.error,
        updatePassword: state.updatePassword
      };
    }
    case 'UPLOAD_ERROR_DEFAULT': {
      return {
        ...state,
        errMsg: '',
        picErrMsg: '',
        updateToggle: false,
        pictureToggle: false,
        updatePassword: false,
        confirmToggle: false,
      };
    }
    case 'GET_USER_SIGNED': {
      return {
        ...state,
        signed: action.payload,
      };
    }
    case 'SEARCH_USER': {
      return {
        ...state,
        search: action.payload,
      };
    }
    case 'SEARCH_USER_REJECTED': {
      return {
        ...state,
        errMsg: action.error,
      };
    }
    case 'GET_USER_DEFAULT': {
      return {
        ...state,
        errMsg: '',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default user;
