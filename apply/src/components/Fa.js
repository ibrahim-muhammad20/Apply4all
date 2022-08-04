
import React, { Component } from "react";
import FinancialAidtable from "./FinancialAidtable";

export class Fa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "District",
      financialaids: [],
      financialaid: "",
      financialaid2: "",
      clicked:false,
    };

    this.handleChangeFA = this.handleChangeFA.bind(this);
    this.handleChangeFA2 = this.handleChangeFA2.bind(this);
  }
  handleChangeFA = (event) => {
    this.setState({ financialaid: event.target.value,clicked:true }); //store the selected tag
  };
  handleChangeFA2 = (event) => {
    this.setState({ financialaid2: event.target.value }); //store the selected tag
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
    const financialaids = require("./FinancialAiddata.json");
    this.setState({ financialaids: financialaids });
  }
  render() {
    const uniqueUniversity = this.getUnique(this.state.financialaids, "tag");
    const uniqueUniversity1 = this.getUnique(
      this.state.financialaids,
      "Uniname"
    );

    const financialaids = this.state.financialaids;
    const financialaid = this.state.financialaid;
    const financialaid2 = this.state.financialaid2;
    const filterUnique = uniqueUniversity1.filter(function (result) {
      return result.tag === financialaid;
    });
    const filterDropdown = financialaids.filter(function (result) {
      return result.Uniname === financialaid2;
    });
    return (
      <div>
        <h2 className="text-center py-3">
          <span className="sp"> Universities Offering Financial Aid</span>
        </h2>
        <div className="container">
          <div className="row pr-3">
            <div className=" col-5">
              <div className="d-inline p-2 m-3 col-4  ">
                <label for="exampleFormControlInput1">District</label>
                <select
                  class="form-select"
                  value={this.state.financialaid}
                  onChange={this.handleChangeFA}
                  aria-label="Default select example"
                >
                 
                  {uniqueUniversity.map((University) => (
                    <option key={University.id} value={University.tag}>
                      {University.tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-5">
              <div className="d-inline p-2 m-3  col-4 ">
                <label for="exampleFormControlInput1">Universities</label>

                <select
                  class="form-select"
                  value={this.state.financialaid}
                  onChange={this.handleChangeFA2}
                  aria-label="Default select example"
                  placeholder="Select District "
                > !clicked ? <option >Select</option>:
                  {filterUnique.map((programs) => (
                    <option key={programs.Uniname} value={programs.Uniname}>
                      {programs.Uniname}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        {filterDropdown.map((FinancialAid) => {
          return (
            <div key={FinancialAid.id}>
              <div className="container table table-bordered table-dark table-hover">
                <FinancialAidtable
                 uniname={FinancialAid.Uniname}
                 FA={FinancialAid.FinancialAid}
                 EC={JSON.stringify(FinancialAid.EligibilityCriteria)}
                 district={FinancialAid.district}
                 />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Fa;

// function Fa() {
//   return (
//     <>
//       <h2 className="text-center py-3"><span className="sp"> Universities Offering Financial Aid</span></h2>
//       <div className="container">
//       <div className="row pr-3">
//         <div className=" col-5">
//           <div className="d-inline p-2 m-3 col-4  ">
//             <label for="exampleFormControlInput1">District</label>

//             <select class="form-select" aria-label="Default select example">
//               <option selected>District</option>
//               <option value="1">Lahore</option>
//               <option value="2">Karachi</option>
//               <option value="3">Peshawar</option>
//               <option value="4">Islamabad</option>
//             </select>
//           </div>
//         </div>
//         <div className="col-5">
//         <div className="d-inline p-2 m-3  col-4 ">
//           <label for="exampleFormControlInput1">Universities</label>

//           <select class="form-select" aria-label="Default select example">
//             <option selected>University</option>
//             <option value="1">PUCIT</option>
//             <option value="2">LUMS</option>
//             <option value="3">FAST-LAHORE</option>
//             <option value="4">ITU</option>
//             <option value="5">BAHRIA UNIVERSITY</option>
//           </select>
//         </div>

//       </div>
//       <div className="col-2 py-4">
//       <button type="button " class="btn btn-warning">Search</button>
//       </div>
//       </div>
//       </div>
//     </>
//   );
// }

// export default Fa;
