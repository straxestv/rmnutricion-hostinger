import React, { Component } from 'react'
import axios from 'axios'
import "../styles/form.css"
const Swal = require('sweetalert2')
export default class form extends Component{
    
    state = {
        name: '',
        edad:'',
        estatura:'',
        peso:'',
        alergias:'',
        cintura:'',
        telefono: '',
        correo: '',
        grasa:'',
        objetivo:"",
        editing: false,
        _id: ''
    }

    async componentDidMount() {
        
        if (this.props.match.params.id) {
            const res = await axios.get('/api/notes/' + this.props.match.params.id);
            this.setState({
                title: res.data.title,
                content: res.data.content,
                date: new Date(res.data.date),
                userSelected: res.data.author,
                _id: res.data._id,
                editing: true
            });
        }
    }

    onSubmit = async (e) => {
        //e.preventDefault();
        if (this.state.editing) {
            const updatedNote = {
                title: this.state.title,
                content: this.state.content,
                date: this.state.date,
                user: this.state.user
            };
            await axios.put('/api/notes/' + this.state._id, updatedNote);
        } else {
            const newOrder = {
                name: this.state.name,
                edad: this.state.edad,
                estatura: this.state.estatura,
                peso: this.state.peso,
                alergias: this.state.alergias,
                cintura: this.state.cintura,
                telefono: this.state.telefono,
                correo: this.state.correo ,
                grasa: this.state.grasa,
                objetivo: this.state.objetivo,
                
            };
            axios.post('/api/ordersNote/from', newOrder);
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
        Swal.fire({
            title: 'En el apartado del correo ingresa el email con el que te registraste o con el que te vas a registrar',
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
        return (
            <div className="row1 fondo-form">
            
            <div className="container" id="formclient">
            <form  onSubmit={this.onSubmit}>
            <div className="form-group">
                <label for="name">name</label>
                <input 
                    type="text" 
                    className="form-control"
                    name="name" 
                    onChange={this.onInputChange} 
                    placeholder="name" 
                    id="name" 
                    value={this.state.name} 
                    required
                />
            </div>
            <div class="form-group">
                <label for="telefono">Edad</label>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Edad" 
                    id="edad"
                    name="edad"
                    onChange={this.onInputChange} 
                    value={this.state.edad} 
                    required
                />
            </div>
            <div class="form-group">
                <label for="estatura">Estatura</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Estatura" 
                    id="estatura"
                    name="estatura"
                    onChange={this.onInputChange} 
                    value={this.state.estatura} 
                    required
                />
            </div>
            <div class="form-group">
                <label for="peso">Peso</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Peso" 
                    id="peso"
                    name="peso"
                    onChange={this.onInputChange} 
                    value={this.state.peso} 
                    required
                />
            </div>
            <div class="form-group">
                <label for="alergias">Alergias</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Alergias" 
                    id="alergias"
                    name="alergias"
                    onChange={this.onInputChange} 
                    value={this.state.alergias} 
                />
            </div>
            <div class="form-group">
                <label for="cintura">Cintura</label>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Cintura" 
                    id="cintura"
                    name="cintura"
                    onChange={this.onInputChange} 
                    value={this.state.cintura} 
                    required
                />
            </div>
            <div class="form-group">
                <label for="telefono">Numero de telefono</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Numero de telefono" 
                    id="telefono"
                    name="telefono"
                    onChange={this.onInputChange} 
                    value={this.state.telefono} 
                    required
                />
            </div>
            <div class="form-group">
                <label for="correo">Correo Electronico</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Correo electronico" 
                    id="correo"
                    name="correo"
                    onChange={this.onInputChange} 
                    value={this.state.correo} 
                    required
                />
            </div>
            <div class="form-group">
                <label for="grasa">Grasa corporal (opcional)</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Grasa" 
                    id="grasa"
                    name="grasa"
                    onChange={this.onInputChange} 
                    value={this.state.grasa} 
                    required
                />
            </div>
            <div >
                <label for="Objetivo" className="form-label">Objetivo</label>
                <textarea 
                    className="form-control" 
                    id="Objetivo"
                    name="objetivo"
                    onChange={this.onInputChange} 
                    value={this.state.objetivo} 
                    required
                ></textarea>
            </div>
            <div className="form-group">
                <label>Genero</label>
                <div className="radio">
                    <label className="radio-inline">
                        <input type="radio" name="optradio"/>Hombre</label>
                    <label className="radio-inline">
                        <input type="radio" name="optradio"/>Mujer</label>
                </div>
            </div>
            <div class="clearfix"></div>
            <button type="submit" className="btn btn-info btn-lg btn-responsive" id="search"> <span className="glyphicon glyphicon-send"></span> Enviar</button>
        </form>
    </div>


            </div>
            
        )
    }
}

