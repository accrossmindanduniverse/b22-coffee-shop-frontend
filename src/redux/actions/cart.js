import { http } from './../../helpers/http';

export const addItems = (data, data2nd) => {
  return {
    type: 'CART_ADD_ITEMS',
    payload: {
      data,
      data2nd
    }
  }
}

export const finalTransaction = () => {
  return async (dispatch) => {
    try {
      const { data } = await http().post(`http://localhost:3001/private/transaction`)
      dispatch({
        type: 'POST_TRANSACTION',
        payload: {
          items: data.data
        }
      })
    } catch(err) {
      console.log(err)
    }
  }
}