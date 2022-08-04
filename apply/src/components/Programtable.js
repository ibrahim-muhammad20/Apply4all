import React, { Component } from 'react'

export class Programtable extends Component {
  render() {
    let {No,uniname,programsoffered,district}=this.props;
    return (
      
        <table class="table">
  <thead class="thead-dark table-striped table-bordered table-hover">
    <tr>
      <th scope="col">LIST</th>
      <th scope="col">University Name</th>
      <th scope="col">Programs Offered</th>
      <th scope="col">District</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{No}</th>
      <td>{uniname}</td>
      <td>{programsoffered}</td>
      <td>{district}</td>
   
    </tr>
  
  </tbody>
</table>


      
    )
  }
}

export default Programtable
