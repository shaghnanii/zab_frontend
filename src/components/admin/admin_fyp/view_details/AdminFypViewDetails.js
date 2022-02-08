import React from "react";
import { AdminFooter } from "../../layout/AdminFooter";
import { AdminFooterContent } from "../../layout/AdminFooterContent";
import { AdminHeader } from "../../layout/AdminHeader";
import { AdminSidebar } from "../../layout/AdminSidebar";
import {AdminFypViewDetailsContent} from "./AdminFypViewDetailsContent";

export const AdminFypViewDetails = (props) => {
    const {state} = props && props.location && props.location
    return (
        <div className="page-body login-page login-form-fall loaded login-form-fall-init">
            <div className="page-container">
                <AdminSidebar />
                <div className="main-content">
                    <AdminHeader />
                    <hr />

                    <AdminFypViewDetailsContent data={state} />

                    <AdminFooter />
                </div>
            </div>

            <AdminFooterContent />
        </div>
    );
};
