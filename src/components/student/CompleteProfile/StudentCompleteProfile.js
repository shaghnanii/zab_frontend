import React from "react";
import {StudentCompleteProfileContent} from "./StudentCompleteProfileContent";

export const StudentCompleteProfile = () => {
    return (
        <div className="page-body login-page login-form-fall loaded login-form-fall-init">
            <div className="page-container">
                <div className="main-content">
                    <hr />
                    <StudentCompleteProfileContent />

                </div>
            </div>
        </div>
    );
}