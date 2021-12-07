import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import api from '../../../routes/api'
export const AdminFypListContent = () => {
  const [fypData, setFypData] = useState({
    id: '',
    name: '',
    type: '',
    desc: '',
    createdAt: '',
    department_id: '',
  })
  const [dataSet, setDataSet] = useState(false)
  useEffect(() => {
    api.admin_fyp_index()
        .then(response => {
          console.log('data:::::::::::::::::::::::::::::: ', response)
          setFypData(response.data.data);
          setDataSet(true)
        })
        .catch(err => {
          setDataSet(false)
          console.log("Error while fetching fyps")
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
          <a href="/admin">
            <i class="fa fa-home"></i>Dashboard
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="javascript:void(0);">FYP List</a>{" "}
        </li>
        <li class="active">
          {" "}
          <strong>FYP's List</strong>{" "}
        </li>
      </ol>

      <h2>List of all FYP's </h2>

      <br />

      <div class="row">
        <div class="col-md-12">
          <table class="table table-bordered table-hover responsive">
            <thead>
              <tr>
                <th>FYP Title</th>
                <th width="20%">FYP Description</th>
                <th>FYP Type</th>
                <th width="16%">FYP Status</th>
                <th>Fyp Added On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {/*{console.log('fyp obj data ', fypData)}*/}
            {dataSet && fypData.map(data => (
                <tr>
                  <td>
                    <span className="custom_colored_text_normal">{data.name && data.name}</span>
                  </td>
                  <td className="custom_display_dots">
                    {data.desc}
                  </td>
                  <td>{data.type}</td>
                  <td>{data.status == '0' ? 'Inactive' : 'Active'}</td>
                  <td>{formatter.format(Date.parse(data.createdAt))}</td>
                  <td>
                    <Link
                        to={'/admin/fyp-list/view-details'}
                        className="btn btn-success btn-sm btn-icon icon-left">
                      <i className="entypo-eye"></i>
                      View Details
                    </Link>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
