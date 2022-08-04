import React from "react";

export default function AirMerit() {
  function calculate_aggregate() {
    var FSC_obtained = document.getElementById("fscobtained");
    var FSC_total = document.getElementById("fsctotal");
    var MATRIC_total = document.getElementById("matrictotal");
    var MATRIC_obtained = document.getElementById("matricobtained");
    var TEST_obtained = document.getElementById("testobtained");
    var TEST_total = document.getElementById("testtotal");
    var aggregate =
      15 * (MATRIC_obtained / MATRIC_total) +
      35 * (FSC_total / FSC_obtained) +
      50 * (TEST_obtained / TEST_total);
  }
  return (
    <div style={{ padding: "10px" }}>
      <div className="boxshadow p-sm-5 p-4 backcolor">
        <h3
          className=" text-center"
          style={{ backgroundColor: "#ffc107", color: "white" }}
        >
          {" "}
          AIR University
        </h3>{" "}
        <br />
        <div className="row">
          <div className="col-lg-10 col-md-10">
            <p className="text-justify">
              Calculate your aggregate and merit for admission in engineering
              programs of AIR university. You just need to enter your marks to
              calculate the aggregate. AIR merit calculator calculates the
              aggregate and show you the aggregate on the page. AIR university
              islamabad. AIR aggregate calculator make it easy to calculate it
              everything is already considered you just need to enter the marks
              to calculate the aggregate.Here you can calculate the aggregate on
              the base of Entry test.{" "}
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
                  <td> Matric </td>
                  <td> 15% </td>
                </tr>
                <tr>
                  <td> FSC </td>
                  <td> 35% </td>
                </tr>
                <tr>
                  <td> Entr Test </td>
                  <td> 50% </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <form className="p-5 formcolor">
          <div className="form-group text-center row">
            <div className="col-sm-12 col-md-12 text-center align-self-center">
              <h3 className="tittle text-dark font-weight-bold">
                AIR Merit Calculator{" "}
              </h3>

              <hr className="style-one" />
            </div>
          </div>
          <div className="form-group row ">
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
                placeholder="Obtain marks in Matric "
                type="number"
                required
                minlength="0"
              />{" "}
            </div>
            <div className="col-sm-12 col-md-5 ">
              {" "}
              <input
                className="form-control mb-1 "
                id="matrictotal"
                placeholder="Total marks in Matric "
                type="number"
                required
                min="0"
              />{" "}
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
                <b>Entry Test </b>
              </label>{" "}
            </div>
            <div className="col-sm-12 col-md-5  ">
              {" "}
              <input
                className="form-control mb-1"
                id="entryobtained"
                placeholder="Obtain marks in Entry Test"
                type="number"
                required
                min="0"
              />{" "}
            </div>
            <div className="col-sm-12 col-md-5 ">
              {" "}
              <input
                className="form-control"
                id="entrytotal"
                placeholder="Total marks in Entry Test"
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
                onclick="qauresult(event)"
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
