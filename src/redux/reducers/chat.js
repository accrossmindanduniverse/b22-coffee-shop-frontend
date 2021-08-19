const initialState = {
  latest: [],
  room: [],
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHAT': {
      return {
        ...state,
        latest: action.payload
      };
    }
    case 'GET_CHAT_ROOM': {
      return {
        ...state,
        room: action.payload,
      };
    }
    case 'SEND_MESSAGE': {
      return {
        ...state,
      };
    }
    case 'DOWNLOAD': {
      return {
        ...state,
      };
    }
    case 'DELETE_CHAT_ROOM': {
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default chat;