import React from "react";
import { StudentFooter } from "../layout/StudentFooter";
import { StudentFooterContent } from "../layout/StudentFooterContent";
import { StudentHeader } from "../layout/StudentHeader";
import { StudentSidebar } from "../layout/StudentSidebar";
import { StudentFypContent } from "./StudentFypContent";

export const StudentFyp = () => {
  return (
    <div className="page-body login-page login-form-fall loaded login-form-fall-init">
      <div className="page-container">
        <StudentSidebar />
        <div className="main-content">
          <StudentHeader />
          <hr />

          <StudentFypContent />

          <StudentFooter />
        </div>
      </div>

      <StudentFooterContent />
    </div>
  );
};
