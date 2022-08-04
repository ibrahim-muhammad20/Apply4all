// import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import Rankingtable from "./Rankingtable";

export default class ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "District",
      uninames: [],
      uniname:""     
    };

    this.handleChangeRanking = this.handleChangeRanking.bind(this);
  }
  handleChangeRanking = event => {
    this.setState({ uniname: event.target.value }); //store the selected tag
  };
  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map((e) => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])

      .map((e) => arr[e]);

    return unique;
  }
 
  componentDidMount() {
    const uninames = require("./rankingdata.json");
    this.setState({ uninames: uninames });
  }
  render() {
    const uniqueRanking = this.getUnique(this.state.uninames, "tag");
    const uninames = this.state.uninames;
    const uniname = this.state.uniname;
    const filterDropdown = uninames.filter(function(result) {
      return result.tag === uniname;
    });

    return (
      <div>
         <h2 className="text-center py-3">
          {" "}
          <span className="sp">Ranking Of Universities</span>{" "}
        </h2>
        <div className="container">
          <div className="row pr-3">
            <div className="d-inline p-2 m-3 col-12  ">
             
              <label for="exampleFormControlInput1">District </label>

              <select value={this.state.uniname}
              onChange={this.handleChangeRanking} class="form-select"  aria-label="Default select example">
              {uniqueRanking.map(r => (
                <option key={r.id} value={r.tag}>
                  {r.tag}
                </option>
              ))}
              </select>
             
              </div>
          </div>
          </div>
              <div>       
              {filterDropdown.map((ranking) => {return  <div key={ranking.id} >
                <div className="container table table-bordered table-dark table-hover">
                     <Rankingtable Ranking={ranking.Ranking} uniname={ranking.Uniname} district={ranking.district}/>
                     </div></div> })}
                
          </div>
         

          
         
          
      </div>
    );
  }
}
  
// export default function Ranking() {

//   componentD
//   return (
//   <div>
// <h2 className="text-center py-3"> <span className='sp'>Ranking Of Universities</span> </h2>
// <div className="container">
// <div className="row pr-3">

//     <div className="d-inline p-2 m-3 col-12  ">
//       <label for="exampleFormControlInput1">District</label>

//       <select class="form-select" aria-label="Default select example">
//         <option selected>District</option>
//         <option value="1">Lahore</option>
//         <option value="2">Karachi</option>
//         <option value="3">Peshawar</option>
//         <option value="4">Islamabad</option>
//       </select>
//     </div>
//     </div>
//     <div className="row">
//           <div className="d-inline p-2 m-3 col-12">
//                 <button  type="button " class="btn btn-warning" onClick={LoadRanking} >Search</button>
//           </div>
//     </div>
//   </div>
//   </div>
//   )
// }
