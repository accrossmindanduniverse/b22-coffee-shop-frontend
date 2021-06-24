const initialState = {
  items: [],
  data2nd: [],
  transaction: [],
  totalItems: 0
}

const carts = (state=initialState, action) => {
  switch(action.type) {
    case 'CART_ADD_ITEMS': {
      console.log(action.payload)
      return {
        ...state,
          items: [ ...state.items, ...[ action.payload ] ]
      }
    }
    case 'POST_TRANSACTION': {
      return {
        ...state,
        transaction: action.payload
      }
    }
    default:
      return {
        ...state
    }
  }
}

export default carts