import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const TestData = () => {
  const [totalCampuses, setTotalCampuses] = useState({ campuses: [] });

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get(REACT_APP_BACKEND_API_URL  + "/auth/complete-profile")
      .then((response) => {
        console.log(response.data);
        setTotalCampuses(response.data);
      });
  }, []);

  return (
    <div className="container">
      <div className="alert alert-success">API DATA</div>

      <Link to="/auth/login">
        <button className="btn btn-success btn-control">GOTO Login</button>
      </Link>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Campus Name</th>
            <th scope="col">Campus Address</th>
            <th scope="col">Department Name</th>
          </tr>
        </thead>
        <tbody>
          {totalCampuses.campuses.map((campus, index) => (
            <tr>
              <td>{campus.id}</td>
              <td>{campus.name}</td>
              <td>{campus.address}</td>
              <td>
                <table class="table table-bordered">
                  <th colspan="3">Departments</th>
                  {campus.departments.map((department, index) => (
                    <tr>
                      <td>{department.code}</td>
                    </tr>
                  ))}
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
