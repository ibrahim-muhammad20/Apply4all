import React from 'react'


// import 'bootstrap/dist/css/bootstrap.min.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles
// import icons from 'react-icons';
// import InputGroup from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import  FormGroup  from 'react-bootstrap';
// import  FormControl from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import '../navbar.css'

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar navbar-light py-4"  >
        <div className="container  ">
         
          <div className="row-1 pl-4">
          <a className="navbar-brand ml-5 " href="#"><img class="ml-5 px-1 " src="./applydark.png" alt="" height="70px" width="140px"/></a>
          </div>  
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button onClick={() => {navigate('meritcalculator')}} type="button" className="btn btn-warning btn-color btn-outline-light me-3">
                  {/* <Link to="/merit"> */}
                  Merit Calculator
                  {/* </Link> */}
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => {navigate('apply')}} type="button" className="btn btn-warning btn-color btn-outline-light me-3">
                  Apply
                </button>
              </li>


              <li className="nav-item">
                <form className="d-flex">
                  <button
                    onClick={() => {
                      navigate("search");
                    }}
                    className="btn btn-outline-warning"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </li>
            </ul>


          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar
