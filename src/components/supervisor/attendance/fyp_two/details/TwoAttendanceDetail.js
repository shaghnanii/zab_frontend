import React from "react";
import {SupervisorSidebar} from "../../../layout/SupervisorSidebar";
import {SupervisorHeader} from "../../../layout/SupervisorHeader";
import {SupervisorFooter} from "../../../layout/SupervisorFooter";
import {SupervisorFooterContent} from "../../../layout/SupervisorFooterContent";
import {TwoAttendanceDetailComponent} from "./TwoAttendanceDetailComponent";

export const TwoAttendanceDetail = (props) => {
    const { state } = props.location
    return (
        <div className="page-body login-page login-form-fall loaded login-form-fall-init">
            <div className="page-container">
                <SupervisorSidebar />
                <div className="main-content">
                    <SupervisorHeader />
                    <hr />

                    <TwoAttendanceDetailComponent data={state} />

                    <SupervisorFooter />
                </div>
            </div>

            <SupervisorFooterContent />
        </div>
    );
};
