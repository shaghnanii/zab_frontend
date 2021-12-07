import React from "react";
import { StudentFooter } from "../layout/StudentFooter";
import { StudentFooterContent } from "../layout/StudentFooterContent";
import { StudentHeader } from "../layout/StudentHeader";
import { StudentSidebar } from "../layout/StudentSidebar";
import { StudentResultContent } from "./StudentResultContent";
// import jQuery from "jquery";
// import toastr from "react-toastr";

export const StudentResult = () => {
  return (
    <div className="page-body login-page login-form-fall loaded login-form-fall-init">
      <div className="page-container">
        <StudentSidebar />
        <div className="main-content">
          <StudentHeader />
          <hr />

          <StudentResultContent />

          <StudentFooter />
        </div>
      </div>

      <StudentFooterContent />
    </div>
  );
};
