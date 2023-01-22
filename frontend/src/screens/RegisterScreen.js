import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import './styles/Login.css'

function RegisterScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password,rePassword));
  }
  return <div id="body">
    <div className="Container py-5 text-white">
      <form onSubmit={submitHandler} >
        <div className="container d-flex justify-content-center flex-column box">
          <ul className="for">
            <h1 className="my-4 fw-bold">Registrarse</h1>
            <li>
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
            </li>
            <li class="form-outline form-white mb-4 my-4" >

              <input type="name" name="name" id="name" placeholder="Nombre" className="form-control form-control-lg rounded-pill"  onChange={(e) => setName(e.target.value)}>
              </input>
            </li>
            <li class="form-outline form-white mb-4 my-4" >
              
              <input type="email" name="email" id="email"  placeholder="E_mail" className="form-control form-control-lg rounded-pill" onChange={(e) => setEmail(e.target.value)}>
              </input>
            </li>
            <li  class="form-outline form-white mb-4 my-5">
              <input type="password" id="password" name="password"  placeholder="Contraseña" className="form-control form-control-lg rounded-pill" onChange={(e) => setPassword(e.target.value)}>
              </input>
            </li>
            <li  class="form-outline form-white mb-4 my-5">
              
              <input type="password" id="rePassword" placeholder="Confirmar_contraseña" className="form-control form-control-lg rounded-pill" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
              </input>
            </li>
            <li>
              <button type="submit" className="btn btn-lg color1 px-5 text-white rounded-pill my-2">Register</button>
            </li>
            <li>
            <p className="small mb-5 pb-lg-2 my-5 text-white-60">¿Ya tienes cuenta?

              <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="text-white ms-2" >Inicia Sesion </Link>
              </p>
            </li>

          </ul>
        </div>
      </form>
    </div>
  </div>
}
export default RegisterScreen;