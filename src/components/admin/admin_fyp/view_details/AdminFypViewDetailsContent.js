import React, {useEffect} from "react";
import {Image} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import toastr from "toastr";
import api from "../../../../routes/api";
import {AdminFooterContent} from "../../layout/AdminFooterContent";
import {AdminSidebar} from "../../layout/AdminSidebar";
import {AdminHeader} from "../../layout/AdminHeader";
import {AdminFooter} from "../../layout/AdminFooter";
export const AdminFypViewDetailsContent = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        let payload = {
            fyp_id: props.fyp_id,
        }
        api.store('/delete-fyp', payload)
            .then(response => {
                console.log('response:L ', response)
                success_message();
            })
            .catch(err => {
                console.log('err: ', err)
                failure_message()
            })
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
                window.location = props.back_url;
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
                window.location = props.back_url;
            }
        }
        toastr.error('Failed to delete fyp, please try again.', 'Failure Message', opts);
    }

    return (
        <div>

            <center>
                <Image src={'/images/loading.gif'}/>
                <h4>Processing Request</h4>
                <h4>Please Wait...</h4>
            </center>
        </div>
    );
};
