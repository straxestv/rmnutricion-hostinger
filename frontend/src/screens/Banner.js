import React, { Component}  from 'react';
import'./styles/Banner.css';

export default class Banner extends Component { 
    render(){
        return(
        
            <div>

                <header className="header">
                        <div className="bg-dark ">
                        </div>

                        <div className="text-header d-flex align-items-center">
                            <div className="container banner-text">

                                <div className="row">
                                    <div className="col-sm-8">
                                        <h1>Suscríbete</h1>
                                        <p className='my-2'>Si te gustaría poder acceder a todos los beneficios puedes unirte ahora por medio de la suscripción con la cual podrás disfrutar de las siguientes ventajas: Rutinas personalizadas, dietas y delivery de comida para las dietas.</p>
                                        <a href="https://www.mercadopago.com.mx/subscriptions/checkout?preapproval_plan_id=2c93808482a3a2c60182a3a961030002" className="btn color1 text-white"> <span className="me-2 ms-2 ">¡Unete Ahora!</span> </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                </header>

            </div>
        
        )
    }
}
