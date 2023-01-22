
import axios from 'axios';
import Axios from 'axios';



const saveProduct = (product) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();
        if (!product._id) {
            const { data } = await Axios.post('/api/products', product, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token,
            },
            });
        } else {
            const { data } = await Axios.put(
            '/api/products/' + product._id,
            product,
            {
                headers: {
                Authorization: 'Bearer ' + userInfo.token,
                },
            }
            );
        }
        } catch (error) {
        }
    };
/*
  const detailsProduct = (productId) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
      const { data } = await axios.get('/api/products/' + productId);
      console.log(data)
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
  };
  
  const deleteProdcut = (productId) => async (dispatch, getState) => {
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
      const { data } = await axios.delete('/api/products/' + productId, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
      dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
    }
  };
  
  const saveProductReview = (productId, review) => async (dispatch, getState) => {
    try {
      const {
        userSignin: {
          userInfo: { token },
        },
      } = getState();
      dispatch({ type: PRODUCT_REVIEW_SAVE_REQUEST, payload: review });
      const { data } = await axios.post(
        `/api/products/${productId}/reviews`,
        review,
        {
        headers: {
            Authorization: 'Bearer ' + token,
        },
        }
        );
        dispatch({ type: PRODUCT_REVIEW_SAVE_SUCCESS, payload: data });
    } catch (error) {
      // report error
        dispatch({ type: PRODUCT_REVIEW_SAVE_FAIL, payload: error.message });
    }
};
*/
export {
    listProducts,
    detailsProduct,
    saveProduct,
    deleteProdcut,
    saveProductReview,
};
