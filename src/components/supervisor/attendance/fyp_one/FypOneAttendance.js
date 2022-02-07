import React from "react";
import {SupervisorSidebar} from "../../layout/SupervisorSidebar";
import {SupervisorHeader} from "../../layout/SupervisorHeader";
import {SupervisorFooter} from "../../layout/SupervisorFooter";
import {SupervisorFooterContent} from "../../layout/SupervisorFooterContent";
import {FypOneAttendanceComponent} from "./FypOneAttendanceComponent";

export const FypOneAttendance = () => {
    return (
        <div className="page-body login-page login-form-fall loaded login-form-fall-init">
            <div className="page-container">
                <SupervisorSidebar />
                <div className="main-content">
                    <SupervisorHeader />
                    <hr />

                    <FypOneAttendanceComponent />

                    <SupervisorFooter />
                </div>
            </div>

            <SupervisorFooterContent />
        </div>
    );
};
