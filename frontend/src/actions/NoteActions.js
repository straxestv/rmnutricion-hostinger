import Axios from "axios";
import {
    ORDER_NOTE_CREATE_REQUEST, ORDER_NOTE_CREATE_SUCCESS, ORDER_NOTE_CREATE_FAIL,
    ORDER_NOTE_DETAILS_REQUEST, ORDER_NOTE_DETAILS_SUCCESS, ORDER_NOTE_DETAILS_FAIL, ORDER_NOTE_PAY_REQUEST, ORDER_NOTE_PAY_SUCCESS, ORDER_NOTE_PAY_FAIL, MY_ORDER_NOTE_LIST_REQUEST, MY_ORDER_NOTE_LIST_SUCCESS, MY_ORDER_NOTE_LIST_FAIL, ORDER_NOTE_DELETE_REQUEST, ORDER_NOTE_DELETE_SUCCESS, ORDER_NOTE_DELETE_FAIL, ORDER_NOTE_LIST_REQUEST, ORDER_NOTE_LIST_SUCCESS, ORDER_NOTE_LIST_FAIL
} from "../constants/noteConstants";

const createOrder = (order) => async (dispatch, getState) => {
    try {
    dispatch({ type: ORDER_NOTE_CREATE_REQUEST, payload: order });
    const { userSignin: { userInfo } } = getState();
    const { data: { data: newOrder } } = await Axios.post("/api/orders", order, {
        headers: {
        Authorization: ' Bearer ' + userInfo.token
        }
    });
    dispatch({ type: ORDER_NOTE_CREATE_SUCCESS, payload: newOrder });
    } catch (error) {
    dispatch({ type: ORDER_NOTE_CREATE_FAIL, payload: error.message });
    }
}

const listMyOrders = () => async (dispatch, getState) => {
    try {
    dispatch({ type: MY_ORDER_NOTE_LIST_REQUEST });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.get("/api/orders/mine", {
        headers:
        { Authorization: 'Bearer ' + userInfo.token }
    });
    dispatch({ type: MY_ORDER_NOTE_LIST_SUCCESS, payload: data })
    } catch (error) {
    dispatch({ type: MY_ORDER_NOTE_LIST_FAIL, payload: error.message });
    }
}

const listOrders = () => async (dispatch, getState) => {

    try {
    dispatch({ type: ORDER_NOTE_LIST_REQUEST });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.get("/api/orders", {
        headers:
        { Authorization: 'Bearer ' + userInfo.token }
    });
    dispatch({ type: ORDER_NOTE_LIST_SUCCESS, payload: data })
    } catch (error) {
    dispatch({ type: ORDER_NOTE_LIST_FAIL, payload: error.message });
    }
}

const detailsOrder = (orderId) => async (dispatch, getState) => {
    try {
    dispatch({ type: ORDER_NOTE_DETAILS_REQUEST, payload: orderId });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.get("/api/orders/" + orderId, {
        headers:
        { Authorization: 'Bearer ' + userInfo.token }
    });
    dispatch({ type: ORDER_NOTE_DETAILS_SUCCESS, payload: data })
    } catch (error) {
    dispatch({ type: ORDER_NOTE_DETAILS_FAIL, payload: error.message });
    }
}

const payOrder = (order, paymentResult) => async (dispatch, getState) => {
    try {
    dispatch({ type: ORDER_NOTE_PAY_REQUEST, payload: paymentResult });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.put("/api/orders/" + order._id + "/pay", paymentResult, {
        headers:
        { Authorization: 'Bearer ' + userInfo.token }
    });
    dispatch({ type: ORDER_NOTE_PAY_SUCCESS, payload: data })
    } catch (error) {
    dispatch({ type: ORDER_NOTE_PAY_FAIL, payload: error.message });
    }
}

const deleteOrder = (orderId) => async (dispatch, getState) => {
    try {
    dispatch({ type: ORDER_NOTE_DELETE_REQUEST, payload: orderId });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.delete("/api/orders/" + orderId, {
        headers:
        { Authorization: 'Bearer ' + userInfo.token }
    });
    dispatch({ type: ORDER_NOTE_DELETE_SUCCESS, payload: data })
    } catch (error) {
    dispatch({ type: ORDER_NOTE_DELETE_FAIL, payload: error.message });
    }
}
export { createOrder, detailsOrder, payOrder, listMyOrders, listOrders, deleteOrder };