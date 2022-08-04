import React, { Component } from 'react'
import axios from 'axios';

export default class Reset extends Component {

    constructor(props) {
        super(props);
        this.state = { linkDate:"",email:"",password: "",confirm_password: "", errors: {} };
    }

    
    handleInput = e => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    handleForm = e => {
        e.preventDefault();
        if (this.state.email === '') {
            console.log("Email is Required");
            return false;
        }
        // const data = { email: this.state.email, };
        // console.log(data)
        axios
            .post("http://localhost:3000/auth/updatePassword", this.state)
            .then(result => {
                console.log(result.data.msg);
            })
            .catch(err => {
                if (err.response && err.response.status === 404)
                    console.log(err.response.data.msg);
                else
                    console.log("Something Went Wrong");
                this.setState({ errors: err.response })
            });

    }
    
    render() {
        return (
            <div className="content">
            <form onSubmit={this.handleForm}>
                <div className="row" style={{ marginTop: 20 }}>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header text-center">Reset Password</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label >Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleInput} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label >Confirm Password</label>
                                    <input type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleInput} className="form-control" />
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <input type="button" value="Reset" onClick={this.handleForm} className="btn btn-primary" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </form>
        </div>
        )
    }
}