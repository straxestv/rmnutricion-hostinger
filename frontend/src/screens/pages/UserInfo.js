import React, { Component } from 'react'
import axios from 'axios'
import  "../styles/note.css"


export default class UserInfo extends Component {

    state = {
        froms: [],
        notes:[],
        rut:[]
    }
    async componentDidMount() {
        this.getNotes();
        this.getFrom();
        this.getRut();
    }
    getRut = async () => {
        if (this.props.match.params.email) {
            console.log(this.props.match.params.email)
            const res = await axios.get('/api/rutina/signin' + this.props.match.params.email);
            console.log(res.data)
            this.setState({
                rut:res.data
            });
        }
    }
    getNotes = async () => {
        if (this.props.match.params.email) {
            console.log(this.props.match.params.email)
            const res = await axios.get('/api/ordersNote/signin/Note' + this.props.match.params.email);
            console.log(res.data)
            this.setState({
                notes:res.data

            });
        }
    }
    getFrom = async () => {
        if (this.props.match.params.email) {
            console.log(this.props.match.params.email)
            const res = await axios.get('/api/ordersNote/signin' + this.props.match.params.email);
            console.log(res.data)
            this.setState({ froms:res.data});
            
        }
    }
    
    

    render() {
        return (
            <div>
                <div className="post-img">
                {/* Post */}
                <div className="text-white text-center rgba-stylish-strong">
                    <div className="py-3">

                        <h1>Contenido exclusivo</h1>
                        <h2 className="card-title h2 my-4"></h2>
                        <p className="mb-4 pb-2 px-md-5 mx-md-5">Si no sabes como se realizazn los ejercicios checalos en el apartado de videos</p>
                        <a className="btn peach-gradient" href='/VideosScreen'>videos</a>

                    </div>
                </div>
                </div>
            

                {/* Contenido */}

                <div className="rgbcolor1 container mt-2 text-white  rounded-top">

                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="tab" href="#Rutinas">Rutinas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#Dietas">Dietas</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="Rutinas">
                        {
                                this.state.rut.map(ruti => (
                                    <Rutina key={ruti._id} ruti={ruti}/>
                                    ))
                        }
                        </div>
                        <div className="tab-pane" id="Dietas">
                        {
                                    this.state.notes.map(note => (
                                        <Card key={note._id} note={note}/>
                                ))
                                }
                        </div>
                    </div>

                </div>
            </div>

            

        )
    }
}


function Card({ note }) {
    return  <div className=" css-fix row g-0 rounded shadow-sm">
    <div className="col p-4">
        <h2 className="text-center ">Dietas</h2>
        <div>
            <h3>Menu 1</h3>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-5 col-md-6">
                        <ul>
                            <h4 className="color2">Comida 1</h4>
                            <li>
                                <p className='salto'>{note.M1C1}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">

                        <ul>
                            <h4 className="color2">Comida 2</h4>
                            <li>
                            <p className='salto'>{note.M1C2}</p>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-lg-6">

                        <ul>
                            <h4 className="color2">Comida 3</h4>
                            
                            <li>
                            <p className='salto'>{note.M1C3}</p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">

                        <ul>
                            <h4 className="color2">Comida 4</h4>
                            <li>
                            <p className='salto'>{note.M1C4}</p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">

                        <ul>
                            <h4 className="color2">Comida 5</h4>
                            <li>
                                <p className='salto'>{note.M1C4}</p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">

                        <ul>
                            <h4 className="color2">Comida 6</h4>
                            <li>
                                <p className='salto'>{note.M1C6}</p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">

                        <ul>
                            <h4 className="color2">Comida 7</h4>
                            <li>
                                <p className='salto'>{note.M1C7}</p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">

                        <ul>
                            <h4 className="color2">Comida 8</h4>
                            <li>
                                <p className='salto'>{note.M1C8}</p>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
        <div>
            <h3>Menu 2</h3>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-5 col-md-6">
                        <ul>
                            <h4 className="color2">Comida 2</h4>
                            <li>
                                <p className='salto'>{note.M2C1}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">

                        <ul>
                            <h4 className="color2">Comida 2</h4>

                            <li>
                                <p className='salto'>{note.M2C2}</p>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-lg-6">

                        <ul>
                            <h4 className="color2">Comida 3</h4>
                            
                            <li>
                                <p className='salto'>{note.M2C3}</p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">

                        <ul>
                            <h4 className="color2">Comida 4</h4>
                            <li>
                                <p className='salto'>{note.M2C4}</p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">

                        <ul>
                            <h4 className="color2">Comida 5</h4>
                            <li>
                                <p className='salto'>{note.M2C5}</p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">

                        <ul>
                            <h4 className="color2">Comida 6</h4>
                            
                            <li>
                                <p className='salto'>{note.M2C6}</p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">

                        <ul>
                            <h4 className="color2">Comida 7</h4>
                            <li>
                                <p className='salto'>{note.M2C7}</p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">

                        <ul>
                            <h4 className="color2">Comida 8</h4>
                            
                            <li>
                                <p className='salto'>{note.M2C8}</p>
                            </li>
                        </ul>

                    </div>

                </div>
                <h3>suplementos</h3>
                <p className='salto'>{note.Suplem}</p>

            </div>





        </div>
    </div>
</div>

}
function Rutina({ ruti }) {
    return <div className="row g-0 rounded shadow-sm">
    <div className="col p-4">
        <h2>Rutinas</h2>
        <div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th colSpan="3"><p className='salto'>Dia 1 {ruti.Dia1}</p></th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th scope="col">Ejercicio</th>
                        <th scope="col">Series</th>
                        <th scope="col">Repeticiones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D1E1} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D1S1} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D1R1} </p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <p className='salto'>{ruti.D1E2} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D1S2} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D1R2} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D1E3} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D1S3} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D1R3} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D1E4} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D1S4} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D1R4} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D1E5} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D1S5} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D1R5} </p>
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">
                            <p className='salto'>{ruti.D1E6} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D1S6} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D1R6} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D1E7} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D1S7} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D1R7} </p>
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">
                            <p className='salto'>{ruti.D1E8} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D1S8} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D1R8} </p>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th colSpan="3">Dia 2  {ruti.Dia2}</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th scope="col">Ejercicio</th>
                        <th scope="col">Series</th>
                        <th scope="col">Repeticiones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D2E1} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D2S1} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D2R1} </p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <p className='salto'>{ruti.D2E2} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D2S2} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D2R2} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D2E3} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D2S3} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D2R3} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D2E4} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D2S4} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D2R4} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D2E5} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D2S5} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D2R5} </p>
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">
                            <p className='salto'>{ruti.D2E6} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D2S6} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D2R6} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D2E7} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D2S7} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D2R7} </p>
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">
                            <p className='salto'>{ruti.D2E8} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D2S8} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D2R8} </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th colSpan="3">Dia 3  {ruti.Dia3}</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th scope="col">Ejercicio</th>
                        <th scope="col">Series</th>
                        <th scope="col">Repeticiones</th>
                    </tr>
                </thead>
                <tbody>
                <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D3E1} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D3S1} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D3R1} </p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <p className='salto'>{ruti.D3E2} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D3S2} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D3R2} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D3E3} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D3S3} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D3R3} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D3E4} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D3S4} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D3R4} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D3E5} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D3S5} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D3R5} </p>
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">
                            <p className='salto'>{ruti.D3E6} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D3S6} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D3R6} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D3E7} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D3S7} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D3R7} </p>
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">
                            <p className='salto'>{ruti.D3E8} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D3S8} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D3R8} </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th colSpan="3"><p className='salto'>Dia 4 {ruti.Dia4}</p></th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th scope="col">Ejercicio</th>
                        <th scope="col">Series</th>
                        <th scope="col">Repeticiones</th>
                    </tr>
                </thead>
                <tbody>
                <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D4E1} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D4S1} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D4R1} </p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <p className='salto'>{ruti.D4E2} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D4S2} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D4R2} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D4E3} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D4S3} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D4R3} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D4E4} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D4S4} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D4R4} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D4E5} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D4S5} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D4R5} </p>
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">
                            <p className='salto'>{ruti.D4E6} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D4S6} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D4R6} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D4E7} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D4S7} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D4R7} </p>
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">
                            <p className='salto'>{ruti.D4E8} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D4S8} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D4R8} </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th colSpan="3"><p className='salto'>Dia 5 {ruti.Dia5}</p></th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th scope="col">Ejercicio</th>
                        <th scope="col">Series</th>
                        <th scope="col">Repeticiones</th>
                    </tr>
                </thead>
                <tbody>
                <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D5E1} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D5S1} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D5R1} </p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <p className='salto'>{ruti.D5E2} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D5S2} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D5R2} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D5E3} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D5S3} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D5R3} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D5E4} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D5S4} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D5R4} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D5E5} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D5S5} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D5R5} </p>
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">
                            <p className='salto'>{ruti.D5E6} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D5S6} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D5R6} </p>
                        </td>
                    </tr>
                    <tr className="table-active">
                        <th scope="row">
                            <p className='salto'>{ruti.D5E7} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D5S7} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D5R7} </p>
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">
                            <p className='salto'>{ruti.D5E8} </p>
                        </th>
                        <td>
                            <p className='salto'>{ruti.D5S8} </p>
                        </td>
                        <td>
                            <p className='salto'>{ruti.D5R8} </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

}