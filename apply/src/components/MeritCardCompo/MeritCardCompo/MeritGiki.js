import React from "react";

export default function MeritGiki() {
  return (
    <div style={{ padding: "10px" }}>
      <div className="boxshadow p-sm-5 p-4 backcolor">
        <h3 className="text-center" style={{ backgroundColor: "#ffc107", color: "white" }}>
          GIKI Merit Calculator
        </h3>
        <br />
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <p className="text-justify">
              Calculate your aggregate and merit for admission in engineering
              programs of GIKI. You just need to enter your marks to calculate
              the aggregate. GIKI merit calculator calculates the aggregate and
              show you the aggregate on the page. Ghulam Ishaq Khan Institute of
              Engineering and Technology aggregate calculator, GIKI aggregate
              calculator, aggregate calculator for GIKI. Here you can also
              calculate the merit calculator of A-Level stude
            </p>
          </div>
          <div className="col-lg-3 col-md-3">
            <table className="table table-hover table-sm">
              <thead className="thead-inverse">
                <tr>
                  <th colspan="3" className="text-center">
                    Criteria
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="3" style={{ borderRight: "1px solid #dee2e6" }}>
                    FSC
                  </td>
                  <td>Entry Test</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>FSC-1</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Matric</td>
                  <td>5%</td>
                </tr>
                <tr>
                  <td rowspan="2" style={{ borderRight: "1px solid #dee2e6" }}>
                    A-Level
                  </td>
                  <td>Test/SAT(II)</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>O-Level</td>
                  <td>15%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-5 formcolor">
          <div className="form-group text-center row">
            <div className="col-sm-12 col-md-12 text-center align-self-center">
              <h3 className="tittle text-dark font-weight-bold">
                GIKI Merit Calculator
              </h3>
              <hr className="style-two" />
            </div>
          </div>
          {/* <!-- for adding the tabed navigation --> */}
          <ul className="nav nav-tabs justify-content-center" role="tablist">
            <li className="nav-item">
              <a className="nav-link active show" data-toggle="tab" href="#fsc">
                FSC Students
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#alevel">
                A-Level Students
              </a>
            </li>
          </ul>
          <br />

          {/* <!-- end of the tabed navigaiton --> */}
          <div className="tab-content">
            <div id="fsc" className="container tab-pane active show">
              <br />
              <form>
                <div className="addform">
                  <div className="form-group row">
                    <div className="col-sm-12 col-md-2 text-center align-self-center">
                      <label for="inputdefault">
                        <b>FSC (I) Marks</b>
                      </label>
                    </div>
                    <div className="col-sm-12 col-md-5">
                      <input
                        className="form-control mb-1"
                        id="part1"
                        placeholder="Obtain marks in FSC Part-1"
                        type="number"
                        required=""
                        min="0"
                      />
                    </div>
                    <div className="col-sm-12 col-md-5">
                      <input
                        className="form-control mb-1"
                        id="part1total"
                        placeholder="Total marks in FSC Part-1"
                        type="number"
                        required=""
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12 col-md-2 text-center align-self-center">
                      <label for="inputdefault">
                        <b> Matric Marks</b>
                      </label>
                    </div>
                    <div className="col-sm-12 col-md-5">
                      <input
                        className="form-control mb-1"
                        id="matric"
                        placeholder="Obtain marks in Matric"
                        type="number"
                        required=""
                        min="0"
                      />
                    </div>
                    <div className="col-sm-12 col-md-5">
                      <input
                        className="form-control"
                        id="matrictotal"
                        placeholder="Total marks in Matric"
                        type="number"
                        required=""
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12 col-md-2 text-center align-self-center">
                      <label for="inputdefault">
                        <b> Entry Test</b>
                      </label>
                    </div>
                    <div className="col-sm-12 col-md-5">
                      <input
                        className="form-control mb-1"
                        id="net"
                        placeholder="Obtain marks in Entry Test"
                        type="number"
                        required=""
                        min="0"
                      />
                    </div>
                    <div className="col-sm-12 col-md-5">
                      <input
                        className="form-control mb-1"
                        id="net2"
                        placeholder="Total marks in Entry Test"
                        type="number"
                        required=""
                        min="0"
                      />
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
                        onclick="gikiresult(event)"
                      >
                        Calculate
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div id="alevel" className="container tab-pane fade">
              <br />
              <div className="addform">
                <form autocomplete="">
                  <div className="form-group row">
                    <div className="col-sm-12 col-md-2 text-center align-self-center">
                      <label for="inputdefault">
                        <b>O-Level Marks</b>
                      </label>
                    </div>
                    <div className="col-sm-12 col-md-5">
                      <input
                        className="form-control mb-1"
                        id="part1a"
                        placeholder="Obtain marks in Matric Eqv/O-Level "
                        type="number"
                        required=""
                        min="0"
                      />
                    </div>
                    <div className="col-sm-12 col-md-5">
                      <input
                        className="form-control mb-1"
                        id="part1totala"
                        placeholder="Total marks in Matric Eqv/O-Level"
                        type="number"
                        required=""
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-12 col-md-2 text-center align-self-center">
                      <label for="inputdefault">
                        <b> Entry Test/SAT(II)</b>
                      </label>
                    </div>
                    <div className="col-sm-12 col-md-5">
                      <input
                        className="form-control mb-1"
                        id="neta"
                        placeholder="Obtain marks in Entry Test/SAT(II)"
                        type="number"
                        required=""
                        min="0"
                      />
                    </div>
                    <div className="col-sm-12 col-md-5">
                      <input
                        className="form-control mb-1"
                        id="neta2"
                        placeholder="Total marks in Entry Test/SAT(II)"
                        type="number"
                        required=""
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="form-group text-center row">
                    <div className="col-sm-12 col-md-12 text-center align-self-center">
                      <div id="nustalevel"></div>
                    </div>
                  </div>
                  <div className="form-group text-center row">
                    <div className="col-sm-12 col-md-12 text-center align-self-center">
                      <button
                        type="submit"
                        className="btn btn-outline-info"
                        onclick="gikialevel(event)"
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
    </div>
  );
}
