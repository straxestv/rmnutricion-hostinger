import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return (
        
      
      <div className=''>
            {/* navbar */}
            <nav className="navbar navbar-expand-md bg-black navbar-dark ">
                <div className="container my-2">
                    <Link to="/" className='text-white'>
                        Logo
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
                                <Link className="nav-link text-white ms-3 my-1" to="/products">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white ms-3 my-1" to="/Acercade">Acerca de</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white ms-3 my-1" to="/Contacto">Contacto</Link>
                            </li>
                            <li className="nav-item ">
                            {userInfo && userInfo.isSuscrip && (
                              <div className="dropdown">
                                <ul className="dropdown-content">
                                  <li>
                                    <Link to="#">                                
                                      <button type="button" className="btn btn-secondary rounded-pill ms-3 my-1">Contenido Exclusivo</button> 
                                    </Link>
                                    
                                  </li>
                                </ul>
                              </div>
                            )}
                            </li>
                            <li className="nav-item ">
                                <Link to="/Login"><button type="button" className="btn btn-primary rounded-pill ms-3 my-1">Log in</button></Link>
                            </li>
                            
                            
                            <li className="nav-item">
                            <a href="cart/:id">Cart</a>
                            </li>
                            <li className="nav-item">
                            {userInfo ? (
                              <Link to="/profile">{userInfo.name}</Link>
                            ) : (
                              <Link to="/signin">Sign In</Link>
                            )}
                            </li>
                            <li className="nav-item">
                            
                            </li>
                            <li className="nav-item">
                            {userInfo && userInfo.isAdmin && (
                              <div className="dropdown">
                                <a href="#">Admin</a>
                                <ul className="dropdown-content">
                                  <li>
                                    <Link to="/orders">contenido</Link>
                                    <Link to="/products">Products</Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                            </li>
                          
                        
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>/*
            </div>
          </div>
          </div>
        */
    
    )
};

export default Navbar;
