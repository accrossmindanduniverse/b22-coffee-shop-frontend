const initialState = {
  data: [],
  dataByCategory: [],
  pageInfo: [],
  newDataByCategory: [],
  allTransactions: [],
  variantDetail: [],
  itemsAndVariants: [],
  dataById: [],
  search: []
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY': {
      return {
        ...state,
        data: action.payload.items
      };
    }
    case 'GET_ITEM_CATEGORIES': {
      return {
        ...state,
        dataByCategory: action.payload.items,
        pageInfo: action.payload.pageInfo
      };
    }
    case 'GET_ITEMS_NEXT': {
      return {
        ...state,
        newDataByCategory: action.payload
      };
    }
    case 'ITEMS_AND_VARIANTS': {
      return {
        ...state,
        itemsAndVariants: action.payload.items
      };
    }
    case 'VARIANT_DETAIL': {
      return {
        ...state,
        variantDetail: action.payload.items
      };
    }
    case 'GET_ITEM_BY_ID': {
      return {
        ...state,
        dataById: action.payload.items
      };
    }
    case 'SEARCH_ITEM': {
      return {
        ...state,
        search: action.payload
      };
    }
    case 'GET_ALL_TRANSACTIONS': {
      return {
        ...state,
        allTransactions: action.payload.items
      };
    }
    case 'DELETE_TRANSACTION': {
      return {
        ...state,
        data: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default items;
