import React, {useEffect, useState} from "react";
import { StudentFooter } from "./layout/StudentFooter";
import { StudentFooterContent } from "./layout/StudentFooterContent";
import { StudentHeader } from "./layout/StudentHeader";
import { StudentSidebar } from "./layout/StudentSidebar";
import { StudentHomeContent } from "./StudentHomeContent";
import {ACCESS_TOKEN_NAME} from "../_general_components/_api/apiconstants";
import api from '../../routes/api'
import axios from "axios";
// import jQuery from "jquery";
// import toastr from "react-toastr";

export const StudentHome = () => {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        api.student_index()
            .then(response => {
                setUserData(response.data.data)
            })
            .catch(err => {
                console.log("Error while fetching student details.")
            })
    }, [])
  return (
    <div className="page-body login-page login-form-fall loaded login-form-fall-init">
      <div className="page-container">
        <StudentSidebar />
        <div className="main-content">
          <StudentHeader/>
          <hr />

          <StudentHomeContent response={userData} />

          <StudentFooter />
        </div>
      </div>

      <StudentFooterContent />
    </div>
  );
};
