import React, {useEffect, useState} from "react";
import axios from "axios";
import { Modal, Button, Alert } from 'react-bootstrap';
import toastr from "toastr";
// import 'bootstrap/dist/css/bootstrap.min.css';

import {ACCESS_TOKEN_NAME} from "../_general_components/_api/apiconstants";
import {onHidden} from "web-vitals/dist/modules/lib/onHidden";
import {Redirect} from "react-router-dom";

export const StudentHomeContent = (props) => {
  const [state, setState] = useState({
  })
  const [loadingError, setLoadingError] = useState('')

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleCloseModal = () => setShowLogoutModal(false);
  const handleShowModal = () => setShowLogoutModal(true);

  const handleToastr = () => {
    var opts = {
      "closeButton": true,
      "debug": false,
      "positionClass": "toast-top-right",
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "6000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "swing",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut",
      "onHidden": function () {
        window.location = "/auth/logout";
      }
    }
    toastr.success('Successfully Logged out of the application', 'Success Message', opts);
    // toastr.error('Here is a failure message', 'Failure Message', opts);
    // toastr.warning('Here is a warning message', 'Warning Message', opts);
    // toastr.success('Here is a success message with timeout.', 'Success Timeout Message', opts);
  }
  return (
    <>
      {console.log(props && props)}
      <div align="center">
        {loadingError ?  <div className={'alert alert-danger'}>{loadingError}</div> : ('')}

        <h3>Welcome to </h3>
        <img
          src="/custom_assets/main_assets/zab_fypportal.png"
          alt="ZAB Logo"
          width="40%"
        />
      </div>

      <div class="profile-env">
        <header class="row">
          <div class="col-sm-2">
            {" "}
            <a href="javascript:void(0);" class="profile-picture">
              {" "}
              <img
                src="/custom_assets/assets/images/profile-picture.png"
                class="img-responsive img-circle"
              />{" "}
            </a>{" "}
          </div>
          <div class="col-sm-7">
            <ul class="profile-info-sections">
              <li>
                <div class="profile-name">
                  <strong>
                    <a href="javascript:void(0);">{props.response.name && props.response.name}</a>
                    <a
                      href="javascript:void(0);"
                      class="user-status is-online tooltip-primary"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="Online"
                    ></a>
                  </strong>
                  <span>
                    <a href="javascript:void(0);">Department: {
                      props.response.majors &&
                      props.response.majors }</a>
                  </span>
                </div>
              </li>
              <li>
                <div class="profile-stat">
                  <h3>
                    {
                      props.response.batch &&
                          props.response.batch
                    }
                  </h3>
                  <center>
                    <span>
                      <a href="javascript:void(0);">Batch</a>
                    </span>
                  </center>
                </div>
              </li>
              <li>
                <div class="profile-stat">
                  <h3>
                    {
                      props.response &&
                      props.response.User &&
                      props.response.User.reg_id &&
                      props.response.User.reg_id
                    }
                  </h3>
                  <center>
                    <span>
                      <a href="javascript:void(0);">Reg No.</a>
                    </span>{" "}
                  </center>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-sm-3">
            <div class="profile-buttons">
              {" "}
              <a href="javascript:void(0);" class="btn btn-default">
                {" "}
                <i class="entypo-user"></i>
                Edit Profile
              </a>
            </div>
          </div>
        </header>
        <section class="profile-info-tabs">
          <div class="row">
            <div class="col-sm-offset-2 col-sm-10">
              <ul class="user-details">
                <li>
                  {" "}
                  <a href="javascript:void(0);" className={'flexbox'}>
                    {" "}
                    <i class="entypo-location"></i>
                    Location: &nbsp;
                    <span className={'ml-1'}>
                    {
                      props.response.address &&
                      props.response.address.toUpperCase()
                    }
                  </span>
                  </a>
                </li>
                {/*<li>*/}
                {/*  {" "}*/}
                {/*  <a href="javascript:void(0);">*/}
                {/*    {" "}*/}
                {/*    <i class="entypo-suitcase"></i>*/}
                {/*    Campus: <span>{*/}
                {/*    props.response.StudentEnrolOnCampusDepartment &&*/}
                {/*    props.response.StudentEnrolOnCampusDepartment.CampusDepartment &&*/}
                {/*    props.response.StudentEnrolOnCampusDepartment.CampusDepartment.Campus &&*/}
                {/*      props.response.StudentEnrolOnCampusDepartment.CampusDepartment.Campus.name}</span>{" "}*/}
                {/*  </a>*/}
                {/*</li>*/}
                <li>
                  {" "}
                  <a href="javascript:void(0);">
                    {" "}
                    <i class="entypo-calendar"></i>
                    DOB: <span>{props.response.dob}</span>
                  </a>
                </li>
              </ul>
              <ul class="nav nav-tabs">
                <li class="active" onclick="showt()">
                  <a href="javascript:void(0);">Edit Profile</a>
                </li>
                <li>
                  <a href="/student/project">FYP Details</a>
                </li>
                <li>
                  <a href="javascript:void(0);" onClick={handleToastr}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Modal
          show={showLogoutModal}
          onHide={handleCloseModal}
          backdrop="static"
          keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Logout ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to logout of the application ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary">Confirm</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};
