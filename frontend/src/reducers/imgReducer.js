import {
    IMG_LIST_REQUEST,
    IMG_LIST_SUCCESS,
    IMG_LIST_FAIL,
    IMG_DETAILS_REQUEST,
    IMG_DETAILS_SUCCESS,
    IMG_DETAILS_FAIL,
    IMG_SAVE_REQUEST,
    IMG_SAVE_SUCCESS,
    IMG_SAVE_FAIL,
    IMG_DELETE_REQUEST,
    IMG_DELETE_SUCCESS,
    IMG_DELETE_FAIL,
} from '../constants/imgConstants';

function imgListReducer(state = { img: [] }, action) {
    switch (action.type) {
        case IMG_LIST_REQUEST:
            return { loading: true, img: [] };
        case IMG_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case IMG_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function imgDetailsReducer(state = { img: { reviews: [] } }, action) {
    switch (action.type) {
        case IMG_DETAILS_REQUEST:
            return { loading: true };
        case IMG_DETAILS_SUCCESS:
            return { loading: false, img: action.payload };
        case IMG_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function imgDeleteReducer(state = { img: {} }, action) {
    switch (action.type) {
        case IMG_DELETE_REQUEST:
            return { loading: true };
        case IMG_DELETE_SUCCESS:
            return { loading: false, img: action.payload, success: true };
        case IMG_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function imgSaveReducer(state = { img: {} }, action) {
    switch (action.type) {
        case IMG_SAVE_REQUEST:
            return { loading: true };
        case IMG_SAVE_SUCCESS:
            return { loading: false, success: true, img: action.payload };
        case IMG_SAVE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


export {
    imgListReducer,
    imgDetailsReducer,
    imgSaveReducer,
    imgDeleteReducer,

};
