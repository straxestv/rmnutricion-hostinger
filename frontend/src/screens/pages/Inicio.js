import React, { Component}  from 'react';
import {Link } from 'react-router-dom';
import Banner from "../Banner";
import "../styles/cards.css";
import alan from"../../public/images/img-1.jpg";
import Antes from"../../public/images/antesD.png";
    
export default class Inicio extends Component { 
    render(){
        return (
            <div className="d-flex flex-column">
                <Banner />
                {/* cards */}   
                <h2 className='text-center my-3'>¿En qué consiste la suscripción?</h2>
                <div className="container d-flex justify-content-around my-5 flex-wrap">
                    
                    <div className="card mb-3  notasin text-white" id='buttonI'>
                        <div className="card-body">
                            <h4 className="card-title text-center  d-flex justify-content-center">Asesoramiento Nutricional personalizado</h4>
                        </div>
                    </div>
                    <div className="card mb-3 text-white notasin  text-center "id='buttonI' >
                        <div className="card-body">
                            <h4 className="card-title d-flex justify-content-center">Plan de entrenamiento personalizado</h4>
                        </div>
                    </div>
                    <div className="card mb-3 text-white notasin text-center" id='buttonI'>
                        <div className="card-body">
                            <h4 className="card-title d-flex justify-content-center">Seguimiento constante</h4>
                        </div>
                    </div>
                    <div className="card mb-3 text-white notasin text-center" id='buttonI'>
                        <div className="card-body">{/* nose */ }
                            <h4 className="card-title d-flex justify-content-center">Asesoramiento en Suplementario</h4>
                        </div>
                    </div>
                </div>
                <h1 className="d-flex justify-content-center text-white">Mi canal de <a href="https://www.youtube.com/channel/UCPo4b7clg_K7YIw-9XL2r1Q"><span className="ms-2 youtube"> Youtube</span></a></h1>
                <div className="youtube d-flex container justify-content-evenly mb-5">
                    <iframe width="750" height="350" src="https://www.youtube.com/embed/rV__fr4nuRc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="youtube container d-flex justify-content-evenly flex-wrap mb-3">

                <iframe className="mb-3" width="500" height="250" src="https://www.youtube.com/embed/DSoLspYDWKY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="mb-3" width="500" height="250" src="https://www.youtube.com/embed/_ZABCYfig20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="mb-3" width="500" height="250" src="https://www.youtube.com/embed/HadQLRfJppc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="mb-3" width="500" height="250" src="https://www.youtube.com/embed/T8AEmpuKXQU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


                
                {/* <iframe className="mb-3" width="500" height="250" src="https://www.youtube.com/embed/FmOhpro8LkA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="mb-3" width="500" height="250" src="https://www.youtube.com/embed/lPJVi797Uy0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                */}
                </div>
            
                <div className="container my-5">
                    <div id="img7" className='row'>
                    <Link to="/category" type="button" id='buttonI' className='btn btn position-relative buttonCart text-white colorv col align-self-end'>Compra aqui!!</Link> 
                    </div>
                    
                </div>
                <div className='antesD my-5 justify-content-center container'>
                        <div className="d-flex chico ">
                            <div className='AD'>
                                <h1>¿En cuánto tiempo se empieza a ver los resultados?</h1>
                                <p className='my-4'>
                                Depende de tu estado actual, de tu genética, de tu constancia y otros factores.
                                No te voy a decir que en semanas conseguiras el cuerpo que siempre deseaste. Los resultados, como todo en la vida llevan su tiempo. Sería muy apresurado de nuestra parte responder esa pregunta, pero te invito a ver nuestra sección de Cambios en donde podrás observar personas que han tenido cambios increíbles en menos de 1 mes.
                                </p>
                            </div>
                            <div className=' AD1'>
                                <img src={Antes} className='imgAD' alt="" />
                            </div>
                        </div>
                        
                        
                </div>
                <div className='despuesD my-5 justify-content-center container'>
                    <div className="  d-flex chico">
                            <div className='AD1'>
                                <img className='imgAD1' src={alan} alt="" />
                            </div>
                            <div className='AD'>
                                <h1>¿Como inicio el proyecto?</h1>
                                <p className='my-4'>
                                    Primeramente, me apasiona el ejercicio, me llena de satisfacción saber que las personas que trabajan conmigo se sienten bien con su aspecto físico y emocional.
                                </p>
                                <p>
                                    El proyecto nació de la mano con un amigo mío ya que los 2 veíamos la necesidad de la gente por realizar cambios en su estilo de vida.
                                </p>
                                <p>
                                    Mi meta es lograr crear un estilo de vida fitness en las personas, que el ejercicio y la alimentación se vuelvan hábitos.
                                </p>
                                
                                <Link to="/Acercade" type="button" id='buttonI' className=' color1 btn position-relative buttonAD text-white col align-self-end'>más información</Link> 

                            </div>
                    </div>

                
                </div>
    
    
            </div>
        )
    
    }
}
    