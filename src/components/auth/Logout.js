import React, { useState, useEffect } from "react";
import { ACCESS_TOKEN_NAME } from "../_general_components/_api/apiconstants";
import auth from "../protected_routes/auth";
import { Redirect } from "react-router";

export const Logout = (props) => {
  localStorage.clear();
  return (
    <>
      <Redirect to={"/auth/login"}></Redirect>
    </>
  );
};
