/* eslint-disable no-console */
import { http } from '../../helpers/http';

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const addItems = (amount, data2nd) => ({
  type: 'CART_ADD_ITEMS',
  payload: { amount, data2nd }
});

export const finalTransaction = (token, transaction) => async (dispatch) => {
  try {
    const { data } = await http(token).post(`${URL}/private/transaction`, {
      item_id: transaction.item_id,
      total: transaction.total,
      tax: transaction.tax,
      item_amount: transaction.item_amount,
      variant: transaction.variant,
      payment_method: transaction.payment_method,
      user_address: transaction.user_address
    });
    dispatch({
      type: 'POST_TRANSACTION',
      payload: data.data
    });
    console.log(data.data);
  } catch (err) {
    console.log(err);
  }
};
