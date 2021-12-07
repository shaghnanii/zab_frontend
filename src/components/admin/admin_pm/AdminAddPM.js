import React from "react";
import { AdminAddPMContent } from "./AdminAddPMContent";
import { AdminFooter } from "../layout/AdminFooter";
import { AdminFooterContent } from "../layout/AdminFooterContent";
import { AdminHeader } from "../layout/AdminHeader";
import { AdminSidebar } from "../layout/AdminSidebar";

export const AdminAddPM = () => {
  return (
    <div className="page-body login-page login-form-fall loaded login-form-fall-init">
      <div className="page-container">
        <AdminSidebar />
        <div className="main-content">
          <AdminHeader />
          <hr />

          <AdminAddPMContent />

          <AdminFooter />
        </div>
      </div>

      <AdminFooterContent />
    </div>
  );
};
