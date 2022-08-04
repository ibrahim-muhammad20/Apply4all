import React from 'react'
// import FormGroup from 'react-bootstrap'
// import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
// import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel'
// import FormRange from 'react-bootstrap/esm/FormRange'
// import Table from 'react-bootstrap'
// import ToggleButtonRadioProps from 'react-bootstrap'
// import MeritMatric from './MeritMatric'
// import MeritFsc from './MeritFsc'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {useNavigate, Outlet} from 'react-router-dom'

function Merit() {
  let navigate = useNavigate();

  return (
    <>
      <div className='container'>
        <div className="form-group">
          <h2 className='py-3'><span className='sp'> Merit Calculator</span></h2>
          <table>
            <tbody><tr className="">
              <td width="80%">
              </td><td className="py-2 "width="30%">
              <button  onClick={() => {navigate('meritFsc')}} type="button" class="btn btn-warning">Without Matric</button>

              </td>
              <td width="48%">
                <button  onClick={() => {navigate('meritMatric')}} type="button" class="btn btn-danger">Matric</button>

              </td>
            </tr>
            </tbody></table>
        </div>
      </div>



      <Outlet />
    </>
  )
}

export default Merit
