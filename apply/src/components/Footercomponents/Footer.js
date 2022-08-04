import React from "react";
import facebook from "./facebook.png";
import twitter from "./twitter.webp";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import "./Footer.css";
// import fb from './images/facebook.png'
// import instagram from './images/instagram.png'
// import linkedin from './images/linkedin.png'
// import twitter from './images/twitter.webp'

export default function Footer() {
  return (
    <div>
      <div className="container  py-3">
        <div className="row ">
          <div className="offset-5 col">
      <nav aria-label="Page navigation example text">
        <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="/" aria-label="Previous">
          <i className="bi bi-skip-backward-fill"></i>
            </a>
          </li>
          <li className="page-item">
          <a className="page-link" href="/" aria-label="Previous">
               <i className="bi bi-caret-left-fill"></i>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="/">1</a></li>
          <li className="page-item"><a className="page-link" href="/">2</a></li>
          <li className="page-item"><a className="page-link" href="/">3</a></li>
          <li className="page-item">
            <a className="page-link" href="/" aria-label="Next">
            <i class="bi bi-caret-right-fill"></i>
            </a>
            </li>
          <li className="page-item">
            <a className="page-link" href="/" aria-label="Next">
            <i class="bi bi-skip-forward-fill"></i>
            </a>
          </li>
        </ul>
      </nav>

      </div>
      </div>
      </div>

      <div className="footerDaAbba">
        <footer className="footer">
          <div className="footer-container">
            <div className="row">
              <div className="footer-col">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="www.google.com">About us</a>
                  </li>
                  <li>
                    <a href="www.google.com">Blogs</a>
                  </li>
                  <li>
                    <a href="www.google.com">Announcements</a>
                  </li>
                  <li>
                    <a href="www.google.com">Contact Us</a>
                  </li>
                  <li>
                    <a href="www.google.com">FAQs</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Top Institutes</h4>
                <ul>
                  <li>
                    <a href="www.google.com">Institutes in Lahore</a>
                  </li>
                  <li>
                    <a href="www.google.com">Institutes in Karachi</a>
                  </li>
                  <li>
                    <a href="www.google.com">Institutes in Islamabad</a>
                  </li>
                  <li>
                    <a href="www.google.com">Institutes in Gujrawala</a>
                  </li>
                  <li>
                    <a href="www.google.com">Institutes in Gujrat</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Top States</h4>
                <ul>
                  <li>
                    <a href="www.google.com">Study in Panjab</a>
                  </li>
                  <li>
                    <a href="www.google.com">Study in Sind</a>
                  </li>
                  <li>
                    <a href="www.google.com">Study in NWFP</a>
                  </li>
                  <li>
                    <a href="www.google.com">Study in Balochistan</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                  <a href="www.google.com">
                    <i className="fab fa-facebook-f">
                      <img className="logo" src={facebook} alt="Facebook Logo" />
                    </i>
                  </a>
                  <a href="www.google.com">
                    <i className="fab fa-twitter">
                      <img className="logo" src={twitter} alt="Twitter Logo" />
                    </i>
                  </a>
                  <a href="www.google.com">
                    <i className="fab fa-instagram">
                      <img
                        className="logo"
                        src={instagram}
                        alt="Instagram Logo"
                      />
                    </i>
                  </a>
                  <a href="www.google.com">
                    <i className="fab fa-linkedin-in">
                      <img
                        className="logo"
                        src={linkedin}
                        alt="LinkedIn Logo"
                      />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="row-footer-bottom-sec">
          <p className="font-12 text-white m-0 sm-text-center">
            Copyright ©2022 Apply 4 All Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}
