import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';
import cart from './cart';
import items from './items';
import user from './user';

const persistAuth = {
  storage,
  key: 'auth'
};

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  cart,
  items,
  user
});

export default reducer;
