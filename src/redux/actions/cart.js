/* eslint-disable no-console */
import { http } from '../../helpers/http';

export const addItems = (amount, data2nd) => ({
  type: 'CART_ADD_ITEMS',
  payload: { amount, data2nd }
});

export const finalTransaction = (token, transaction) => async (dispatch) => {
  try {
    const { data } = await http(token).post('http://localhost:3001/private/transaction', {
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
