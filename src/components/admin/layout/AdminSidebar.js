import React from "react";

export const AdminSidebar = () => {
  return (
    <div className="sidebar-menu" style={{ height: "100vh" }}>
      <div className="sidebar-menu-inner">
        <header className="logo-env">
          <div className="logo">
            <a href="/admin/dashboard">
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
            <a href="/admin/dashboard">
              <i className="entypo-gauge"></i>
              <span className="title">Dashboard</span>
            </a>
          </li>
          <li className="has-sub">
            <a href="javascript:void(0);">
              <i className="entypo-doc-text"></i>
              <span className="title">FYP's</span>
            </a>
            <ul>
              <li>
                <a href="/admin/fyp-list">
                  <i className="entypo-doc-text"></i>
                  <span className="title">FYP's List</span>
                </a>
              </li>
              <li>
                <a href="/admin/add-fyp">
                  <i className="entypo-plus"></i>
                  <span className="title">Add FYP</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="has-sub">
            <a href="javascript:void(0);" target="_blank">
              <i className="entypo-graduation-cap"></i>
              <span className="title">Students</span>
            </a>
            <ul>
              <li>
                <a href="/admin/student-list">
                  <i className="entypo-users"></i>
                  <span className="title">Students List</span>
                </a>
              </li>
              <li>
                <a href="/admin/add-student">
                  <i className="entypo-user-add"></i>
                  <span className="title">Add Student</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="has-sub">
            <a href="javascript:void(0);">
              <i className="entypo-compass"></i>
              <span className="title">Supervisors</span>
            </a>
            <ul>
              <li>
                <a href="/admin/supervisor-list">
                  <i className="entypo-users"></i>
                  <span className="title">Supervisors List</span>
                </a>
              </li>
              <li>
                <a href="/admin/add-supervisor">
                  <i className="entypo-user-add"></i>
                  <span className="title">Add Supervisor</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="has-sub">
            <a href="javascript:void(0);">
              <i className="entypo-shareable"></i>
              <span className="title">PM</span>
              <span className="badge badge-secondary">8</span>
            </a>
            <ul>
              <li>
                <a href="/admin/pm-list">
                  <i className="entypo-users"></i>
                  <span className="title">PM List</span>
                </a>
              </li>
              <li>
                <a href="/admin/add-pm">
                  <i className="entypo-user-add"></i>
                  <span className="title">Add PM</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
