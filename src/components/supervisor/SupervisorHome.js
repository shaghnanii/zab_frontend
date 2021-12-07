import React, {useEffect, useState} from "react";
import { SupervisorFooter } from "./layout/SupervisorFooter";
import { SupervisorFooterContent } from "./layout/SupervisorFooterContent";
import { SupervisorHeader } from "./layout/SupervisorHeader";
import { SupervisorSidebar } from "./layout/SupervisorSidebar";
import { SupervisorHomeContent } from "./SupervisorHomeContent";
import {ACCESS_TOKEN_NAME} from "../_general_components/_api/apiconstants";
import axios from "axios";
import api from '../../routes/api'

export const SupervisorHome = () => {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        api.supervisor_index()
            .then(response => {
                setUserData(response.data.data)
            })
            .catch(err => {
                console.log("Error while rendering the supervisor admin.")
            })
    }, [])

  return (
    <div className="page-body login-page login-form-fall loaded login-form-fall-init">
      <div className="page-container">
        <SupervisorSidebar />
        <div className="main-content">
          <SupervisorHeader />
          <hr />

          <SupervisorHomeContent response={userData} />

          <SupervisorFooter />
        </div>
      </div>

      <SupervisorFooterContent />
    </div>
  );
};
