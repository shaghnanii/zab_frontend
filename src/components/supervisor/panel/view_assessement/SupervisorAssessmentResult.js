import React from "react";
import {AssessmentResultComponent} from "./AssessmentResultComponent";
import {SupervisorSidebar} from "../../layout/SupervisorSidebar";
import {SupervisorHeader} from "../../layout/SupervisorHeader";
import {SupervisorFooter} from "../../layout/SupervisorFooter";
import {SupervisorFooterContent} from "../../layout/SupervisorFooterContent";

export const SupervisorAssessmentResult = (props) => {
    const { state } = props.location
    return (
        <div className="page-body login-page login-form-fall loaded login-form-fall-init">
            <div className="page-container">
                <SupervisorSidebar />
                <div className="main-content">
                    <SupervisorHeader />
                    <hr />

                    <AssessmentResultComponent data={state} />

                    <SupervisorFooter />
                </div>
            </div>

            <SupervisorFooterContent />
        </div>
    );
};
