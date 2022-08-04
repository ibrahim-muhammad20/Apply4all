import React from "react";

export default function PUCITMerit(e) {
  function calculate_aggregate() {
    var FSC_obtained = document.getElementById("part1");
    var FSC_total = document.getElementById("part1total");
    var MATRIC_total = document.getElementById("matrictotal");
    var MATRIC_obtained = document.getElementById("matric");
    var TEST_obtained = document.getElementById("test");
    var TEST_total = document.getElementById("testtotal");
    var HAFIZ_kuran = document.getElementById("radio").value;

    var HAFIZ_obtained = HAFIZ_kuran == "no" ? 0 : 50;

    var aggregate =
      (((1 / 4) * MATRIC_obtained + FSC_obtained) /
        ((1 / 4) * MATRIC_total + FSC_total + HAFIZ_obtained)) *
        70 +
      (TEST_obtained / TEST_total) * 30;
    document.write("Your aggregate is" + aggregate + "%");
    e.preventDefault();
  }
  return (
    <div style={{ padding: "10px" }}>
      <div className="boxshadow p-sm-5 p-4 backcolor">
        <h3
          className=" text-center"
          style={{ backgroundColor: "#ffc107", color: "white" }}
        >
          Punjab University College of Information Technology
        </h3>{" "}
        <br />
        <div className="row">
          <div className="col-lg-10 col-md-10">
            <p className="text-justify">
              Calculate your aggregate and merit for admission in PUCIT. You
              just need to enter your marks in the fields below. PUCIT merit
              calculator calculates the aggregate and aslo the criteria of
              calculating the aggregate is given on right side.You need not to
              search for the formula to calculate the aggregate of PUCIT,
              everything is taken care of already, just enter your marks and
              then you can view the aggregate on the page.
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
                  <td> Matric+FSC </td>
                  <td> 70% </td>
                </tr>
                <tr>
                  <td> PUCIT Test </td>
                  <td> 30% </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <form className="p-5 formcolor">
          <div className="form-group text-center row">
            <div className="col-sm-12 col-md-12 text-center align-self-center">
              <h3 className="tittle text-dark font-weight-bold">
                PUCIT Merit Calculator
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
                id="part1"
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
                id="part1total"
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
                id="matric"
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
                <b>Test Marks (PUCIT)</b>
              </label>{" "}
            </div>
            <div className="col-sm-12 col-md-5  ">
              {" "}
              <input
                className="form-control mb-1 "
                id="test"
                placeholder="Obtain marks in PUCIT Test"
                type="number"
                required
                min="0"
              />{" "}
            </div>
            <div className="col-sm-12 col-md-5  ">
              {" "}
              <input
                className="form-control mb-1 "
                id="testotal"
                placeholder="Total marks in PUCIT Test"
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
                <b>Hafiz-e-Quran</b>
              </label>{" "}
            </div>
            <div className="col-sm-12 col-md-6  ">
              <div className="form-check-inline">
                <label className="form-check-label" for="radio1">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    Name="optradio"
                    value="no"
                    checked=""
                  />
                  No
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label" for="radio2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="hafiz"
                    name="optradio"
                    value="yes"
                  />
                  Yes
                </label>
              </div>
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
                onclick={calculate_aggregate}
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
