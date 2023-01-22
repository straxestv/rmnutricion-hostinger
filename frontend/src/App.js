import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import VideosScreen from './screens/VideosScreen.jsx';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import Inicio from './screens/pages/Inicio';
import Acercade from './screens/pages/Acercade';
import NotesList from './screens/pages/NotesList';
import CreateNote from './screens/pages/CreateNote';
import Frooter from './screens/pages/footer'
import Contacto from './screens/pages/Contacto';
import Suscrip from './screens/pages/suscripcion';
import AdmUser from './screens/pages/AdmUser';
import UserAdmInfo from './screens/pages/UserInfo';
import Form from './screens/pages/form';
import logo from "./public/images/logo.png";



import "./App.css";


function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  
  return (
    <BrowserRouter>
      
      <div className="grid-container body">
        <div className="header-links">
          <div className="grid-container">
        <div className=''>
            {/* navbar */}
            <nav className="navbar navbar-expand-md bg-black navbar-dark ">
                <div className="container my-2">
                    <Link to="/" className='text-white'>
                        <img src={logo}  className='logo'alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* items */}
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white ms-3 my-1" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white ms-3 my-1" to="/category">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white ms-3 my-1" to="/Acercade">Acerca de</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link text-white ms-3 my-1" to="/Contacto">Contacto</Link>
                            </li>

                            
                            <li className="nav-item header-links">
                            <Link  className="nav-link text-white ms-3 my-1" to="/cart">Carrito</Link>
                            </li>
                            <li className="nav-item">
                              
                            {userInfo ? (
                              <Link  className="nav-link text-white ms-3 " to="/profile">{userInfo.name}</Link>
                            ) : (
                              <Link id='but'  to="/signin"><button type="button" className="btn btn-primary rounded-pill ms-3">Iniciar Sesion</button></Link>

                            )}
                            
                            </li>
                            <li className="nav-item">
                            
                            </li>
                            <li className="nav-item">
                            {userInfo && userInfo.isAdmin && (
                              <div className="dropdown">
                                <a href="#">Admin</a>
                                
                                <Link className="nav-link text-white ms-3 " to="/orders">contenido</Link>
                                
                                <Link className="nav-link text-white ms-3 " to="/products">Productos</Link>
                                
                                <Link className="nav-link text-white ms-3" to="/create">Crear dieta</Link>
                                
                                <Link className="nav-link text-white ms-3" to="/AdmUser">Usuarios</Link>
                                
                              </div>
                            )}
                            </li>
                            <li className="nav-item " >
                            {userInfo && userInfo.isSuscp && (
                              <div className="dropdown">
                                <Link  to="/contet">                                
                                  <button id='but-2' type="button" className="btn btn-secondary rounded-pill ms-3 my-1 ">Contenido Exclusivo</button> 
                                </Link>
                                <Link  to="/VideosScreen">                                
                                  <button id='but-2' type="button" className="btn btn-secondary rounded-pill ms-3 my-1 ">Videos</button> 
                                </Link>
                                
                              </div>
                            )}
                            
                            </li>
                            
                          
                        
                          </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        
        {/* decaracion */}
        
        
        <main className="main">
          <div className="content">
          
            <Route path="/UserAdmInfo/:email" component={UserAdmInfo}/>
            <Route path="/AdmUser" component={AdmUser}/>
            <Route path="/Suscrip" component={Suscrip}/>
            <Route path="/Contacto" component={Contacto}/>
            <Route path="/" exact={true} component={Inicio} />
            <Route path="/Acercade" component={Acercade} />
            <Route path="/contet"  component={NotesList} />
            <Route path="/VideosScreen" component={VideosScreen} />
            <Route path="/edit/:id" component={CreateNote} />
            <Route path="/create" component={CreateNote} />
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category" component={HomeScreen} />
            <Route path="/Form" component={Form} />
            {/* <Route path="/" exact={true} component={HomeScreen} />*/}

          </div>
        </main>

        <Frooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
