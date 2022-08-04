import React from "react";
import giki from "./giki.jpg";
import iqra from "./iqra.jpg";
import lums from "./lums.jpg";
import ucp from "./ucp.jpg";
import fast from "./fast.jpg";
import nust from "./nust.jpg";
import "./card.css";
export default function Card() {
  return (
    <>
    <div>  
            <h2 className="divider donotcross "><span class="sp"></span></h2>
    </div>
    <div className=" mlol container offset-1">
    <a href="" className="link">
    <h2><span class="sp py-1">Famous Institutes</span></h2></a>
     
      <div className="row mr-2 py-3 ">
        <div className="col-12 col-sm-12  col-md-5 col-xl-4 col-lg-4 ">
        
          <div className="class" style={{ width: "18rem" }}>
            <img src={giki} className="class-img w-100 " alt="..." />
            <div className="class-body">
              <h5 className="class-title">GIKI</h5>
              <p className="class-text">
              Ghulam Ishaq Khan Institue(GIKI) is known the world over for setting a standard of excellence in the field of engineering. 
              </p>
              <a href="https://giki.edu.pk/" className="btn btn-danger">
                Click for more details
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12  col-md-5 col-xl-4 col-lg-4 ">
          <div className="class" style={{ width: "18rem" }}>
            <img src={lums} className="class-img w-100" alt="..." />
            <div className="class-body">
              <h5 className="class-title">LUMS</h5>
              <p className="class-text">
              LUMS is Pakistan's leading research intensive university, excelling in teaching and aiming to become no 1 in pakistan.
              </p>
              <a href="https://lums.edu.pk/" target="_blank" className="btn btn-warning">
               Click for more details
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12  col-md-5 col-xl-4 col-lg-4 ">
          <div className="class" style={{ width: "18rem" }}>
            <img src={iqra} className="class-img w-100" alt="..." />
            <div className="class-body">
              <h5 className="class-title">IQRA</h5>
              <p className="class-text">
              Iqra University , (Urdu: دانش گاہِ اقراَ) is a Private University primarily located in the Defence Area of Karachi and is known widely.
              </p>
              <a href="https://iqra.edu.pk/" target="_blank" className="btn btn-info">
                Click for more details
              </a>
            </div>
          </div>
        </div>
        <div/>

        <div className="row  py-4 justify-content-center">

        <div className="col-12 col-sm-12  col-md-5 col-xl-4 col-lg-4 ">
                  <div className="class" style={{ width: "18rem" }}>
                    <img src={ucp} className="class-img w-100" alt="..." />
                    <div className="class-body">
                      <h5 className="class-title">UCP</h5>
                      <p className="class-text">
                      UCP has been ranked as a W4 university by HEC and its faculties are top ranked among the nationwide institutes.
                      </p>
                      <a href="#" className="btn btn-success">
                       Click for more details
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12  col-md-5 col-xl-4 col-lg-4 ">
                  <div className="class" style={{ width: "18rem" }}>
                    <img src={nust} className="class-img w-100" alt="..." />
                    <div className="class-body">
                      <h5 className="class-title">NUST H12</h5>
                      <p className="class-text">
                      NUST maintains the singular honor of being No. 1 University in Pakistan in both world and regional rankings so far.
                      </p>
                      <a href="#" className="btn btn-dark">
                        Click for more details
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12  col-md-5 col-xl-4 col-lg-4 ">
                  <div className="class" style={{ width: "18rem" }}>
                    <img src={fast} className="class-img w-100" alt="..." />
                    <div className="class-body">
                      <h5 className="class-title">FAST-LAHORE</h5>
                      <p className="class-text">
                      Located in the heart of Lahore, the campus is committed to impart quality education and contribute significantly in the nation-building.
                      </p>
                      <a href="#" className="btn btn-primary">
                       Click for more details
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
