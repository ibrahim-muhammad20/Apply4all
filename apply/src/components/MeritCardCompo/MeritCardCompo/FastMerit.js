// import React, { useState } from "react";
import React, { Component } from 'react'

export class FastMerit extends Component {
  constructor(props){
    super(props)
    this.state={
      Part1Marks:"",
      Part1TotalMarks:"",
      NTSMarks:"",
      NTSTotalMarks:"",
      sum:""
    };
      this.handleChangeNTS=this.handleChangeNTS.bind(this)
      this.handleChangeNTStotal=this.handleChangeNTStotal.bind(this)
      this.handleChangeP1total=this.handleChangeP1total.bind(this)
      this.handleChangePart1=this.handleChangePart1.bind(this)
      this.CalculateAggregate=this.CalculateAggregate.bind(this)
      
  }
  CalculateAggregate = (e) => {
    var aggregate =(this.state.Part1Marks / this.state.Part1TotalMarks) * 50 + (this.state.NTSMarks /this.state.NTSTotalMarks) * 50;
    this.setState({sum:aggregate});
    e.preventDefault();
  }
  handleChangeNTS=(event)=>{
    this.setState({NTSMarks:event.target.value})
  }
  handleChangePart1=(event)=>{
    this.setState({Part1Marks:event.target.value})
  }
  handleChangeNTStotal=(event)=>{
    this.setState({NTSTotalMarks:event.target.value})
  }
  handleChangeP1total=(event)=>{
    this.setState({Part1TotalMarks:event.target.value})
  }
  render() {
    return (
      <div>
            <div style={{ padding: "10px" }}>
      <div className="boxshadow p-sm-5 p-4 backcolor">
        <h3
          className="text-center"
          style={{ backgroundColor: "#ffc107", color: "white" }}
        >
          FAST Merit Calculator
          {/* {console.log(count)} */}
        </h3>
        <br />
        <div className="row">
          <div className="col-lg-10 col-md-10">
            <p className="text-justify">
              Calculate your aggregate and merit for admission in engineering
              programs of FAST. You just need to enter your marks to calculate
              the aggregate. FAST merit calculator calculates the aggregate and
              show you the aggregate on the page. FAST university islamabad,
              Lahore, Faisalabad calculator, FAST aggregate calculator make it
              easy to calculate it everything is already considered you just
              need to enter the marks to calculate the aggregate.Here you can
              calculate the aggregate on the base of NTS and also on the other
              bases.
            </p>
          </div>
          <div className="col-lg-2 col-md-2">
            <table className="table table-hover table-sm">
              <thead className="thead-inverse">
                <tr>
                  <th colspan="2" className="text-center">
                    Criteria
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FSC-1</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>NTS</td>
                  <td>50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <form className="p-5 formcolor">
          <div className="form-group text-center row">
            <div className="col-sm-12 col-md-12 text-center align-self-center">
              <h3 className="tittle text-dark font-weight-bold">
                FAST Merit Calculator on NTS Base
              </h3>

              <hr className="style-one" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 col-md-2 text-center align-self-center">
              <label for="inputdefault">
                <b>FSC-1 Marks</b>
              </label>
            </div>
            <div className="col-sm-12 col-md-5">
              <input
                className="form-control mb-1"
                id="part1"
                value={this.state.Part1Marks}
                onChange={this.handleChangePart1}
                placeholder="Obtain marks in FSC-1 "
                type="number"
                required
                minlength="0"
              />
            </div>
            <div className="col-sm-12 col-md-5">
              <input
                className="form-control mb-1"
                id="part1total"
                value={this.state.Part1TotalMarks}
                onChange={this.handleChangeP1total}
                placeholder="Total marks in FSC-1 "
                type="number"
                required
                min="0"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 col-md-2 text-center align-self-center">
              <label for="inputdefault">
                <b> NTS Marks </b>
              </label>
            </div>
            <div className="col-sm-12 col-md-5">
              <input
                className="form-control mb-1"
                id="nts"
                value={this.state.NTSMarks}
                //  onChange={(e) => setUsername(e.target.value)}
                onChange={(e)=>{this.setState({NTSMarks:e.target.value})}}
                // onChange={this.handleChangeNTS}
                placeholder="Obtain marks in NTS"
                type="number"
                required
                min="0"
              />
            </div>
            <div className="col-sm-12 col-md-5">
              <input
                className="form-control"
                id="ntstotal"
                value={this.state.NTSTotalMarks}
                onChange={(e)=>{this.setState({NTSTotalMarks:e.target.value})}}
                // onChange={this.handleChangeNTStotal}
                placeholder="Total marks in NTS"
                type="number"
                required
                min="0"
              />
            </div>
          </div>

          <div className="form-group text-center row">
            <div className="col-sm-12 col-md-12 text-center align-self-center">
              <div id="finalresult"></div>
            </div>
          </div>

          <br />
          <div className="form-group text-center row">
            <div className="col-sm-12 col-md-12 text-center align-self-center">
              <button
                type="submit"
                className="btn btn-outline-info"
                onClick={this.CalculateAggregate}
              >
                Calculate
              </button>
            </div>
          </div>

          {this.state.sum !== 0 ? (
            <div id="finalresult">
              <hr class="style-three" />{" "}
              <h3>
                {" "}
                
                Your Aggregate = <span id="showresult">{this.state.sum+"%"} </span>{" "}
              </h3>{" "}
              <hr class="style-three" />{" "}
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
      </div>
    )
  }
}

export default FastMerit

// export default function FastMerit() {
//   const [count, setCount] = useState(0);

//   const calculate_aggregate = (e) => {
//     var Part1Marks = document.getElementById("part1").value;
//     var Part1TotalMarks = document.getElementById("part1total").value;
//     var NTSMarks = document.getElementById("nts").value;
//     var NTSTotalMarks = document.getElementById("ntstotal").value;

//     var aggregate =(Part1Marks / Part1TotalMarks) * 50 + (NTSMarks / NTSTotalMarks) * 50;
//     setCount(aggregate);
//     e.preventDefault();
//   };
  

//   return (
    // <div style={{ padding: "10px" }}>
    //   <div className="boxshadow p-sm-5 p-4 backcolor">
    //     <h3
    //       className="text-center"
    //       style={{ backgroundColor: "#ffc107", color: "white" }}
    //     >
    //       FAST Merit Calculator
    //       {console.log(count)}
    //     </h3>
    //     <br />
    //     <div className="row">
    //       <div className="col-lg-10 col-md-10">
    //         <p className="text-justify">
    //           Calculate your aggregate and merit for admission in engineering
    //           programs of FAST. You just need to enter your marks to calculate
    //           the aggregate. FAST merit calculator calculates the aggregate and
    //           show you the aggregate on the page. FAST university islamabad,
    //           Lahore, Faisalabad calculator, FAST aggregate calculator make it
    //           easy to calculate it everything is already considered you just
    //           need to enter the marks to calculate the aggregate.Here you can
    //           calculate the aggregate on the base of NTS and also on the other
    //           bases.
    //         </p>
    //       </div>
    //       <div className="col-lg-2 col-md-2">
    //         <table className="table table-hover table-sm">
    //           <thead className="thead-inverse">
    //             <tr>
    //               <th colspan="2" className="text-center">
    //                 Criteria
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr>
    //               <td>FSC-1</td>
    //               <td>50%</td>
    //             </tr>
    //             <tr>
    //               <td>NTS</td>
    //               <td>50%</td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>

    //     <form className="p-5 formcolor">
    //       <div className="form-group text-center row">
    //         <div className="col-sm-12 col-md-12 text-center align-self-center">
    //           <h3 className="tittle text-dark font-weight-bold">
    //             FAST Merit Calculator on NTS Base
    //           </h3>

    //           <hr className="style-one" />
    //         </div>
    //       </div>
    //       <div className="form-group row">
    //         <div className="col-sm-12 col-md-2 text-center align-self-center">
    //           <label for="inputdefault">
    //             <b>FSC-1 Marks</b>
    //           </label>
    //         </div>
    //         <div className="col-sm-12 col-md-5">
    //           <input
    //             className="form-control mb-1"
    //             id="part1"
    //             placeholder="Obtain marks in FSC-1 "
    //             type="number"
    //             required
    //             minlength="0"
    //           />
    //         </div>
    //         <div className="col-sm-12 col-md-5">
    //           <input
    //             className="form-control mb-1"
    //             id="part1total"
    //             placeholder="Total marks in FSC-1 "
    //             type="number"
    //             required
    //             min="0"
    //           />
    //         </div>
    //       </div>
    //       <div className="form-group row">
    //         <div className="col-sm-12 col-md-2 text-center align-self-center">
    //           <label for="inputdefault">
    //             <b> NTS Marks </b>
    //           </label>
    //         </div>
    //         <div className="col-sm-12 col-md-5">
    //           <input
    //             className="form-control mb-1"
    //             id="nts"
    //             placeholder="Obtain marks in NTS"
    //             type="number"
    //             required
    //             min="0"
    //           />
    //         </div>
    //         <div className="col-sm-12 col-md-5">
    //           <input
    //             className="form-control"
    //             id="ntstotal"
    //             placeholder="Total marks in NTS"
    //             type="number"
    //             required
    //             min="0"
    //           />
    //         </div>
    //       </div>

    //       <div className="form-group text-center row">
    //         <div className="col-sm-12 col-md-12 text-center align-self-center">
    //           <div id="finalresult"></div>
    //         </div>
    //       </div>

    //       <br />
    //       <div className="form-group text-center row">
    //         <div className="col-sm-12 col-md-12 text-center align-self-center">
    //           <button
    //             type="submit"
    //             className="btn btn-outline-info"
    //             onClick={calculate_aggregate}
    //           >
    //             Calculate
    //           </button>
    //         </div>
    //       </div>

    //       {count !== 0 ? (
    //         <div id="finalresult">
    //           <hr class="style-three" />{" "}
    //           <h3>
    //             {" "}
                
    //             Your Aggregate = <span id="showresult">{count+"%"} </span>{" "}
    //           </h3>{" "}
    //           <hr class="style-three" />{" "}
    //         </div>
    //       ) : (
    //         ""
    //       )}
    //     </form>
    //   </div>
    // </div>
//   );
// }
