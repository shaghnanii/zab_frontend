import React from "react";

export const SupervisorSidebar = () => {
  return (
    <div className="sidebar-menu">
      <div className="sidebar-menu-inner">
        <header className="logo-env">
          <div className="logo">
            <a href="/supervisor/home">
              <img
                src="/custom_assets/main_assets/zab_fypportal.png"
                width="120"
                alt=""
              />
            </a>
          </div>

          <div className="sidebar-collapse">
            <a href="#" className="sidebar-collapse-icon with-animation">
              <i className="entypo-menu"></i>
            </a>
          </div>

          <div className="sidebar-mobile-menu visible-xs">
            <a href="#" className="with-animation">
              <i className="entypo-menu"></i>
            </a>
          </div>
        </header>

        <ul id="main-menu" className="main-menu">
          <li className="active opened active">
            <a href="/supervisor/home">
              <i className="fa fa-home"></i>
              <span className="title">Supervisor Home</span>
            </a>
          </li>

          <li className="has-sub">
            <a href="/supervisor/accept-or-reject-proposals">
              <i className="fa fa-file-pdf-o"></i>
              <span className="title">Accept/Reject Proposal</span>
            </a>
          </li>

          <li className="has-sub">
            <a href="#">
              <i className="fa fa-file-pdf-o"></i>
              <span className="title">Fyp Projects</span>
            </a>
            <ul>
              <li className="">
                <a href="/supervisor/fyp-list-1">
                  <i className="entypo-docs"></i>
                  <span className="title">FYP 1 - List</span>
                </a>
              </li>
              <li>
                <a href="/supervisor/fyp-list-2">
                  <i className="entypo-docs"></i>
                  <span className="title">FYP 2 - List</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="has-sub">
            <a href="#" target="_blank">
              <i className="fa fa-group"></i>
              <span className="title">Attendance & Meetings</span>
              <span className="badge badge-secondary">3</span>
            </a>
            <ul>
              <li>
                <a href="/supervisor/attendance-and-meetings-part-1">
                  <i className="fa fa-comments-o"></i>
                  <span className="title">Fyp-I Attendance & Meetings</span>
                  <span className="badge badge-secondary">3</span>
                </a>
              </li>
              <li>
                <a href="/supervisor/attendance-and-meetings-part-2">
                  <i className="fa fa-check-square"></i>
                  <span className="title">Fyp-II Attendance & Meetings</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
