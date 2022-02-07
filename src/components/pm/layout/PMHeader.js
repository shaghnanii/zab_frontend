import React from "react";
import { Link, Redirect } from "react-router-dom";
export const PMHeader = (props) => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-8 clearfix">
        <ul className="user-info pull-left pull-none-xsm">
          <li className="profile-info dropdown">
            <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">
              <img
                src="/images/image_sample.png"
                alt=""
                className="img-circle"
                width="44"
              />
              <span style={{ fontSize: "17", color: "rgb(33, 33, 168)" }}>
                Profile
              </span>
            </a>

            <ul className="dropdown-menu">
              <li className="caret"></li>
              <li>
                <a href="javascript:void(0);">
                  <i className="entypo-user"></i>
                  Edit Profile
                </a>
              </li>
              <li>
                <Link to={"/auth/logout"}>
                  <i className="entypo-logout"></i>
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="col-md-6 col-sm-4 clearfix hidden-xs">
        <ul className="list-inline links-list pull-right">
          <li className="dropdown language-selector">
            Language: &nbsp;
            <a
              href="javascript:void(0);"
              className="dropdown-toggle"
              data-toggle="dropdown"
              data-close-others="true"
            >
              <img
                src="/custom_assets/assets/images/flags/flag-uk.png"
                width="16"
                height="16"
              />
            </a>
            <ul className="dropdown-menu pull-right">
              <li className="active">
                <a href="javascript:void(0);">
                  <img
                    src="/custom_assets/assets/images/flags/flag-uk.png"
                    width="16"
                    height="16"
                  />
                  <span>English</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="sep"></li>

          <li>PM Panel &nbsp;</li>

          <li className="sep"></li>

          <li style={{ display: "none" }}>
            <a href="javascript:void(0);" data-toggle="chat" data-collapse-sidebar="1">
              <i className="entypo-chat"></i>
              Side Bar
              <span className="badge badge-success chat-notifications-badge is-hidden">
                0
              </span>
            </a>
          </li>

          <li className="sep"></li>

          <li>
            <Link to={"/auth/logout"}>
              Log Out <i className="entypo-logout right"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
