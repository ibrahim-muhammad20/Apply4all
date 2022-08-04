import React from "react";

export default function IBAMerit(e) {
  function calculate_aggregate() {
    var FSC_obtained = document.getElementById("fscobtained");
    var FSC_total = document.getElementById("fsctotal");
    var MATRIC_total = document.getElementById("matrictotal");
    var MATRIC_obtained = document.getElementById("matricobtained");
    var aggregate =
      50 * (MATRIC_obtained / MATRIC_total) + 50 * (FSC_total / FSC_obtained);
      e.preventDefault();
  }
  return (
    <div style={{ padding: "10px" }}>
      <div class="boxshadow p-sm-5 p-4 backcolor">
        <h3
          class=" text-center"
          style={{ backgroundColor: "#ffc107", color: "white" }}
        >
          Institute of Business Administration{" "}
        </h3>{" "}
        <br />
        <div class="row">
          <div class="col-lg-9 col-md-9">
            <p class="text-justify">
              Calculate your aggregate and merit for admission in IBA. The
              Institute of Business Administration is a public university ,
              Punjab, Everything is taken care of already, just enter your marks
              and view the list of engineering disciplines and universities
              where you can get admission. You can also find all the merit
              calculators of all the universities in Pakistan. <br />
              Minimum Eligibility criteria is you are not more than 24 years old
              and you must have second Division in the Intermediate or Equ.
            </p>
          </div>
          <div class="col-lg-3 col-md-3">
            <table class="table table-hover table-sm">
              <thead class="thead-inverse">
                <tr>
                  <th colspan="2" class="text-center">
                    {" "}
                    Criteria{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> Criteria Given Below </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <form class="p-5 formcolor">
          <div class="form-group text-center row">
            <div class="col-sm-12 col-md-12 text-center align-self-center">
              <h3 class="tittle text-dark font-weight-bold">
                IBA Aggregate Calculator
              </h3>

              <hr class="style-one" />
            </div>
          </div>

          <div class="form-group row ">
            <div class="col-sm-12 col-md-2 text-center align-self-center">
              {" "}
              <label for="inputdefault">
                <b>FSC Marks</b>
              </label>{" "}
            </div>
            <div class="col-sm-12 col-md-5  ">
              {" "}
              <input
                class="form-control mb-1"
                id="fscobtained"
                placeholder="Obtain marks in FSC "
                type="number"
                required
                minlength="0"
              />{" "}
            </div>
            <div class="col-sm-12 col-md-5 ">
              {" "}
              <input
                class="form-control mb-1 "
                id="fsctotal"
                placeholder="Total marks in FSC "
                type="number"
                required
                min="0"
              />{" "}
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-12 col-md-2 text-center align-self-center">
              {" "}
              <label for="inputdefault">
                <b>Matric</b>
              </label>{" "}
            </div>
            <div class="col-sm-12 col-md-5  ">
              {" "}
              <input
                class="form-control mb-1 "
                id="matricobtained"
                placeholder="Obtain marks in Matric"
                type="number"
                required
                min="0"
              />{" "}
            </div>
            <div class="col-sm-12 col-md-5  ">
              {" "}
              <input
                class="form-control mb-1 "
                id="matrictotal"
                placeholder="Total Marks in Matric"
                type="number"
                required
                min="0"
              />{" "}
            </div>
          </div>

          <div class="form-group text-center row">
            <div class="col-sm-12 col-md-12 text-center align-self-center">
              <div id="finalresult"></div>
            </div>
          </div>
          <br />
          <div class="form-group text-center row">
            <div class="col-sm-12 col-md-12 text-center align-self-center">
              <button
                type="submit"
                class="btn btn-outline-info"
                onclick="uetresult(event)"
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
