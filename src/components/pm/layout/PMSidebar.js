import React from "react";

export const PMSidebar = () => {
  return (
    <div className="sidebar-menu">
      <div className="sidebar-menu-inner">
        <header className="logo-env">
          <div className="logo">
            <a href="/pm/home">
              <img
                src="/custom_assets/main_assets/zab_fypportal.png"
                width="120"
                alt=""
              />
            </a>
          </div>

          <div className="sidebar-collapse">
            <a href="javascript:void(0);" className="sidebar-collapse-icon with-animation">
              <i className="entypo-menu"></i>
            </a>
          </div>

          <div className="sidebar-mobile-menu visible-xs">
            <a href="javascript:void(0);" className="with-animation">
              <i className="entypo-menu"></i>
            </a>
          </div>
        </header>

        <ul id="main-menu" className="main-menu">
          <li className="active opened active">
            <a href="/pm/home">
              <i className="fa fa-home"></i>
              <span className="title">PM Home</span>
            </a>
          </li>

          <li className="has-sub">
            <a href="javascript:void(0);">
              <i className="fa fa-file-pdf-o"></i>
              <span className="title">FYP's</span>
            </a>
            <ul>
              <li>
                <a href="/pm/fyp-one">
                  <i className="entypo-docs"></i>
                  <span className="title">FYP 1</span>
                </a>
              </li>
              <li>
                <a href="/pm/fyp-two">
                  <i className="entypo-docs"></i>
                  <span className="title">FYP 2</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="has-sub">
            <a href="javascript:void(0);">
              <i className="fa fa-file-pdf-o"></i>
              <span className="title">Assesments</span>
            </a>
            <ul>
              <li>
                <a href="/pm/pm-assessments-one">
                  <i className="entypo-docs"></i>
                  <span className="title">FYP 1</span>
                </a>
              </li>
              <li>
                <a href="/pm/pm-assessments-two">
                  <i className="entypo-docs"></i>
                  <span className="title">FYP 2</span>
                </a>
              </li>
              {/*<li>*/}
              {/*  <a href="/pm/pm-assessments-results">*/}
              {/*    <i className="entypo-docs"></i>*/}
              {/*    <span className="title">Assessment Result</span>*/}
              {/*  </a>*/}
              {/*</li>*/}
            </ul>
          </li>

          <li className="has-sub">
            <a href="javascript:void(0);">
              <i className="fa fa-compass"></i>
              <span className="title">Supervisors</span>
            </a>
            <ul>
              <li>
                <a href="/pm/supervisors-list">
                  <i className="fa fa-send-o"></i>
                  <span className="title">Supervisors List</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="has-sub">
            <a href="javascript:void(0);" target="_blank">
              <i className="fa fa-group"></i>
              <span className="title">Attendance & Meetings</span>
              <span className="badge badge-secondary">new</span>
            </a>
            <ul>
              <li>
                <a href="/pm/meetings-and-comments-one">
                  <i className="fa fa-comments-o"></i>
                  <span className="title">Part-I Attendances & comments</span>
                </a>
              </li>
              <li>
                <a href="/pm/meetings-and-comments-two">
                  <i className="fa fa-check-square"></i>
                  <span className="title">Part-II Attendances & comments</span>
                </a>
              </li>

            </ul>
          </li>

          <li className="has-sub">
            <a href="javascript:void(0);">
              <i className="fa fa-file-pdf-o"></i>
              <span className="title">Dispatch Results</span>
            </a>
            <ul>
              <li>
                <a href="/pm/fyp-one">
                  <i className="entypo-docs"></i>
                  <span className="title">FYP 1</span>
                </a>
              </li>
              <li>
                <a href="/pm/fyp-two">
                  <i className="entypo-docs"></i>
                  <span className="title">FYP 2</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
