import React, { useState, useEffect } from "react";
import "./WelcomePage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { WelcomeHeader } from "./WelcomeHeader";
import auth from "../protected_routes/auth";
import Typed from "typed.js";

export const WelcomePage = (props) => {

  useEffect(() => {
    // Update the document title using the browser API
    // var typed = new Typed('#main-text', {
    //   strings: ["SZABIST ISLAMABAD CAMPUS", "ZAB PORTAL"],
    //   typeSpeed: 100,
    //   backSpeed: 100,
    //   cursorChar: '_',
    //   backDelay: 300,
    //   startDelay: 500,
    //   loop: true,
    // });
  });

  return (
    <>
      <WelcomeHeader />
      <div className="w3-top">
        <div className="w3-bar" id="myNavbar">
          <a
            className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
            href="javascript:void(0);"
            onclick="toggleFunction()"
            title="Toggle Navigation Menu"
          >
            <i className="fa fa-bars"></i>
          </a>
          <a
            href="javascript:void(0);"
            className="w3-bar-item w3-button"
            style={{ textDecoration: "none" }}
          >
            HOME
          </a>
          <a
            href="javascript:void(0);"
            className="w3-bar-item w3-button w3-hide-small"
            style={{ textDecoration: "none" }}
          >
            <i className="fa fa-user"></i> ABOUT
          </a>
          <a
            href="javascript:void(0);"
            className="w3-bar-item w3-button w3-hide-small"
            style={{ textDecoration: "none" }}
          >
            <i className="fa fa-th"></i> RANK
          </a>
          <a
            href="/auth/login"
            className="w3-bar-item w3-button w3-hide-small w3-right background-hov"
          >
            <button className="btn btn-success hov-blur-btn">
              LOGIN &nbsp; <i className="fa fa-user"></i>
            </button>
          </a>
        </div>

        <div
          id="navDemo"
          className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium"
        >
          <a
            href="javascript:void(0);"
            className="w3-bar-item w3-button"
            onclick="toggleFunction()"
            style={{ textDecoration: "none" }}
          >
            ABOUT
          </a>
          <a
            href="javascript:void(0);"
            className="w3-bar-item w3-button"
            onclick="toggleFunction()"
            style={{ textDecoration: "none" }}
          >
            RANK
          </a>
          <a href="/auth/login" className="w3-bar-item w3-button">
            LOGIN
          </a>
        </div>
      </div>

      <div
        className="bgimg-1 w3-display-container w3-opacity-min"
        id="home"
        style={{ backgroundImage: 'url('+window.location.origin + "/images/szabist.jpg)" }}
      >
        <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
          <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity main-text" id='main-text'>
            SZABIST ISLAMABAD CAMPUS
          </span>
        </div>
      </div>
      <div className="w3-content w3-container w3-padding-64" id="about">
        <h3 className="w3-center">ABOUT ME</h3>
        <p className="text-justify">
          The Shaheed Zulfikar Ali Bhutto Institute of Science and Technology
          (SZABIST) is a fully Chartered Institute established through a
          Legislative Act of the Pakistan Assembly (Sindh Act No. XI of 1995)
          and is approved and recognized by the Higher Education Commission
          (HEC), Pakistan, as a degree granting institution.
        </p>
        <div className="w3-row">
          <div
            className="w3-col m6 w3-center w3-padding-large"
            style={{ paddingLeft: "0px !important" }}
          >
            <img
              src={window.location.origin + "/images/szabist-edit.jpg"}
              className="w3-round w3-image w3-opacity w3-hover-opacity-off c-hover-cursor"
              alt="Photo of Me"
              width="500"
              height="333"
            />
          </div>

          <div className="w3-col m6 w3-hide-small w3-padding-large">
            <p className="text-justify">
              SZABIST has campuses in Karachi, Islamabad, Larkana, Dubai (UAE)
              and Hyderabad. SZABIST is a registered member of the International
              Association of Universities (IAU), Paris; Association of
              Commonwealth Universities (ACU), London; Federation of the
              Universities of Islamic World (FUIW), Rabat; Asia University
              Federation (AUF), Seoul; and the Association of SAARC
              Universities, (ASU).
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row w3-center w3-dark-grey w3-padding-16">
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">BS</span>
          <br />
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">Master</span>
          <br />
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">M.Phil</span>
          <br />
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">P.hD</span>
          <br />
        </div>
      </div>

      <div className="w3-content w3-container w3-padding-64" id="rank">
        <h3 className="w3-center">RANK</h3>
        <p className="text-justify">
          Shaheed Zulfikar Ali Bhutto Institute of Science and Technology
          (SZABIST) is a highly ranked and fully chartered institute of Pakistan
          established through a Legislative Act of Sindh Assembly (Sindh Act No.
          XI of 1995). It is approved and recognized by the Higher Education
          Commission (HEC), Pakistan, as a degree-awarding institution. All the
          programs offered at SZABIST are consistent with the guidelines set by
          HEC and other regulatory bodies, for example, National Business
          Education Accreditation Council (NBEAC), and the National Computing
          Education Accreditation Council (NCEAC).
        </p>
        <div className="row">
          <img
            src={window.location.origin + "/images/szabist-edit.jpg"}
            className="col-6 w3-opacity w3-hover-opacity-off c-hover-cursor"
            alt="Szabist Islambad"
            width="500"
            height="333"
          />
          <img
            src={window.location.origin + "/images/szabist-edit.jpg"}
            className="col-6 w3-opacity w3-hover-opacity-off c-hover-cursor"
            alt="Szabist Islambad"
            width="500"
            height="333"
          />
        </div>
      </div>

      <div
        id="modal01"
        className="w3-modal w3-black"
        onclick="this.style.display='none'"
      >
        <span
          className="w3-button w3-large w3-black w3-display-topright"
          title="Close Modal Image"
        >
          <i className="fa fa-remove"></i>
        </span>
        <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
          {/*<img id="img01" className="w3-image" />*/}
          <p id="caption" className="w3-opacity w3-large"></p>
        </div>
      </div>

      <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
        <a
          href="javascript:void(0);"
          className="w3-button w3-light-grey"
          style={{ textDecoration: "none" }}
        >
          <i className="fa fa-arrow-up w3-margin-right"></i>To the top
        </a>
        <div className="w3-xlarge w3-section">
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity"></i>
          <i className="fa fa-twitter w3-hover-opacity"></i>
          <i className="fa fa-linkedin w3-hover-opacity"></i>
        </div>
        <p>
          Copyrights @{" "}
          <a
            href="https://szabist-isb.edu.pk/"
            title="W3.CSS"
            target="_blank"
            className="w3-hover-text-green"
          >
            SZABIST Islamabad
          </a>
        </p>
      </footer>
    </>
  );
};
