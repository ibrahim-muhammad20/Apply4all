import React, { Component } from 'react'

export class FinancialAidtable extends Component {

  render() {
    let {uniname,FA,EC,district}=this.props;
  
    return (
      
        <table class="table">
  <thead class="thead-dark table-striped table-bordered table-hover">
    <tr>
      <th scope="col">University Name</th>
      <th scope="col">Financial Aid Programs</th>
      <th scope="col">Eligibility Criteria</th>
      <th scope="col">District</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <th scope="row">{uniname}</th>
      <td>{FA}</td>
      <td>{EC}</td>
      <td>{district}</td>
   
    </tr>
  
  </tbody>
</table>


      
    )
  }
}

export default FinancialAidtable
