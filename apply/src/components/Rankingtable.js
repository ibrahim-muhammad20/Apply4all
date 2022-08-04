import React, { Component } from 'react'

export class Rankingtable extends Component {
  render() {
    let {Ranking,uniname,district}=this.props;
    return (
      
        <table class="table">
  <thead class="thead-dark table-striped table-bordered table-hover">
    <tr>
      <th scope="col">Ranking</th>
      <th scope="col">University Name</th>
      <th scope="col">District</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{Ranking}</th>
      <td>{uniname}</td>
      <td>{district}</td>
   
    </tr>
  
  </tbody>
</table>


      
    )
  }
}

export default Rankingtable
