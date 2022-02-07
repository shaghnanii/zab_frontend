import React, {useEffect} from "react";
import {SupervisorSidebar} from "../layout/SupervisorSidebar";
import {SupervisorHeader} from "../layout/SupervisorHeader";
import {SupervisorFooter} from "../layout/SupervisorFooter";
import {SupervisorFooterContent} from "../layout/SupervisorFooterContent";
import {Image} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import toastr from "toastr";
import api from "../../../routes/api";
export const response = (props) => {
    const {state} = props.location
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (state.res_type === null || state.res_type === undefined){
            alert('Please select the response type in order to accept or reject the proposal.')
            history.push(state.back_url)
        }
        else {
            let payload = {
                fyp_id: state.fyp_id,
                group_id: state.group_id,
                type: state.res_type
            }
            api.store('/supervisors-accept-or-reject-proposal', payload)
                .then(response => {
                    console.log('response:L ', response)
                    success_message();
                })
                .catch(err => {
                    console.log('err: ', err)
                    failure_message()
                })
        }
    }, [])

    const success_message = () => {
        var opts = {
            "closeButton": true,
            "debug": false,
            "positionClass": "toast-top-right",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "6000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "swing",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut",
            "onHidden": function () {
                window.location = state.back_url;
            }
        }
        toastr.success('Successfully processed your request', 'Success Message', opts);
    }
    const failure_message = () => {
        var opts = {
            "closeButton": true,
            "debug": false,
            "positionClass": "toast-top-right",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "6000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "swing",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut",
            "onHidden": function () {
                window.location = state.back_url;
            }
        }
        toastr.error('Failed to accept/reject the proposal, please try again.', 'Failure Message', opts);
    }

    return (
        <div className="page-body login-page login-form-fall loaded login-form-fall-init">
            <div className="page-container">
                <SupervisorSidebar />
                <div className="main-content">
                    <SupervisorHeader />
                    <hr />
                    {console.log("request data: ",  state)}

                    <center>
                        <Image src={'/images/loading.gif'}/>
                        <h4>Processing Request</h4>
                        <h4>Please Wait...</h4>
                    </center>
                    <SupervisorFooter />
                </div>
            </div>

            <SupervisorFooterContent />
        </div>
    );
};
