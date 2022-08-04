import React from "react";

export default function Carosal() {
  return (
    <div className="container">
     
      <div className="off-set row py-3">
        <div className="col">
          <div
            id="carouselExampleInterval"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="./NUST-Entry-Test.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="./LUMS.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="./Ucp.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
           
          </div>
          <div class="justify-text py-1">
            <a href="" className="link"><h2>Announcements</h2></a>
          </div>
        </div>
      </div>
    </div>
  );
}
