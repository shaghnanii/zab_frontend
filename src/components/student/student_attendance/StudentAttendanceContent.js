import React from "react";

export const StudentAttendanceContent = () => {
  return (<>
    <ol className="breadcrumb bc-3">
      <li><a href="/student"><i className="fa fa-home"></i>Home</a></li>
      <li><a href="javascript:void(0);">Meetings</a></li>
      <li className="active"><strong>Students Attendance</strong></li>
    </ol>

    <h2>All the meetings attendance </h2>

    <br/>

    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered table-hover responsive">
          <thead>
          <tr>
            <th width="15%">Reg No.</th>
            <th>Name</th>
            <th>Project Name</th>
            <th width="16%">Project Type</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><span className="custom_colored_text_bold">1712000</span></td>
            <td>
              Saud Khan
              <span className="custom_colored_text_bold">&</span>
              Asif Khan
            </td>
            <td>
            <span className="custom_colored_text_normal">
              Fyp Portal System
            </span>
            </td>
            <td>Web Application</td>
            <td>03001234567</td>
            <td>
              <a href="javascript:void(0);" className="btn btn-success btn-sm btn-icon icon-left"> <i className="entypo-eye"></i>
                View Details
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </>);
};
