import { http } from '../../helpers/http';

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getItemsCategory = () => async (dispatch) => {
  try {
    const { data } = await http().get(`${URL}/category`);
    dispatch({
      type: 'GET_CATEGORY',
      payload: {
        items: data.data
      }
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const getItemCategories = (name, num) => async (dispatch) => {
  try {
    if (!num) {
      const { data } = await http().get(`${URL}/category?search=${name}`);
      dispatch({
        type: 'GET_ITEM_CATEGORIES',
        payload: {
          items: data.data,
          pageInfo: data.pageInfo
        }
      });
    } else {
      const { data } = await http().get(`${URL}/category?search=${name}&page=${num}`);
      dispatch({
        type: 'GET_ITEMS_NEXT',
        payload: {
          items: data.data,
          pageInfo: data.pageInfo
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getItemsAndVariants = (id) => async (dispatch) => {
  try {
    const { data } = await http().get(`${URL}/variant/${id}`);
    dispatch({
      type: 'ITEMS_AND_VARIANTS',
      payload: {
        items: data.data
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const getDetailVariant = (id, key) => async (dispatch) => {
  try {
    const { data } = await http().get(`${URL}/variant/detail/${id}?search=${key}`);
    dispatch({
      type: 'VARIANT_DETAIL',
      payload: {
        items: data.data
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllTransactions = (token, id) => async (dispatch) => {
  try {
    const { data } = await http(token, id).get(`${URL}/private/user-transactions`);
    dispatch({
      type: 'GET_ALL_TRANSACTIONS',
      payload: {
        items: data.data
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTransaction = (token, id) => async (dispatch) => {
  const { data } = await http(token).delete(`${URL}/private/${id}`);
  try {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const getDetailItem = (id) => async (dispatch) => {
  try {
    const { data } = await http().get(`${URL}/items/${id}`);
    dispatch({
      type: 'GET_ITEM_BY_ID',
      payload: {
        items: data.data
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchItem = (search, sortBy, sort, page) => async (dispatch) => {
  try {
    const { data } = await http().get(`${URL}/items?search=${search}&sort[${sortBy}]=${sort}&page=${page}`);
    dispatch({
      type: 'SEARCH_ITEM',
      payload: {
        items: data.data,
        pageInfo: data.pageInfo
      }
    });
  } catch (err) {
    console.log(err);
  }
};