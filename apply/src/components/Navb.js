import React from 'react'
// import '../navb.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Navb() {
  return (
    <>
      <nav className="navbar navbar-customb navbar navbar-expand-lg navbar navbar-dark bg-primary "  >
        <div className="container  ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center  " id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active ma ">
              <Link className="nav-link active " aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item active ma">
              <Link className="nav-link active " aria-current="page" to="ranking">Rankings</Link>
              </li>
              <li className="nav-item active ma">
              <Link className="nav-link active " aria-current="page" to="programsoffered">Programs Offered</Link>
              </li>
              <li className="nav-item active ma">
              <Link className="nav-link active " aria-current="page" to="financialaid">Financial Aid</Link>
              </li>
            </ul>


          </div>

        </div>
      </nav>
    </>
  )
}

export default Navb
