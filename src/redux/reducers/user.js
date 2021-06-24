const initialState = {
  user: {}
}

const user = (state=initialState, action) => {
  switch(action.type) {
    case 'UPDATE_PROFILE': {
      console.log(action.payload)
      return {
        ...state,
        user: action.payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default user