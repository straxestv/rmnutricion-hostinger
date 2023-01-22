import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class AdmUser extends Component {

    state = {
        email: '',
        users: []
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('/api/adm/users');
        this.setState({
            users: res.data
        });
    }



/*
    getUser = async (userEmail) => {
        
        await axios.get('http://localhost:5000/api/ordersNote/signin' + userEmail);
        
    }
*/
    render() {
        return (
            <div className="row">
                
                <div className="col-md-8 my-5 ms-5">
                    <ul className="list-group ">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item AmdUser list-group-item-action" key={user._id} onDoubleClick={() => this.getUser(user.email)}>
                                    
                                    <Link to={'/UserAdmInfo/' + user.email} >{user.email}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
