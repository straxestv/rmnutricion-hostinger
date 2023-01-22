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
  IMG_DELETE_SUCCESS,
  IMG_DELETE_FAIL,
  IMG_DELETE_REQUEST,
} from '../constants/imgConstants';
import axios from 'axios';
import Axios from 'axios';

const listimgts = (
  category = '',
  searchKeyword = '',
  sortOrder = ''
) => async (dispatch) => {
  try {
    dispatch({ type: IMG_LIST_REQUEST });
    const { data } = await axios.get(
      '/api/imgts?category=' +
        category +
        '&searchKeyword=' +
        searchKeyword +
        '&sortOrder=' +
        sortOrder
    );
    dispatch({ type: IMG_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: IMG_LIST_FAIL, payload: error.message });
  }
};

const saveimgt = (imgt) => async (dispatch, getState) => {
  try {
    dispatch({ type: IMG_SAVE_REQUEST, payload: imgt });
    const {
      userSignin: { userInfo },
    } = getState();
    if (!imgt._id) {
      
      const { data } = await Axios.post('/api/Img', imgt, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      console.log(data)
      dispatch({ type: IMG_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await Axios.put(
        '/api/Img' + imgt._id,
        imgt,
        {
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
          },
        }
      );
      dispatch({ type: IMG_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: IMG_SAVE_FAIL, payload: error.message });
  }
};

const detailsimgt = (imgtId) => async (dispatch) => {
  try {
    dispatch({ type: IMG_DETAILS_REQUEST, payload: imgtId });
    const { data } = await axios.get('/api/Img/' + imgtId);
    dispatch({ type: IMG_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: IMG_DETAILS_FAIL, payload: error.message });
  }
};

const deleteProdcut = (imgtId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    dispatch({ type: IMG_DELETE_REQUEST, payload: imgtId });
    const { data } = await axios.delete('/api/Img' + imgtId, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token,
      },
    });
    dispatch({ type: IMG_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: IMG_DELETE_FAIL, payload: error.message });
  }
};


export {
  listimgts,
  detailsimgt,
  saveimgt,
  deleteProdcut,
  
};
