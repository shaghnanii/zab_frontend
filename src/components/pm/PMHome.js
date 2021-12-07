import React, {useEffect, useState} from "react";
import { PMFooter } from "./layout/PMFooter";
import { PMFooterContent } from "./layout/PMFooterContent";
import { PMHeader } from "./layout/PMHeader";
import { PMSidebar } from "./layout/PMSidebar";
import { PMHomeContent } from "./PMHomeContent";
import {ACCESS_TOKEN_NAME} from "../_general_components/_api/apiconstants";
import axios from "axios";
import api from '../../routes/api'

export const PMHome = () => {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        api.pm_index()
            .then(response => {
                setUserData(response.data.data)
            })
            .catch(err => {
                console.log("Failed while rendering dashbaord items.")
            })
    }, [])
  return (
    <div className="page-body login-page login-form-fall loaded login-form-fall-init">
      <div className="page-container">
        <PMSidebar />
        <div className="main-content">
          <PMHeader />
          <hr />

          <PMHomeContent response={userData} />

          <PMFooter />
        </div>
      </div>

      <PMFooterContent />
    </div>
  );
};
