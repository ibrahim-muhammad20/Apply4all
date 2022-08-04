import axios from 'axios'
import React, { Component, useState } from 'react';


export default class Forget extends Component{
    constructor(props) {
        super(props);
        this.state = { email: "", errors: {} };
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput = e => {
        // e.preventDefault();
        console.log(e.target.value);
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
        const data = { email: this.state.email };
        axios
            .post("http://localhost:3000/auth/reset", data)
            .then(result => {
                console.log("Password Reset link sent to your email .Please check the your email.Link Will be Valid For 30 min");
            })
            .catch(err => {
                  if (err.response && err.response.status === 404)
                    console.log(err.response.data.msg);
                  else
                    console.log("Something Went Wrong");
                  this.setState({ errors: err.response })
            });

        }
   
    
    render(){
        return(
            <div className="content">
            <form onSubmit={this.handleForm}>
                <div className="row" style={{ marginTop: 20 }}>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label >Email address</label>
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleInput} className="form-control" />
                                </div>
                            </div>
                            <input type="button" value="send Mail" onClick={this.handleForm} className="btn btn-primary" />
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </form>
        </div>
        )
    }
    }

 