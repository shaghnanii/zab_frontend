import React from "react";
import {AdminAddFypContent} from "./AdminAddFypContent";
import { AdminFooter } from "../layout/AdminFooter";
import { AdminFooterContent } from "../layout/AdminFooterContent";
import { AdminHeader } from "../layout/AdminHeader";
import { AdminSidebar } from "../layout/AdminSidebar";

export const AdminAddFyp = () => {
  return (
    <div className="page-body login-page login-form-fall loaded login-form-fall-init">
      <div className="page-container">
        <AdminSidebar />
        <div className="main-content">
          <AdminHeader />
          <hr />

          <AdminAddFypContent />

          <AdminFooter />
        </div>
      </div>

      <AdminFooterContent />
    </div>
  );
};
