import React, { Component } from "react";
import Programtable from "./Programtable";

export class Programoffered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "District",
      programs: [],
      program: "",
      program2: "",
      clicked:false
    };

    this.handleChangeRanking = this.handleChangeRanking.bind(this);
    this.handleChangeRanking2 = this.handleChangeRanking2.bind(this);
  }
  handleChangeRanking = (event) => {
    this.setState({ program: event.target.value,clicked:true }); //store the selected tag
  };
  handleChangeRanking2 = (event) => {
    this.setState({ program2: event.target.value,clicked:false }); //store the selected tag
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
    const programs = require("./Programdata.json");
    this.setState({ programs: programs });
  }
  render() {
    const uniqueUniversity = this.getUnique(this.state.programs, "tag");
    const uniqueUniversity1 = this.getUnique(this.state.programs, "Uniname");

    const programs = this.state.programs;
    const program = this.state.program;
    const program2 = this.state.program2;
    const filterUnique = uniqueUniversity1.filter(function (result) {
      return result.tag === program;
    });
    const filterDropdown = programs.filter(function (result) {
      return result.Uniname=== program2;
    });

    return (
      <div>
      <h2 className="text-center py-3">
        <span className="sp"> Programs Offered By Universities</span>
      </h2>
      <div className="container">
        <div className="row pr-3">
          <div className=" col-5">
            <div className="d-inline p-2 m-3 col-4  ">
              <label for="exampleFormControlInput1">District</label>
              <select
                class="form-select"
                value={this.state.program}
                onChange={this.handleChangeRanking}
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
                value={this.state.program}
                onChange={this.handleChangeRanking2}
                aria-label="Default select example"
                placeholder="Select District "
              >
                !clicked ? <option value={programs.Uniname}>Select</option>:
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
      {filterDropdown.map((program) => {
        return (
          <div key={program.id}>
            <div className="container table table-bordered table-dark table-hover">
            <Programtable
                    No={program.NO}
                    uniname={program.Uniname}
                    programsoffered={program.programsoffered}
                    district={program.district}
                  />
            </div>
          </div>
        );
      })}
    </div>
    );
  }
}

export default Programoffered;

