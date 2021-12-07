import React from "react";
import { Link } from "react-router-dom";

export const ForbiddenPage = () => {
  return (
    <div>
      <center>
        <div className="alert alert-danger">The page is forbidden</div>
        <Link to="/">GOTO HOME PAGE</Link>
      </center>
    </div>
  );
};
