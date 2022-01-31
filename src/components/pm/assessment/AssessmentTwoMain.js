import React from "react";
import {PMSidebar} from "../layout/PMSidebar";
import {PMHeader} from "../layout/PMHeader";
import {PMFooter} from "../layout/PMFooter";
import {PMFooterContent} from "../layout/PMFooterContent";
import {AssessmentComponent} from "./AssessmentComponent";
import {AssessmentTwoComponent} from "./AssessmentTwoComponent";

export const AssessmentTwoMain = () => {
    return (
        <div className="page-body login-page login-form-fall loaded login-form-fall-init">
            <div className="page-container">
                <PMSidebar />
                <div className="main-content">
                    <PMHeader />
                    <hr />

                    <AssessmentTwoComponent />

                    <PMFooter />
                </div>
            </div>

            <PMFooterContent />
        </div>
    );
};
