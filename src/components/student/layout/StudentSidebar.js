import React from "react";

export const StudentSidebar = () => {
  return (
      <div class="sidebar-menu" style={{ height: "100vh" }}>
        <div class="sidebar-menu-inner">
          <header class="logo-env">
            <div class="logo">
              <a href="/student/home">
                <img
                    src="/custom_assets/main_assets/zab_fypportal.png"
                    width="120"
                    alt=""
                />
              </a>
            </div>

            <div class="sidebar-collapse">
              <a href="javascript:void(0);" class="sidebar-collapse-icon with-animation">
                <i class="entypo-menu"></i>
              </a>
            </div>

            <div class="sidebar-mobile-menu visible-xs">
              <a href="javascript:void(0);" class="with-animation">
                <i class="entypo-menu"></i>
              </a>
            </div>
          </header>

          <ul id="main-menu" class="main-menu">
            <li class="active opened active">
              <a href="/student/home">
                <i className="entypo-gauge"></i>
                <span class="title">Student Home</span>
              </a>
            </li>

            <li class="has-sub">
              <a href="javascript:void(0);">
                <i className="entypo-doc-text"></i>
                <span class="title">Fyp Project</span>
              </a>
              <ul>
                <li>
                  <a href="/student/project">
                    <i class="entypo-doc-text"></i>
                    <span class="title">My Project</span>
                  </a>
                </li>
                <li>
                  <a href="/student/proposal">
                    <i class="entypo-docs"></i>
                    <span class="title">My Proposal</span>
                  </a>
                </li>
              </ul>
            </li>

            <li class="has-sub">
              <a href="javascript:void(0);">
                <i className="entypo-book-open"></i>
                <span class="title">Supervisors</span>
              </a>
              <ul>
                <li>
                  <a href="/student/request-supervisor">
                    <i class="fa fa-send-o"></i>
                    <span class="title">Request for Supervision</span>
                  </a>
                </li>
              </ul>
            </li>

            <li class="has-sub">
              <a href="javascript:void(0);" target="_blank">
                <i className="entypo-megaphone"></i>
                <span class="title">Meetings</span>
                <span class="badge badge-secondary">3</span>
              </a>
              <ul>
                <li>
                  <a href="/student/supervisor-comments">
                    <i class="fa fa-comments-o"></i>
                    <span class="title">Supervisor Comments</span>
                    <span class="badge badge-secondary">3</span>
                  </a>
                </li>
                <li>
                  <a href="/student/student-attendance">
                    <i class="fa fa-check-square"></i>
                    <span class="title">Attendance</span>
                  </a>
                </li>
              </ul>
            </li>

            <li class="has-sub">
              <a href="javascript:void(0);">
                <i className="entypo-suitcase"></i>
                <span class="title">Results</span>
              </a>
              <ul>
                <li>
                  <a href="/student/student-result">
                    <i class="entypo-graduation-cap"></i>
                    <span class="title">Result</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
  );
};
