import Axios from "axios";
import Cookie from 'js-cookie';
import {
  USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL, USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL
} from "../constants/userConstants";
// import Swal from 'sweetalert2'
const Swal = require('sweetalert2')

const update = ({ userId, name, email, password }) => async (dispatch, getState) => {
  const { userSignin: { userInfo } } = getState();
  dispatch({ type: USER_UPDATE_REQUEST, payload: { userId, name, email, password } });
  try {
    const { data } = await Axios.put("/api/users/" + userId,
      { name, email, password }, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token
      }
    });
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    updateToken(data);
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
  }
}

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    updateToken(data);
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL });
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La contraseña o correo que ingresaste es incorrecta',
    })
  }
}

const register = (name, email, password,rePassword) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password,rePassword } });
  try {
    if(rePassword != password){
      dispatch({ type: USER_REGISTER_FAIL });
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'las contraseñas no coinciden!',
        background:'#101828'
      })
    }
    else{
      const { data } = await Axios.post("/api/users/register", { name, email, password });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      updateToken(data);
      setInterval("location.reload()",60000);
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro exitoso',
        showConfirmButton: false,
        timer: 1500
      })
    }
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'ya estas registrado!',
    })
  }
}


const logout = () => (dispatch) => {
  localStorage.removeItem('userinfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingAddres');
  updateToken(null);
  dispatch({ type: USER_LOGOUT })
}
export { signin, register, logout, update };


const updateToken = (userInfo) => {
  if (userInfo) {
    Axios.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`;
    Cookie.set('userInfo', JSON.stringify(userInfo));
  } else {
    delete Axios.defaults.headers.common['Authorization'];
    Cookie.remove('userInfo');
  }
}