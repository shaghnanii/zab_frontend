import React, {useState} from "react";
import toastr from "toastr";

export const PMHomeContent = (props) => {
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
      <div align="center">
        <h3>Welcome to</h3>
        <img
          src="/custom_assets/main_assets/zab_fypportal.png"
          alt="ZAB Logo"
          width="40%"
        />
      </div>

      <div className="profile-env">
        <header className="row">
          <div className="col-sm-2">
            <a href="javascript:void(0);" className="profile-picture">
              <img
                src="/images/image_sample.png"
                className="img-responsive img-circle"
                style={{ width: "120", height: "120" }}
              />
            </a>
          </div>
          <div className="col-sm-7">
            <ul className="profile-info-sections">
              <li>
                <div className="profile-name">
                  <strong>
                    <a href="javascript:void(0);">{props.response.name && props.response.name}</a>
                    <a
                      href="javascript:void(0);"
                      className="user-status is-online tooltip-primary"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="Online"
                    ></a>
                  </strong>
                  <span>
                    <a href="javascript:void(0);">Program Manager: {props.response.majors && (props.response.majors).toUpperCase()}</a>
                  </span>
                </div>
              </li>
              <li>
                <div className="profile-stat">
                  <center>
                    <h3>{props.response.majors
                    && (props.response.majors).toUpperCase()
                    }</h3>
                  </center>
                  <center>
                    <span>
                      <a href="javascript:void(0);">Program Manager</a>
                    </span>
                  </center>
                </div>
              </li>
              <li>
                <div className="profile-stat">
                  <h3>{props.response.User && props.response.User.reg_id && props.response.User.reg_id}</h3>
                  <center>
                    <span>
                      <a href="javascript:void(0);">Registration #</a>
                    </span>{" "}
                  </center>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <div className="profile-buttons">
              {" "}
              <a href="javascript:void(0);" className="btn btn-default">
                {" "}
                <i className="entypo-user"></i>
                Edit Profile
              </a>
            </div>
          </div>
        </header>
        <section className="profile-info-tabs">
          <div className="row">
            <div className="col-sm-offset-2 col-sm-10">
              <ul className="user-details">
                <li>
                  {" "}
                  <a href="javascript:void(0);">
                    {" "}
                    <i className="entypo-location"></i>
                    Address: <span>{props.response.address && (props.response.address).toUpperCase()}</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="javascript:void(0);">
                    {" "}
                    <i className="entypo-calendar"></i>
                    DOB: <span>{props.response.dob && props.response.dob}</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <i className="entypo-mail"></i>
                    Email: <span>{ props.response.User && props.response.User.email && props.response.User.email }</span>
                  </a>
                </li>
              </ul>

              <ul className="nav nav-tabs">
                <li className="">
                  <a href="/pm/fyp-one">FYP's List</a>
                </li>
                <li>
                  <a href="/pm/supervisors-list">Supervisors List</a>
                </li>
                <li>
                  <a href="/auth/logout" onClick={handleToastr}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
