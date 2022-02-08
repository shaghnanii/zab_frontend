import React from "react";
import {SupervisorSidebar} from "../layout/SupervisorSidebar";
import {SupervisorHeader} from "../layout/SupervisorHeader";
import {PannelContent} from "./PannelContent";
import {SupervisorFooter} from "../layout/SupervisorFooter";
import {SupervisorFooterContent} from "../layout/SupervisorFooterContent";

export const PannelMain = () => {
    return (
        <div className="page-body login-page login-form-fall loaded login-form-fall-init">
            <div className="page-container">
                <SupervisorSidebar />
                <div className="main-content">
                    <SupervisorHeader />
                    <hr />

                    <PannelContent />

                    <SupervisorFooter />
                </div>
            </div>

            <SupervisorFooterContent />
        </div>
    );
};
