import {
    FROM_DETAILS_REQUEST, FROM_DETAILS_SUCCESS, FROM_DETAILS_FAIL,} from "../constants/fromConstans";

function fromDetailsReducer(state = { from: [] }, action) {
    switch (action.type) {
    case FROM_DETAILS_REQUEST:
        return { loading: true };
    case FROM_DETAILS_SUCCESS:
        return { loading: false, from: action.payload };
    case FROM_DETAILS_FAIL:
        return { loading: false, error: action.payload };
    default: return state;
    }
}
/*
function fromDetailsReducer1(state = { product: { reviews: [] } }, action) {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
        }
    }*/
export { fromDetailsReducer }