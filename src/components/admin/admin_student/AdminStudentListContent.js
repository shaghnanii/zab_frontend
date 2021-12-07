import React, {useEffect, useState} from "react";
import {ACCESS_TOKEN_NAME} from "../../_general_components/_api/apiconstants";
import axios from "axios";
import {Link} from "react-router-dom";
import api from '../../../routes/api'

export const AdminStudentListContent = () => {
  const [studentData, setStudentData] = useState({
    address: '',
    phone_number: '',
    gender: '',
    id: '',
    name: '',
    email: '',
    majors: '',
    createdAt: '',
    status: '',
    reg_id: ''
  })
  const [dataSet, setDataSet] = useState(false)
  useEffect(() => {
    api.admin_student_index()
        .then(response => {
          setStudentData(response.data.data);
          setDataSet(true)
        })
        .catch(err => {
          console.log("Failed to load students data from db.")
          setDataSet(false)
        })

  }, [])

  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });

  return (
    <>
      <ol class="breadcrumb bc-3">
        <li>
          {" "}
          <a href="/admin/dashboard">
            <i class="fa fa-home"></i>Dashboard
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="javascript:void(0);">Student </a>{" "}
        </li>
        <li class="active">
          {" "}
          <strong>Student List</strong>{" "}
        </li>
      </ol>

      <h2>List of all Student's </h2>

      <br />

      <div class="row">
        <div class="col-md-12">
          <table class="table table-bordered table-hover responsive">
            <thead>
              <tr>
                <th width="5%">Reg No.</th>
                <th>Name</th>
                <th>Email</th>
                <th width="16%">Address</th>
                <th>Contact No.</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {dataSet && studentData && studentData.map(data =>
                <tr>
                  <td>
                    <span className="custom_colored_text_bold">{data.User && data.User.reg_id && data.User.reg_id}</span>
                  </td>
                  <td>{data.name && data.name}</td>
                  <td>{data.User.email && data.User.email}</td>
                  <td>{data.address && data.address}</td>
                  <td>{data.phone_number && data.phone_number}</td>
                  <td>{data.User && (data.gender).toUpperCase()}</td>
                  <td>
                    <Link
                        to={'/admin/student-list/view-details'}
                        className="btn btn-success btn-sm btn-icon icon-left"
                    >
                      {" "}
                      <i className="entypo-eye"></i>
                      View Details
                    </Link>
                  </td>
                </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
