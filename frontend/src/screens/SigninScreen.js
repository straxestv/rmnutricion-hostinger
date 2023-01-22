import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import './styles/Login.css'

function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
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
    dispatch(signin(email, password));

  }
  return <div id="body">
    <div className="Container py-5 text-white">
      <form onSubmit={submitHandler} >
      <div className="container d-flex justify-content-center flex-column box">
        <ul className="for">
          <li className='e'>
          <h1 className="my-4 fw-bold">Iniciar Sesion</h1>
          </li>
          <li className='e'>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li className="form-outline form-white e mb-4 my-4">
            <input type="email" name="email" className="form-control form-control-lg rounded-pill" placeholder="E-mail" id="email" onChange={(e) => setEmail(e.target.value)}>
            </input>
          </li>
          <li className="form-outline e form-white mb-4 my-5" >
            <input type="password" id="password" name="password"  placeholder="Contraseña" className="form-control form-control-lg rounded-pill" onChange={(e) => setPassword(e.target.value)}>
            </input>
          </li>
          <li className='e' >
            <button type="submit" className="btn btn-lg color1 px-5 text-white rounded-pill my-2">Signin</button>
          </li>
          <li className='e'>
            <p  className="small mb-5 pb-lg-2 my-5 text-white-60">¿Aun no tienes cuenta?
            <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="text-white ms-2" >Registrarse</Link>
            </p>
          </li>
        </ul>
        </div>
      </form>
      </div>
  </div>
}
export default SigninScreen;