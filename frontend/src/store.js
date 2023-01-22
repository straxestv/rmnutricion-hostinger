import Axios from 'axios';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
  productReviewSaveReducer,
} from './reducers/productReducers';
import{
  imgListReducer,
  imgDetailsReducer,
  imgSaveReducer,
  imgDeleteReducer,
} from'./reducers/imgReducer';
import { cartReducer } from './reducers/cartReducers';
import{fromDetailsReducer} from'./reducers/fromReducers';
import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer,
} from './reducers/userReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myOrderListReducer,
  orderListReducer,
  orderDeleteReducer,
} from './reducers/orderReducers';
import {
  orderNoteCreateReducer,
  orderNoteDetailsReducer,
  myOrderNoteListReducer,
  orderNoteListReducer,
  orderNotePayReducer,
  orderNoteDeleteReducer,
} from './reducers/noteReducers';

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

if(userInfo) {
  Axios.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`;
}

const initialState = {
  cart: { cartItems, shipping: {}, payment: {} },
  userSignin: { userInfo },
};
const reducer = combineReducers({
  imgList:imgListReducer,
  imgDetails:imgDetailsReducer,
  imgSave:imgSaveReducer,
  imgDelete:imgDeleteReducer,
  productList: productListReducer,
  fromDetails:fromDetailsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  productReviewSave: productReviewSaveReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  userUpdate: userUpdateReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  orderNoteCreate: orderNoteCreateReducer,
  orderNoteDetails: orderNoteDetailsReducer,
  myOrderNoteList: myOrderNoteListReducer,
  orderNoteList: orderNoteListReducer,
  orderNotePay: orderNotePayReducer,
  orderNoteDelete: orderNoteDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
