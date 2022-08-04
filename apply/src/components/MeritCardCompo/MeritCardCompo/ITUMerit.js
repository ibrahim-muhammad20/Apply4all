import React from "react";

export default function ITUMerit(e) {
  function calculate_aggregate() {
    var FSC_obtained = document.getElementById("fscobtained");
    var FSC_total = document.getElementById("fsctotal");
    var MATRIC_total = document.getElementById("matrictotal");
    var MATRIC_obtained = document.getElementById("matricobtained");
    var TEST_obtained = document.getElementById("testobtained");
    var TEST_total = document.getElementById("testtotal");
    var INTERVIEW_total = document.getElementById("interviewtotal");
    var INTERVIEW_obtained = document.getElementById("interviewobtained");
    var aggregate =
      20 * (MATRIC_obtained / MATRIC_total) +
      20 * (FSC_total / FSC_obtained) +
      40 * (TEST_obtained / TEST_total) +
      10 * (INTERVIEW_obtained / INTERVIEW_total);
      e.preventDefault();
  }
  return (
    <div style={{ padding: "10px" }}>
      <div className="boxshadow p-sm-5 p-4 backcolor">
        <h3
          className=" text-center"
          style={{ backgroundColor: "#ffc107", color: "white" }}
        >
          {" "}
          Institute of Space Technology{" "}
        </h3>{" "}
        <br />
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <p className="text-justify">
              Calculate your aggregate and merit for admission in Information
              Technology University. The Information Technology University is a
              public university located in Lahore, Pakistan focused on the study
              of Computer Science and Software Engineering. Here you can
              calculate your aggregate. Everything is taken care of already,
              just enter your marks and calculate your merit marks.
            </p>
          </div>
          <div className="col-lg-3 col-md-3">
            <table className="table table-hover table-sm">
              <thead className="thead-inverse">
                <tr>
                  <th colspan="3" className="text-center">
                    {" "}
                    Criteria{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="4" style={{ borderRight: "1px solid #dee2e6;" }}>
                    {" "}
                    FSC{" "}
                  </td>
                  <td> ITU/SAT Test</td>
                  <td> 40% </td>
                </tr>
                <tr>
                  <td> FSC-Marks </td>
                  <td> 20% </td>
                </tr>
                <tr>
                  <td> Matric </td>
                  <td> 20% </td>
                </tr>

                <tr>
                  <td> Interview </td>
                  <td> 20% </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-5 formcolor">
          <div className="form-group text-center row">
            <div className="col-sm-12 col-md-12 text-center align-self-center">
              <h3 className="tittle text-dark font-weight-bold">
                ITU Aggregate Calculator
              </h3>
              <hr className="style-two" />
            </div>
          </div>
          {/* <!-- for adding the tabed navigation --> */}

          <br />

          {/* <!-- end of the tabed navigaiton --> */}
          <div className="tab-content">
            <div id="fsc" className="container tab-pane active">
              <br />
              <form>
                <div className="form-group row ">
                  <div className="col-sm-12 col-md-2 text-center align-self-center">
                    {" "}
                    <label for="inputdefault">
                      <b>FSC Marks</b>
                    </label>{" "}
                  </div>
                  <div className="col-sm-12 col-md-5  ">
                    {" "}
                    <input
                      className="form-control mb-1"
                      id="fscobtained"
                      placeholder="Obtain marks in FSC "
                      type="number"
                      required
                      min="0"
                    />{" "}
                  </div>
                  <div className="col-sm-12 col-md-5 ">
                    {" "}
                    <input
                      className="form-control mb-1 "
                      id="fsctotal"
                      placeholder="Total marks in FSC "
                      type="number"
                      required
                      min="0"
                    />{" "}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12 col-md-2 text-center align-self-center">
                    {" "}
                    <label for="inputdefault">
                      <b>Matric Marks</b>
                    </label>{" "}
                  </div>
                  <div className="col-sm-12 col-md-5  ">
                    {" "}
                    <input
                      className="form-control mb-1"
                      id="matricobtained"
                      placeholder="Obtain marks in Matric"
                      type="number"
                      required
                      min="0"
                    />{" "}
                  </div>
                  <div className="col-sm-12 col-md-5 ">
                    {" "}
                    <input
                      className="form-control"
                      id="matrictotal"
                      placeholder="Total marks in Matric"
                      type="number"
                      required
                      min="0"
                    />{" "}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12 col-md-2 text-center align-self-center">
                    {" "}
                    <label for="inputdefault">
                      <b>ITU/SAT(I) </b>
                    </label>{" "}
                  </div>
                  <div className="col-sm-12 col-md-5  ">
                    {" "}
                    <input
                      className="form-control mb-1 "
                      id="testobtained"
                      placeholder="Obtain marks in ITU/SAT(I) "
                      type="number"
                      required
                      min="0"
                    />{" "}
                  </div>
                  <div className="col-sm-12 col-md-5 ">
                    {" "}
                    <input
                      className="form-control mb-1 "
                      id="testtotal"
                      placeholder="Total marks in ITU/SAT(I)"
                      type="number"
                      required
                      min="0"
                    />{" "}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12 col-md-2 text-center align-self-center">
                    {" "}
                    <label for="inputdefault">
                      <b>Interview Marks</b>
                    </label>{" "}
                  </div>
                  <div className="col-sm-12 col-md-5  ">
                    {" "}
                    <input
                      className="form-control mb-1"
                      id="interviewobtained"
                      placeholder="Obtain marks in Interview"
                      type="number"
                      required
                      min="0"
                    />{" "}
                  </div>
                  <div className="col-sm-12 col-md-5 ">
                    {" "}
                    <input
                      className="form-control"
                      id="interviewtotal"
                      placeholder="Total Marks in Interview"
                      type="number"
                      required
                      min="0"
                    />{" "}
                  </div>
                </div>
                <div className="form-group text-center row">
                  <div className="col-sm-12 col-md-12 text-center align-self-center">
                    <div id="finalresult"></div>
                  </div>
                </div>
                <div className="form-group text-center row">
                  <div className="col-sm-12 col-md-12 text-center align-self-center">
                    <button
                      type="submit"
                      className="btn btn-outline-info"
                      onclick="itu(event)"
                    >
                      Calculate
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
