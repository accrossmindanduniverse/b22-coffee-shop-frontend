const initialState = {
  data: [],
  dataByCategory: [],
  variantDetail: [],
  itemsAndVariants: [],
  dataById: []
}

const items = (state=initialState, action) => {
  switch(action.type) {
    case 'GET_CATEGORY': {
      return {
        ...state,
        data: action.payload.items
      }
    }
    case 'GET_ITEM_CATEGORIES': {
      return {
        ...state,
        dataByCategory: action.payload.items
      }
    }
    case 'ITEMS_AND_VARIANTS': {
      return {
        ...state,
        itemsAndVariants: action.payload.items
      }
    }
    case 'VARIANT_DETAIL': {
      return {
        ...state,
        variantDetail: action.payload.items
      }
    }
    case 'GET_ITEM_BY_ID': {
      return {
        ...state,
        dataById: action.payload.items
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default items