import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navu() {
  return (
    <>


<nav className="navbar navbar-custom navbar-expand-lg navbar navbar-dark   bg-primary"  >
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
          <ul className="navbar-nav px-5 mx-5">
              <li className="nav-item active ">
              <Link className="nav-link active " aria-current="page" to="/register">Register</Link>
              </li>
              
              <li className="nav-item active ">
                <a className="nav-link" href="#">| <span style={{color: "goldclass"}} Name="sr-only"></span></a>
              </li>
              
              <li className="nav-item active">
              <Link className="nav-link active " aria-current="page" to="login">Log In</Link>
              </li>
             
            </ul>
        
      </div>
            
        </div>
      </nav>
    </>
  )
}

export default Navu
