import React from "react";
import { StudentFooter } from "../layout/StudentFooter";
import { StudentFooterContent } from "../layout/StudentFooterContent";
import { StudentHeader } from "../layout/StudentHeader";
import { StudentSidebar } from "../layout/StudentSidebar";
import { StudentCreateGroupContent } from "./StudentCreateGroupContent";

export const StudentCreateGroup = () => {
    return (
        <div className="page-body login-page login-form-fall loaded login-form-fall-init">
            <div className="page-container">
                <StudentSidebar />
                <div className="main-content">
                    <StudentHeader />
                    <hr />

                    <StudentCreateGroupContent />

                    <StudentFooter />
                </div>
            </div>

            <StudentFooterContent />
        </div>
    );
};
