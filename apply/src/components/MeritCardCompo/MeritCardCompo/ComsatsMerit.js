import React from "react";

export default function ComsatsMerit() {
  function calculate_aggregate() {
    var FSC_obtained = document.getElementById("fscobtained");
    var FSC_total = document.getElementById("fsctotal");
    var MATRIC_total = document.getElementById("matrictotal");
    var MATRIC_obtained = document.getElementById("matricobtained");
    var TEST_obtained = document.getElementById("testobtained");
    var TEST_total = document.getElementById("testtotal");
    var aggregate =
      10 * (MATRIC_obtained / MATRIC_total) +
      40 * (FSC_total / FSC_obtained) +
      50 * (TEST_obtained / TEST_total);
  }
  return (
    <div style={{ padding: "10px" }}>
      <div className="boxshadow p-sm-5 p-4 backcolor">
        <h4
          className=" text-center"
          style={{ backgroundColor: "#ffc107", color: "white" }}
        >
          COMSATS Merit Calculator
        </h4>{" "}
        <br />
        <div className="row">
          <div className="col-lg-10 col-md-10">
            <p className="text-justify">
              Do you want to know how to find the aggregate percentage for
              COMSATS? Now it is very easy to calculate the merit/aggregate
              calculator for COMSATS and also share this calculator with your
              friends. So, Below you can find the merit calculator or aggregate
              calculator for COMSATS 2022. O-Level/A-Level students can also
              calculate there aggregate.{" "}
            </p>
          </div>
          <div className="col-lg-2 col-md-2">
            <table className="table table-hover table-sm">
              <thead className="thead-inverse">
                <tr>
                  <th colspan="2" className="text-center">
                    {" "}
                    Criteria{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> NTS </td>
                  <td> 50% </td>
                </tr>
                <tr>
                  <td> FSC </td>
                  <td> 40% </td>
                </tr>
                <tr>
                  <td> Matric </td>
                  <td> 10% </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <form className="p-5 formcolor">
          <div className="form-group text-center row">
            <div className="col-sm-12 col-md-12 text-center align-self-center">
              <h3 className="tittle text-dark font-weight-bold">
                COMSATS Merit Calculator
              </h3>

              <hr className="style-one" />
            </div>
          </div>
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
                minlength="0"
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
                <b>NTS Marks </b>
              </label>{" "}
            </div>
            <div className="col-sm-12 col-md-5  ">
              {" "}
              <input
                className="form-control mb-1 "
                id="testobtained"
                placeholder="Obtain marks in NTS"
                type="number"
                required
                min="0"
                maxlength="200"
              />{" "}
            </div>
            <div className="col-sm-12 col-md-5 ">
              {" "}
              <input
                className="form-control"
                id="testtotal"
                placeholder="Total marks in NTS"
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
                onclick="comsatsresult(event)"
              >
                Calculate
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
