    import {
        ORDER_NOTE_CREATE_REQUEST, ORDER_NOTE_CREATE_SUCCESS, ORDER_NOTE_CREATE_FAIL,
        ORDER_NOTE_DETAILS_REQUEST, ORDER_NOTE_DETAILS_SUCCESS, ORDER_NOTE_DETAILS_FAIL,
        ORDER_NOTE_PAY_REQUEST, ORDER_NOTE_PAY_SUCCESS, ORDER_NOTE_PAY_FAIL,
        MY_ORDER_NOTE_LIST_REQUEST, MY_ORDER_NOTE_LIST_SUCCESS, MY_ORDER_NOTE_LIST_FAIL,
        ORDER_NOTE_LIST_REQUEST, ORDER_NOTE_LIST_SUCCESS, ORDER_NOTE_LIST_FAIL, ORDER_NOTE_DELETE_REQUEST, ORDER_NOTE_DELETE_SUCCESS, ORDER_NOTE_DELETE_FAIL
    } from "../constants/noteConstants";
    
    
    function orderNoteCreateReducer(state = {}, action) {
        switch (action.type) {
        case ORDER_NOTE_CREATE_REQUEST:
            return { loading: true };
        case ORDER_NOTE_CREATE_SUCCESS:
            return { loading: false, order: action.payload, success: true };
        case ORDER_NOTE_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
        }
    }
    
    
    function orderNoteDetailsReducer(state = {
        order: {
        orderItems: [],
        shipping: {},
        payment: {}
        }
    }, action) {
        switch (action.type) {
        case ORDER_NOTE_DETAILS_REQUEST:
            return { loading: true };
        case ORDER_NOTE_DETAILS_SUCCESS:
            return { loading: false, order: action.payload };
        case ORDER_NOTE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
        }
    }
    
    
    function myOrderNoteListReducer(state = {
        orders: []
    }, action) {
        switch (action.type) {
        case MY_ORDER_NOTE_LIST_REQUEST:
            return { loading: true };
        case MY_ORDER_NOTE_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case MY_ORDER_NOTE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
        }
    }
    
    function orderNoteListReducer(state = {
        orders: []
    }, action) {
        switch (action.type) {
        case ORDER_NOTE_LIST_REQUEST:
            return { loading: true };
        case ORDER_NOTE_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case ORDER_NOTE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
        }
    }
    
    function orderNotePayReducer(state = {
        order: {
        orderItems: [],
        shipping: {},
        payment: {}
        }
    }, action) {
        switch (action.type) {
        case ORDER_NOTE_PAY_REQUEST:
            return { loading: true };
        case ORDER_NOTE_PAY_SUCCESS:
            return { loading: false, success: true };
        case ORDER_NOTE_PAY_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
        }
    }
    
    function orderNoteDeleteReducer(state = {
        order: {
        orderItems: [],
        shipping: {},
        payment: {}
        }
    }, action) {
        switch (action.type) {
        case ORDER_NOTE_DELETE_REQUEST:
            return { loading: true };
        case ORDER_NOTE_DELETE_SUCCESS:
            return { loading: false, success: true };
        case ORDER_NOTE_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
        }
    }
    export {
        orderNoteCreateReducer, orderNoteDetailsReducer,
        myOrderNoteListReducer, orderNoteListReducer, orderNotePayReducer, orderNoteDeleteReducer
    }