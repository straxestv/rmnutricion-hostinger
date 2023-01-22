import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

//import ImageF from './ImageForm'

export default class CreateRutina extends Component {

    state = {
        Dia1: '',
        D1E1: '',
        D1S1: '',
        D1R1: '',

        D1E2: '',
        D1S2: '',
        D1R2: '',

        D1E3: '',
        D1S3: '',
        D1R3: '',

        D1E4: '',
        D1S4: '',
        D1R4: '',

        D1E5: '',
        D1S5: '',
        D1R5: '',

        D1E6: '',
        D1S6: '',
        D1R6: '',

        D1E7: '',
        D1S7: '',
        D1R7: '',

        D1E8: '',
        D1S8: '',
        D1R8: '',
        // dia 2
        Dia2: '',
        D2E1: '',
        D2S1: '',
        D2R1: '',

        D2E2: '',
        D2S2: '',
        D2R2: '',

        D2E3: '',
        D2S3: '',
        D2R3: '',

        D2E4: '',
        D2S4: '',
        D2R4: '',

        D2E5: '',
        D2S5: '',
        D2R5: '',

        D2E6: '',
        D2S6: '',
        D2R6: '',

        D2E7: '',
        D2S7: '',
        D2R7: '',

        D2E8: '',
        D2S8: '',
        D2R8: '',

        //dia 3
        Dia3: '',
        D3E1: '',
        D3S1: '',
        D3R1: '',

        D3E2: '',
        D3S2: '',
        D3R2: '',

        D3E3: '',
        D3S3: '',
        D3R3: '',

        D3E4: '',
        D3S4: '',
        D3R4: '',

        D3E5: '',
        D3S5: '',
        D3R5: '',

        D3E6: '',
        D3S6: '',
        D3R6: '',

        D3E7: '',
        D3S7: '',
        D3R7: '',

        D3E8: '',
        D3S8: '',
        D3R8: '',
        //DIA 4
        Dia4: '',
        D4E1: '',
        D4S1: '',
        D4R1: '',

        D4E2: '',
        D4S2: '',
        D4R2: '',

        D4E3: '',
        D4S3: '',
        D4R3: '',

        D4E4: '',
        D4S4: '',
        D4R4: '',

        D4E5: '',
        D4S5: '',
        D4R5: '',

        D4E6: '',
        D4S6: '',
        D4R6: '',

        D4E7: '',
        D4S7: '',
        D4R7: '',

        D4E8: '',
        D4S8: '',
        D4R8: '',
        //DIA 5
        Dia5: '',
        D5E1: '',
        D5S1: '',
        D5R1: '',

        D5E2: '',
        D5S2: '',
        D5R2: '',

        D5E3: '',
        D5S3: '',
        D5R3: '',

        D5E4: '',
        D5S4: '',
        D5R4: '',

        D5E5: '',
        D5S5: '',
        D5R5: '',

        D5E6: '',
        D5S6: '',
        D5R6: '',

        D5E7: '',
        D5S7: '',
        D5R7: '',

        D5E8: '',
        D5S8: '',
        D5R8: '',
        correo: '',
        editing: false,
        _id: ''
    }
/*
    async componentDidMount() {

        if (this.props.match.params.id) {
            console.log(this.props.match.params.id)
            const res = await axios.get('/api/notes/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                Dia1: res.data.Dia1,
                D1E1: res.data.D1E1,
                D1S1: res.data.D1S1,
                D1R1: res.data.D1R1,

                D1E2: res.data.D1E2,
                D1S2: res.data.D1S2,
                D1R2: res.data.D1R2,

                D1E3: res.data.D1E3,
                D1S3: res.data.D1S3,
                D1R3: res.data.D1R3,

                D1E4: res.data.D1E4,
                D1S4: res.data.D1S4,
                D1R4: res.data.D1R4,

                D1E5: res.data.D1E5,
                D1S5: res.data.D1S5,
                D1R5: res.data.D1R5,

                D1E6: res.data.D1E6,
                D1S6: res.data.D1S6,
                D1R6: res.data.D1R6,

                D1E7: res.data.D1E7,
                D1S7: res.data.D1S7,
                D1R7: res.data.D1R7,

                D1E8: res.data.D1E8,
                D1S8: res.data.D1S8,
                D1R8: res.data.D1R8,
                //dia2
                Dia2: res.data.Dia2,
                D2E1: res.data.D2E1,
                D2S1: res.data.D2S1,
                D2R1: res.data.D2R1,

                D2E2: res.data.D2E2,
                D2S2: res.data.D2S2,
                D2R2: res.data.D2R2,

                D2E3: res.data.D2E3,
                D2S3: res.data.D2S3,
                D2R3: res.data.D2R3,

                D2E4: res.data.D2E4,
                D2S4: res.data.D2S4,
                D2R4: res.data.D2R4,

                D2E5: res.data.D2E5,
                D2S5: res.data.D2S5,
                D2R5: res.data.D2R5,

                D2E6: res.data.D2E6,
                D2S6: res.data.D2S6,
                D2R6: res.data.D2R6,

                D2E7: res.data.D2E7,
                D2S7: res.data.D2S7,
                D2R7: res.data.D2R7,

                D2E8: res.data.D2E8,
                D2S8: res.data.D2S8,
                D2R8: res.data.D2R8,
                //dia3
                Dia3: res.data.Dia3,
                D3E1: res.data.D3E1,
                D3S1: res.data.D3S1,
                D3R1: res.data.D3R1,

                D3E2: res.data.D3E2,
                D3S2: res.data.D3S2,
                D3R2: res.data.D3R2,

                D3E3: res.data.D3E3,
                D3S3: res.data.D3S3,
                D3R3: res.data.D3R3,

                D3E4: res.data.D3E4,
                D3S4: res.data.D3S4,
                D3R4: res.data.D3R4,

                D3E5: res.data.D3E5,
                D3S5: res.data.D3S5,
                D3R5: res.data.D3R5,

                D3E6: res.data.D3E6,
                D3S6: res.data.D3S6,
                D3R6: res.data.D3R6,

                D3E7: res.data.D3E7,
                D3S7: res.data.D3S7,
                D3R7: res.data.D3R7,

                D3E8: res.data.D3E8,
                D3S8: res.data.D3S8,
                D3R8: res.data.D3R8,
                //dia 4
                Dia4: res.data.Dia4,
                D4E1: res.data.D4E1,
                D4S1: res.data.D4S1,
                D4R1: res.data.D4R1,

                D4E2: res.data.D4E2,
                D4S2: res.data.D4S2,
                D4R2: res.data.D4R2,

                D4E3: res.data.D4E3,
                D4S3: res.data.D4S3,
                D4R3: res.data.D4R3,

                D4E4: res.data.D4E4,
                D4S4: res.data.D4S4,
                D4R4: res.data.D4R4,

                D4E5: res.data.D4E5,
                D4S5: res.data.D4S5,
                D4R5: res.data.D4R5,

                D4E6: res.data.D4E6,
                D4S6: res.data.D4S6,
                D4R6: res.data.D4R6,

                D4E7: res.data.D4E7,
                D4S7: res.data.D4S7,
                D4R7: res.data.D4R7,

                D4E8: res.data.D4E8,
                D4S8: res.data.D4S8,
                D4R8: res.data.D4R8,
                //dia 5
                Dia5: res.data.Dia5,
                D5E1: res.data.D5E1,
                D5S1: res.data.D5S1,
                D5R1: res.data.D5R1,

                D5E2: res.data.D5E2,
                D5S2: res.data.D5S2,
                D5R2: res.data.D5R2,

                D5E3: res.data.D5E3,
                D5S3: res.data.D5S3,
                D5R3: res.data.D5R3,

                D5E4: res.data.D5E4,
                D5S4: res.data.D5S4,
                D5R4: res.data.D5R4,

                D5E5: res.data.D5E5,
                D5S5: res.data.D5S5,
                D5R5: res.data.D5R5,

                D5E6: res.data.D5E6,
                D5S6: res.data.D5S6,
                D5R6: res.data.D5R6,

                D5E7: res.data.D5E7,
                D5S7: res.data.D5S7,
                D5R7: res.data.D5R7,

                D5E8: res.data.D5E8,
                D5S8: res.data.D5S8,
                D5R8: res.data.D5R8,

                user: res.data.user,
                _id: res.data._id,
                editing: true
            });
        }
    }
*/
    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedNote = {
                M1C1: this.state.M1C1,
                M1C2: this.state.M1C2,
                M1C3: this.state.M1C3,
                M1C4: this.state.M1C4,
                M1C5: this.state.M1C5,
                M1C6: this.state.M1C6,
                M1C7: this.state.M1C7,
                M1C8: this.state.M1C8,

                M2C1: this.state.M2C1,
                M2C2: this.state.M2C2,
                M2C3: this.state.M2C3,
                M2C4: this.state.M2C4,
                M2C5: this.state.M2C5,
                M2C6: this.state.M2C6,
                M2C7: this.state.M2C7,
                M2C8: this.state.M2C8,
                date: this.state.date,
                correo: this.state.correo
            };
            await axios.put('/api/rutina/adm' + this.state._id, updatedNote);
        } else {
            const newNote = {
                Dia1: this.state.Dia1,
                D1E1: this.state.D1E1,
                D1S1: this.state.D1S1,
                D1R1: this.state.D1R1,

                D1E2: this.state.D1E2,
                D1S2: this.state.D1S2,
                D1R2: this.state.D1R2,

                D1E3: this.state.D1E3,
                D1S3: this.state.D1S3,
                D1R3: this.state.D1R3,

                D1E4: this.state.D1E4,
                D1S4: this.state.D1S4,
                D1R4: this.state.D1R4,

                D1E5: this.state.D1E5,
                D1S5: this.state.D1S5,
                D1R5: this.state.D1R5,

                D1E6: this.state.D1E6,
                D1S6: this.state.D1S6,
                D1R6: this.state.D1R6,

                D1E7: this.state.D1E7,
                D1S7: this.state.D1S7,
                D1R7: this.state.D1R7,

                D1E8: this.state.D1E8,
                D1S8: this.state.D1S8,
                D1R8: this.state.D1R8,
                //dia2
                Dia2: this.state.Dia2,
                D2E1: this.state.D2E1,
                D2S1: this.state.D2S1,
                D2R1: this.state.D2R1,

                D2E2: this.state.D2E2,
                D2S2: this.state.D2S2,
                D2R2: this.state.D2R2,

                D2E3: this.state.D2E3,
                D2S3: this.state.D2S3,
                D2R3: this.state.D2R3,

                D2E4: this.state.D2E4,
                D2S4: this.state.D2S4,
                D2R4: this.state.D2R4,

                D2E5: this.state.D2E5,
                D2S5: this.state.D2S5,
                D2R5: this.state.D2R5,

                D2E6: this.state.D2E6,
                D2S6: this.state.D2S6,
                D2R6: this.state.D2R6,

                D2E7: this.state.D2E7,
                D2S7: this.state.D2S7,
                D2R7: this.state.D2R7,

                D2E8: this.state.D2E8,
                D2S8: this.state.D2S8,
                D2R8: this.state.D2R8,
                //dia3
                Dia3: this.state.Dia3,
                D3E1: this.state.D3E1,
                D3S1: this.state.D3S1,
                D3R1: this.state.D3R1,

                D3E2: this.state.D3E2,
                D3S2: this.state.D3S2,
                D3R2: this.state.D3R2,

                D3E3: this.state.D3E3,
                D3S3: this.state.D3S3,
                D3R3: this.state.D3R3,

                D3E4: this.state.D3E4,
                D3S4: this.state.D3S4,
                D3R4: this.state.D3R4,

                D3E5: this.state.D3E5,
                D3S5: this.state.D3S5,
                D3R5: this.state.D3R5,

                D3E6: this.state.D3E6,
                D3S6: this.state.D3S6,
                D3R6: this.state.D3R6,

                D3E7: this.state.D3E7,
                D3S7: this.state.D3S7,
                D3R7: this.state.D3R7,

                D3E8: this.state.D3E8,
                D3S8: this.state.D3S8,
                D3R8: this.state.D3R8,
                //dia 4
                Dia4: this.state.Dia4,
                D4E1: this.state.D4E1,
                D4S1: this.state.D4S1,
                D4R1: this.state.D4R1,

                D4E2: this.state.D4E2,
                D4S2: this.state.D4S2,
                D4R2: this.state.D4R2,

                D4E3: this.state.D4E3,
                D4S3: this.state.D4S3,
                D4R3: this.state.D4R3,

                D4E4: this.state.D4E4,
                D4S4: this.state.D4S4,
                D4R4: this.state.D4R4,

                D4E5: this.state.D4E5,
                D4S5: this.state.D4S5,
                D4R5: this.state.D4R5,

                D4E6: this.state.D4E6,
                D4S6: this.state.D4S6,
                D4R6: this.state.D4R6,

                D4E7: this.state.D4E7,
                D4S7: this.state.D4S7,
                D4R7: this.state.D4R7,

                D4E8: this.state.D4E8,
                D4S8: this.state.D4S8,
                D4R8: this.state.D4R8,
                //dia 5
                Dia5: this.state.Dia5,
                D5E1: this.state.D5E1,
                D5S1: this.state.D5S1,
                D5R1: this.state.D5R1,

                D5E2: this.state.D5E2,
                D5S2: this.state.D5S2,
                D5R2: this.state.D5R2,

                D5E3: this.state.D5E3,
                D5S3: this.state.D5S3,
                D5R3: this.state.D5R3,

                D5E4: this.state.D5E4,
                D5S4: this.state.D5S4,
                D5R4: this.state.D5R4,

                D5E5: this.state.D5E5,
                D5S5: this.state.D5S5,
                D5R5: this.state.D5R5,

                D5E6: this.state.D5E6,
                D5S6: this.state.D5S6,
                D5R6: this.state.D5R6,

                D5E7: this.state.D5E7,
                D5S7: this.state.D5S7,
                D5R7: this.state.D5R7,

                D5E8: this.state.D5E8,
                D5S8: this.state.D5S8,
                D5R8: this.state.D5R8,
                correo: this.state.correo
            };
            console.log(newNote);
            axios.post('/api/rutina/adm', newNote);

        }
        window.location.href = '/';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({ date });
    }

    render() {
        return (
            <div class="tab-pane active" id="Rutinas">
                <div class="row g-0 rounded shadow-sm">
                    <form className="" onSubmit={this.onSubmit}>
                    <div class="col p-4">
                        <h2>Rutinas</h2>
                        <div>
                            <div>
                                <table class="table table-dark table-hover">
                                    <thead>
                                        <tr>
                                            <th colspan="3">
                                                <input 
                                                    type="text" 
                                                    className='form-control' 
                                                    placeholder='Usuario' 
                                                    name="correo"
                                                    onChange={this.onInputChange}
                                                    value={this.state.correo}
                                                    required/>
                                                </th>
                                        </tr> 
                                    </thead>  
                                </table>                          
                            </div>
                            <table class="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th colspan="3">
                                            <input 
                                            type="text" 
                                            className='form-control' 
                                            placeholder='Día 1' name="Dia1" onChange={this.onInputChange} value={this.state.Dia1}
                                            />
                                        </th>
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
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea 
                                            className='form-control' 
                                            placeholder='contenido'
                                            name="D1E1"
                                            onChange={this.onInputChange}
                                            value={this.state.D1E1}
                                            >
                                            </textarea>
                                        </th>
                                        <td>
                                            <textarea 
                                            className='form-control'
                                            placeholder='contenido5'
                                            name="D1S1"
                                            onChange={this.onInputChange}
                                            value={this.state.D1S1}>

                                            </textarea>
                                        </td>
                                        <td>
                                            <textarea 
                                                className='form-control' 
                                                placeholder='contenido'
                                                name="D1R1"
                                                onChange={this.onInputChange}
                                                value={this.state.D1R1}>

                                                </textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <textarea 
                                                className='form-control' 
                                                placeholder='contenido'
                                                name="D1E2"
                                                onChange={this.onInputChange}
                                                value={this.state.D1E2}>
                                                </textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido' onChange={this.onInputChange}  name="D1S2"  value={this.state.D1S2}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1R2"  value={this.state.D1R2}></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1E3"  value={this.state.D1E3}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1S3"  value={this.state.D1S3}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1R3"  value={this.state.D1R3}></textarea>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1E4"  value={this.state.D1E4}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1S4"  value={this.state.D1S4}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1R4"  value={this.state.D1R4}></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1E5"  value={this.state.D1E5}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1S5"  value={this.state.D1S5}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1R5"  value={this.state.D1R5}></textarea>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1E6"  value={this.state.D1E6}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1S6"  value={this.state.D1S6}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1R6"  value={this.state.D1R6}></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1E7"  value={this.state.D1E7}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1S7"  value={this.state.D1S7}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1R7"  value={this.state.D1R7}></textarea>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1E8"  value={this.state.D1E8}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1S8"  value={this.state.D1S8}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D1R8"  value={this.state.D1R8}></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div>
                            <table class="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th colspan="3"><input type="text" className='form-control' placeholder='Día 2' name="Dia2" onChange={this.onInputChange} value={this.state.Dia2}/></th>
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
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2E1"  value={this.state.D2E1}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2S1"  value={this.state.D2S1}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2R1"  value={this.state.D2R1}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2E2"  value={this.state.D2E2}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2S2"  value={this.state.D2S2}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2R2"  value={this.state.D2R2}></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2E3"  value={this.state.D2E3}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2S3"  value={this.state.D2S3}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2R3"  value={this.state.D2R3}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2E4"  value={this.state.D2E4}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2S4"  value={this.state.D2S4}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2R4"  value={this.state.D2R4}></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2E5"  value={this.state.D2E5}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2S5"  value={this.state.D2S5}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2R5"  value={this.state.D2R5}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2E6"  value={this.state.D2E6}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2S6"  value={this.state.D2S6}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2R6"  value={this.state.D2R6}></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2E7"  value={this.state.D2E7}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2S7"  value={this.state.D2S7}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2R7"  value={this.state.D2R7}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2E8"  value={this.state.D2E8}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2S8"  value={this.state.D2S8}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D2R8"  value={this.state.D2R8}></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <table class="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th colspan="3"><input type="text" className='form-control' placeholder='Día 3'  name="Dia3" onChange={this.onInputChange} value={this.state.Dia3}/></th>
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
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3E1"  value={this.state.D3E1}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3S1"  value={this.state.D3S1}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3R1"  value={this.state.D3R1}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3E2"  value={this.state.D3E2}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3S2"  value={this.state.D3S2}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3R2"  value={this.state.D3R2}></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3E3"  value={this.state.D3E3}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3S3"  value={this.state.D3S3}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3R3"  value={this.state.D3R3}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3E4"  value={this.state.D3E4}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3S4"  value={this.state.D3S4}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3R4"  value={this.state.D3R4}></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3E5"  value={this.state.D3E5}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3S5"  value={this.state.D3S5}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3R5"  value={this.state.D3R5}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3E6"  value={this.state.D3E6}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3S6"  value={this.state.D3S6}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3R6"  value={this.state.D3R6}></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3E7"  value={this.state.D3E7}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3S7"  value={this.state.D3S7}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3R7"  value={this.state.D3R7}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3E8"  value={this.state.D3E8}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3S8"  value={this.state.D3S8}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D3R8"  value={this.state.D3R8}></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <table class="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th colspan="3"><input type="text" className='form-control' placeholder='Día 4'  name="Dia4" onChange={this.onInputChange} value={this.state.Dia4} /></th>
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
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4E1"  value={this.state.D4E1}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4S1"  value={this.state.D4S1}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4R1"  value={this.state.D4R1}></textarea>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4E2"  value={this.state.D4E2}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4S2"  value={this.state.D4S2}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4R2"  value={this.state.D4R2}></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4E3"  value={this.state.D4E3}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4S3"  value={this.state.D4S3}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4R3"  value={this.state.D4R3}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D4E4"
                                            onChange={this.onInputChange}
                                            value={this.state.D4E4}
                                            ></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D4S4"
                                            onChange={this.onInputChange}
                                            value={this.state.D4S4}
                                            ></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' 
                                            placeholder='contenido'
                                            name="D4R4"
                                            onChange={this.onInputChange}
                                            value={this.state.D4R4}
                                            ></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4E5"  value={this.state.D4E5}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4S5"  value={this.state.D4S5}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4R5"  value={this.state.D4R5}></textarea>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4E6"  value={this.state.D4E6}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4S6"  value={this.state.D4S6}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4R6"  value={this.state.D4R6}></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4E7"  value={this.state.D4E7}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4S7"  value={this.state.D4S7}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4R7"  value={this.state.D4R7}></textarea>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row">
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4E8"  value={this.state.D4E8}></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4S8"  value={this.state.D4S8}></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' placeholder='contenido'onChange={this.onInputChange}  name="D4R8"  value={this.state.D4R8}></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <table class="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th colspan="3"><input type="text"
                                        className='form-control'
                                        placeholder='Día 5'
                                        name="Dia5"
                                        onChange={this.onInputChange}
                                        value={this.state.Dia5}
                                        /></th>
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
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5E1"
                                            onChange={this.onInputChange}
                                            value={this.state.D5E1}
                                            ></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5S1"
                                            onChange={this.onInputChange}
                                            value={this.state.D5S1}
                                            ></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' 
                                            placeholder='contenido'
                                            name="D5R1"
                                            onChange={this.onInputChange}
                                            value={this.state.D5R1}
                                            ></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5E2"
                                            onChange={this.onInputChange}
                                            value={this.state.D5E2}
                                            ></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5S2"
                                            onChange={this.onInputChange}
                                            value={this.state.D5S2}
                                            ></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' 
                                            placeholder='contenido'
                                            name="D5R2"
                                            onChange={this.onInputChange}
                                            value={this.state.D5R2}
                                            ></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5E3"
                                            onChange={this.onInputChange}
                                            value={this.state.D5E3}
                                            ></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5S3"
                                            onChange={this.onInputChange}
                                            value={this.state.D5S3}
                                            ></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' 
                                            placeholder='contenido'
                                            name="D5R3"
                                            onChange={this.onInputChange}
                                            value={this.state.D5R3}
                                            ></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5E4"
                                            onChange={this.onInputChange}
                                            value={this.state.D5E4}
                                            ></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5S4"
                                            onChange={this.onInputChange}
                                            value={this.state.D5S4}
                                            ></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' 
                                            placeholder='contenido'
                                            name="D5R4"
                                            onChange={this.onInputChange}
                                            value={this.state.D5R4}
                                            ></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5E5"
                                            onChange={this.onInputChange}
                                            value={this.state.D5E5}
                                            ></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5S5"
                                            onChange={this.onInputChange}
                                            value={this.state.D5S5}
                                            ></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' 
                                            placeholder='contenido'
                                            name="D5R5"
                                            onChange={this.onInputChange}
                                            value={this.state.D5R5}
                                            ></textarea>
                                        </td>
                                        </tr>
                                        <tr class="">
                                        <th scope="row">
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5E6"
                                            onChange={this.onInputChange}
                                            value={this.state.D5E6}
                                            ></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5S6"
                                            onChange={this.onInputChange}
                                            value={this.state.D5S6}
                                            ></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' 
                                            placeholder='contenido'
                                            name="D5R6"
                                            onChange={this.onInputChange}
                                            value={this.state.D5R6}
                                            ></textarea>
                                        </td>
                                    </tr>
                                    <tr class="table-active">
                                        <th scope="row">
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5E7"
                                            onChange={this.onInputChange}
                                            value={this.state.D5E7}
                                            ></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5S7"
                                            onChange={this.onInputChange}
                                            value={this.state.D5S7}
                                            ></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' 
                                            placeholder='contenido'
                                            name="D5R7"
                                            onChange={this.onInputChange}
                                            value={this.state.D5R7}
                                            ></textarea>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row">
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5E8"
                                            onChange={this.onInputChange}
                                            value={this.state.D5E8}
                                            ></textarea>
                                        </th>
                                        <td>
                                            <textarea className='form-control'
                                            placeholder='contenido'
                                            name="D5S8"
                                            onChange={this.onInputChange}
                                            value={this.state.D5S8}
                                            ></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control' 
                                            placeholder='contenido'
                                            name="D5R8"
                                            onChange={this.onInputChange}
                                            value={this.state.D5R8}
                                            ></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button className="btn btn-primary my-3 ms-4">
                                        Save <i className="material-icons">
                                                assignment
                                        </i>
                                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
