import React from "react";
import { Link } from "react-router-dom";

export const Err_404 = () => {
  return (
    <div>
      <center>
        <div className="alert alert-danger">404! NOT FOUND</div>
        <Link to="/">GOTO HOME PAGE</Link>
      </center>
    </div>
  );
};
