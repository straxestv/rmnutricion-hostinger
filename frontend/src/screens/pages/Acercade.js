import Banner_acercade from "../Banner_acercade";
import React, { Component}  from 'react';
import alanB from"../../public/images/alan-Bio.png";
import circulol from"../../public/images/circulo.png";

export default class Acercade extends Component { 
    render(){
    return (
        
        <div className="d-flex flex-column">
            <div className="container d-flex my-2 infoper">
                <div className="my-5">
                    <img src={alanB}  alt="pic" className="BioA" />
                </div>
                <div className="container d-flex flex-column my-5" width="50%">
                    <h1 className="text-white ">Alan Román</h1>
                    <h5 className="my-2">
                        <p className="text-white">
                            Mi nombre es Alan Román nací un 11 de febrero de 1992, desde mi niñez siempre practiqué deporte, destacando en múltiples disciplinas como el Soccer, Artes marciales y Fisicoculturismo.
                        </p>
                        <p>
                            Entre mis logros se encuentran:
                        </p>
                    </h5>
                    
                        <p>•	2011 campeón Nacional de Sanda Alto Rendimiento</p>
                        <p>•	2012 campeón Nacional Sanda Alto Rendimiento</p>
                        <p>•	Licenciado en química UAEH</p>
                        <p>•	Entrenador certificado en acondicionamiento físico 2022</p>
                        <p>•	Maestría en Nutrición Deportiva Instituto de Ingeniería Educativa  </p>
                        <p>•	Competidor Actual de Fisicoculturismo</p>
                        <p>•	Diplomado en Farmacología deportiva Colegio Iberoamericano</p>
                    
                    
                </div>
            </div>
            <Banner_acercade/>

            <div className="container d-flex justify-content-between my-3 infoimg">
                <div className="d-flex flex-column text-white mx-2n">
                    <h1 className="my-4">Acuerdos</h1>
                    <h3 className="my-4">
                    •	Responsabilidad
                    </h3>
                    <p>Que puedan seguir su dieta adecuadamente y sus ejercicios </p>
                    
                    <h3>
                    •	Compromiso
                    </h3>
                    <p> Ser constantes y tener la volutad de seguir las rutinas ya sea en casa o el gym, para lograr los resusltados que esperan </p>
                    <h3>•	Lealtad</h3>
                        <p>Terner amor y respeto a tu cuerpo y cuidarte de el,descansar adecuadamente </p>
                </div>
                <div className="Container circlesimg mx-3 my-5">
                    <img src={circulol} width="292" height="499"  alt="pic" />
                </div>

            </div>

        </div>

    );
}}



