import React from "react";
import giki from "./giki.jpg";
import iqra from "./iqra.jpg";
import lums from "./lums.jpg";
import ucp from "./ucp.jpg";
import fast from "./fast.jpg";
import nust from "./nust.jpg";
import "./card1.css";
import { useNavigate } from "react-router-dom";
export default function Card1() {
  let navigate = useNavigate();
  return (
    <>
      <div>
        <h2 className="divider donotcross ">
          <span class="sp"></span>
        </h2>
      </div>
      <div className="container">
        <a className="link">
          <h2>
            <span class="sp py-1">CALCULATE MERIT</span>
          </h2>
        </a>

        <div className="row  py-3 ">
          <div className="col-12 col-sm-12  col-md-5 col-xl-4 col-lg-4 ">
            <div className="class" style={{ width: "18rem" }}>
              <img src={giki} className="class-img w-100 " alt="..." />
              <div className="class-body">
                <h5 className="class-title">PUCIT</h5>
                <p className="class-text">
                  Calculate the aggregate of Punjab College University of
                  Information Technology. You just need to enter your marks.
                </p>
                <a
                  onClick={() => {
                    navigate("pucitMerit");
                  }}
                  className="btn btn-danger"
                >
                  CALCULATE MERIT
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12  col-md-5 col-xl-4 col-lg-4 ">
            <div className="class" style={{ width: "18rem" }}>
              <img src={lums} className="class-img w-100" alt="..." />
              <div className="class-body">
                <h5 className="class-title">AIR</h5>
                <p className="class-text">
                  Calculate your aggregate and merit for admission in
                  engineering programs of AIR university. You just need to enter
                  your marks.
                </p>
                <a
                  onClick={() => {
                    navigate("airMerit");
                  }}
                  className="btn btn-warning"
                >
                  CALCULATE MERIT
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12  col-md-5 col-xl-4 col-lg-4 ">
            <div className="class" style={{ width: "18rem" }}>
              <img src={iqra} className="class-img w-100" alt="..." />
              <div className="class-body">
                <h5 className="class-title">COMSATS</h5>
                <p className="class-text">
                  Do you want to know how to find the aggregate percentage for
                  COMSATS? Now it is very easy to calculate the merit.
                </p>
                <a
                  onClick={() => {
                    navigate("comsatsMerit");
                  }}
                  className="btn btn-info"
                >
                  CALCULATE MERIT
                </a>
              </div>
            </div>
          </div>
          <div />

          <div className="row  py-4 justify-content-center">
            <div className="col-12 col-sm-12  col-md-5 col-xl-4 col-lg-4 ">
              <div className="class" style={{ width: "18rem" }}>
                <img src={ucp} className="class-img w-100" alt="..." />
                <div className="class-body">
                  <h5 className="class-title">ITU</h5>
                  <p className="class-text">
                    Calculate your aggregate and merit for admission in
                    Information Technology University. It's easy to calculate.
                  </p>
                  <a
                    onClick={() => {
                      navigate("ituMerit");
                    }}
                    className="btn btn-success"
                  >
                    CALCULATE MERIT
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12  col-md-5 col-xl-4 col-lg-4 ">
              <div className="class" style={{ width: "18rem" }}>
                <img src={nust} className="class-img w-100" alt="..." />
                <div className="class-body">
                  <h5 className="class-title">IBA</h5>
                  <p className="class-text">
                    Calculate your aggregate and merit for admission in Institue
                    of Business Administration. It's easy to calculate.
                  </p>
                  <a
                    onClick={() => {
                      navigate("ibaMerit");
                    }}
                    className="btn btn-dark"
                  >
                    CALCULATE MERIT
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12  col-md-5 col-xl-4 col-lg-4 ">
              <div className="class" style={{ width: "18rem" }}>
                <img src={fast} className="class-img w-100" alt="..." />
                <div className="class-body"> 
                  <h5 className="class-title">FAST</h5>
                  <p className="class-text">
                    Calculate your aggregate and merit for admission in
                    engineering programs of FAST. You just need to enter your
                    marks.
                  </p>
                  <a
                    onClick={() => {
                      navigate("fastMerit");
                    }}
                    className="btn btn-primary"
                  >
                    CALCULATE MERIT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// onClick={() => {navigate('FastMerit')}}
