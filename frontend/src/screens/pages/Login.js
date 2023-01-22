import "../styles/Login.css";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        
        <div className="body">

            <div className="Container py-5 text-white">

                <div className="container d-flex justify-content-center flex-column box">
                    <h1 className="my-4 fw-bold">Iniciar Sesion</h1>

                    <div class="form-outline form-white mb-4 my-4">
                        <input type="email" id="typeEmailX" placeholder="E-mail" className="form-control form-control-lg rounded-pill" />
                    </div>

                    <div class="form-outline form-white mb-4 my-5">
                        <input type="password" id="typePasswordX" placeholder="Contraseña" className="form-control form-control-lg rounded-pill" />
                    </div>

                    <p className="small mb-5 pb-lg-2 my-5 text-white-60">¿Aun no tienes cuenta?<Link className="text-white ms-2" to="/Register">Registrarse</Link></p>

                    <button className="btn btn-lg color1 px-5 text-white rounded-pill my-2" type="submit">Login</button>
                </div>
            </div>
        </div>

    )
    
};

export default Login;
