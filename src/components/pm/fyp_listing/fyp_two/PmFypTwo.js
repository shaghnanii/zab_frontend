import React from "react";
import {PMSidebar} from "../../layout/PMSidebar";
import {PMHeader} from "../../layout/PMHeader";
import {PMFooter} from "../../layout/PMFooter";
import {PMFooterContent} from "../../layout/PMFooterContent";
import {PMFypTwoListing} from "./PMFypTwoListing";

export const PmFypTwo = () => {
    return (
        <div className="page-body login-page login-form-fall loaded login-form-fall-init">
            <div className="page-container">
                <PMSidebar />
                <div className="main-content">
                    <PMHeader />
                    <hr />

                    <PMFypTwoListing />

                    <PMFooter />
                </div>
            </div>

            <PMFooterContent />
        </div>
    );
};
