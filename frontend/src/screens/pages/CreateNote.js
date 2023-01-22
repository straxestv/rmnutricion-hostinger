import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import CreateRutina from './CrearRutina.js'
import ImageF from './ImageForm'
//import ImageF from './ImageForm'

export default class CreateNote extends Component {

        state = {
        M1C1: "",
        M1C2: "",
        M1C3: "",
        M1C4: "",
        M1C5: "",
        M1C6: "",
        M1C7: "",
        M1C8: "",

        M2C1: "",
        M2C2: "",
        M2C3: "",
        M2C4: "",
        M2C5: "",
        M2C6: "",
        M2C7: "",
        M2C8: "",
        Suplem: '',
        date: new Date(),
        userSelected: '',
        user: '',
        editing: false,
        _id: ''
        }

        async componentDidMount() {

                if (this.props.match.params.id) {
                const res = await axios.get('/api/notes/' + this.props.match.params.id);
                this.setState({
                M1C1: res.data.M1C1,
                M1C2: res.data.M1C2,
                M1C3: res.data.M1C3,
                M1C4: res.data.M1C4,
                M1C5: res.data.M1C5,
                M1C6: res.data.M1C6,
                M1C7: res.data.M1C7,
                M1C8: res.data.M1C8,

                M2C1: res.data.M2C1,
                M2C2: res.data.M2C2,
                M2C3: res.data.M2C3,
                M2C4: res.data.M2C4,
                M2C5: res.data.M2C5,
                M2C6: res.data.M2C6,
                M2C7: res.data.M2C7,
                M2C8: res.data.M2C8,
                Suplem: res.data.Suplem,
                date: new Date(res.data.date),
                userSelected: res.data.author,
                user: res.data.user,
                _id: res.data._id,
                editing: true
                });
        }
        }

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
                Suplem: this.state.Suplem,
                date: this.state.date,
                user: this.state.user
                };
                await axios.put('/api/notes/' + this.state._id, updatedNote);
        } else {
                const newNote = {
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
                Suplem:this.state.Suplem,
                date: this.state.date,
                user: this.state.user
            };
            console.log(newNote);
            axios.post('/api/notes', newNote);

        }
        window.location.href = '/';

        }

        ontextareaChange = (e) => {
                this.setState({
                [e.target.name]: e.target.value
                })
        }

        onChangeDate = date => {
                this.setState({ date });
        }

        render() {
                return (<div className="rgbcolor1 container mt-2 text-white  rounded-top">

                <ul className="nav nav-tabs">
                        <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#Rutinas">Rutinas</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#Dietas">Dietas</a>
                        </li>
                        {/*
                        <li>
                                <a className="nav-link" data-bs-toggle="tab" href="#Img">imagen</a>
                        </li>*/}
                </ul>

                <div className="tab-content">
                        <div className="tab-pane active" id="Rutinas">
                        {/*
                        this.state.rut.map(ruti => (<Rutina key={ruti._id} note={ruti}/>*/
                                <CreateRutina />
                                /* ))*/
                        }
                        </div>
                        {/*<div className='tab-pane active' id='Img'>
                                <ImageF/>
                        </div>*/}
                        <div className="tab-pane" id="Dietas">
                        <div className="tab-pane" id="Dietas">
                                <div className="row g-0 rounded shadow-sm">
                                <form className="" onSubmit={this.onSubmit}>
                                        <div className=" ">
                                                <div className="text-center userD form-group">
                                                        <h4 className="">Usuario</h4>
                                                        <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="user"
                                                                name="user"
                                                                onChange={this.ontextareaChange}
                                                                value={this.state.user}
                                                                required>
                                                        </input>
                                                </div>
                                        </div>
                                        <div>
                                <h3>Menu 1</h3>
                                <div className="container text-center">
                                <div className="row">
                                        <div className="col-sm-5 col-md-6">
                                        <ul>
                                                <h4 className="color2">Comida 1</h4>
                                                <li>
                                                        <textarea
                                                                type="text"
                                                                className="form-control dieta"
                                                                placeholder="contenido"
                                                                onChange={this.ontextareaChange}
                                                                name="M1C1"
                                                                value={this.state.M1C1}
                                                                required>
                                                        </textarea>
                                                </li>
                                        </ul>
                                        </div>
                                        <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                
                                        <ul>
                                                <h4 className="color2">Comida 2</h4>
                                                <li>
                                                        <textarea
                                                                type="text"
                                                                className="form-control dieta"
                                                                placeholder="contenido"
                                                                onChange={this.ontextareaChange}
                                                                name="M1C2"
                                                                value={this.state.M1C2}
                                                                required>
                                                        </textarea>
                                                </li>
                                        </ul>
                
                                        </div>
                                </div>
                                <div className="row">
                                        <div className="col-sm-6 col-md-5 col-lg-6">
                
                                        <ul>
                                                <h4 className="color2">Comida 3</h4>
                                                
                                                <li>
                                                        <textarea
                                                        type="text"
                                                        className="form-control dieta"
                                                        placeholder="contenido"
                                                        onChange={this.ontextareaChange}
                                                        name="M1C3"
                                                        value={this.state.M1C3}
                                                        required>
                                                        </textarea>
                                                </li>
                                        </ul>
                
                                        </div>
                                        <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                
                                        <ul>
                                                <h4 className="color2">Comida 4</h4>
                                                <li>
                                                        <textarea
                                                                type="text"
                                                                className="form-control dieta"
                                                                placeholder="contenido"
                                                                onChange={this.ontextareaChange}
                                                                name="M1C4"
                                                                value={this.state.M1C4}
                                                                required>
                                                        </textarea>
                                                </li>
                                        </ul>
                
                                        </div>
                                        <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                
                                        <ul>
                                                <h4 className="color2">Comida 5</h4>
                                                <li>
                                                        <textarea
                                                        type="text"
                                                        className="form-control dieta"
                                                        placeholder="contenido"
                                                        onChange={this.ontextareaChange}
                                                        name="M1C5"
                                                        value={this.state.M1C5}
                                                        required>
                                                        </textarea>
                                                </li>
                                        </ul>
                
                                        </div>
                                        <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                
                                        <ul>
                                                <h4 className="color2">Comida 6</h4>
                                                <li>
                                                        <textarea
                                                                type="text"
                                                                className="form-control dieta"
                                                                placeholder="contenido"
                                                                onChange={this.ontextareaChange}
                                                                name="M1C6"
                                                                value={this.state.M1C6}
                                                                required>
                                                        </textarea>
                                                </li>
                                        </ul>
                
                                        </div>
                                        <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                
                                        <ul>
                                                <h4 className="color2">Comida 7</h4>
                                                <li>
                                                <textarea
                                                        type="text"
                                                        className="form-control dieta"
                                                        placeholder="contenido"
                                                        onChange={this.ontextareaChange}
                                                        name="M1C7"
                                                        value={this.state.M1C7}
                                                        required>
                                                </textarea>
                                                </li>
                                        </ul>
                
                                        </div>
                                        <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                
                                        <ul>
                                                <h4 className="color2">Comida 8</h4>
                                                <li>
                                                <textarea
                                                        type="text"
                                                        className="form-control dieta"
                                                        placeholder="contenido"
                                                        onChange={this.ontextareaChange}
                                                        name="M1C8"
                                                        value={this.state.M1C8}
                                                        required>
                                                </textarea>
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
                                                <textarea
                                                        type="text"
                                                        className="form-control dieta"
                                                        placeholder="contenido"
                                                        onChange={this.ontextareaChange}
                                                        name="M2C1"
                                                        value={this.state.M2C1}
                                                        required>
                                                </textarea>
                                                </li>
                                        </ul>
                                        </div>
                                        <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                
                                        <ul>
                                                <h4 className="color2">Comida 2</h4>
                
                                                <li>
                                                <textarea
                                                        type="text"
                                                        className="form-control dieta"
                                                        placeholder="contenido"
                                                        onChange={this.ontextareaChange}
                                                        name="M2C2"
                                                        value={this.state.M2C2}
                                                        required>
                                                </textarea>
                                                </li>
                                        </ul>
                                        </div>
                                </div>
                                <div className="row">
                                        <div className="col-sm-6 col-md-5 col-lg-6">
                                        <ul>
                                                <h4 className="color2">Comida 3</h4>
                                                
                                                <li>
                                                <textarea
                                                        type="text"
                                                        className="form-control dieta"
                                                        placeholder="contenido"
                                                        onChange={this.ontextareaChange}
                                                        name="M2C3"
                                                        value={this.state.M2C3}
                                                        required>
                                                </textarea>
                                                </li>
                                        </ul>
                                        </div>
                                        <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                                        <ul>
                                                <h4 className="color2">Comida 4</h4>
                                                <li>
                                                <textarea
                                                        type="text"
                                                        className="form-control dieta"
                                                        placeholder="contenido"
                                                        onChange={this.ontextareaChange}
                                                        name="M2C4"
                                                        value={this.state.M2C4}
                                                        required>
                                                </textarea>
                                                </li>
                                        </ul>
                
                                        </div>
                                        <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                
                                        <ul>
                                                <h4 className="color2">Comida 5</h4>
                                                <li>
                                                <textarea
                                                        type="text"
                                                        className="form-control dieta"
                                                        placeholder="contenido"
                                                        onChange={this.ontextareaChange}
                                                        name="M2C5"
                                                        value={this.state.M2C5}
                                                        required>
                                                </textarea>
                                                </li>
                                        </ul>
                
                                        </div>
                                        <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                
                                        <ul>
                                                <h4 className="color2">Comida 6</h4>
                                                
                                                <li>
                                                <textarea
                                                        type="text"
                                                        className="form-control dieta"
                                                        placeholder="contenido"
                                                        onChange={this.ontextareaChange}
                                                        name="M2C6"
                                                        value={this.state.M2C6}
                                                        required>
                                                </textarea>
                                                </li>
                                        </ul>
                
                                        </div>
                                        <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                
                                        <ul>
                                                <h4 className="color2">Comida 7</h4>
                                                <li>
                                                <textarea
                                                        type="text"
                                                        className="form-control dieta"
                                                        placeholder="contenido"
                                                        onChange={this.ontextareaChange}
                                                        name="M2C7"
                                                        value={this.state.M2C7}
                                                        required>
                                                </textarea>
                                                </li>
                                        </ul>
                
                                        </div>
                                        <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                
                                        <ul>
                                                <h4 className="color2">Comida 8</h4>
                                                
                                                <li>
                                                <textarea
                                                        type="text"
                                                        className="form-control dieta"
                                                        placeholder="contenido"
                                                        onChange={this.ontextareaChange}
                                                        name="M2C8"
                                                        value={this.state.M2C8}
                                                        required>
                                                </textarea>
                                                </li>
                                        </ul>
                
                                        </div>
                
                                </div>
                                        <div className="text-center userD form-group">
                                                        <h3>suplementos</h3>
                                                        <textarea
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Suplem"
                                                        name="Suplem"
                                                        onChange={this.ontextareaChange}
                                                value={this.state.Suplem}
                                                required>
                                        </textarea>
                                        </div>
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
                        </div>
                        
                </div>
                </div>
                )
        }
        }
