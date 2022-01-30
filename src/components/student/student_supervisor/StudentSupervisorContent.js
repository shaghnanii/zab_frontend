import React, {useEffect, useState} from "react";
import api from "../../../routes/api";
import toastr from "toastr";

export const StudentSupervisorContent = () => {
    const [supervisors, setSupervisors] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        api.index('/supervisors')
            .then(response => {
                console.log('response:L ', response)
                setSupervisors(response.data.data);
                setLoader(true)
            })
            .catch(err => {
                console.log('err: ', err)
                setLoader(false)
            })
    }, [])

    const success_message = () => {
        alert('New Fyp added successfully')
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
                window.location = "/admin/fyp-list";
            }
        }
        toastr.success('Successfully added new fyp', 'Success Message', opts);
    }
    const failure_message = () => {
        alert('Failed to add new fyp.')
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
                window.location = "/admin/add-fyp";
            }
        }
        toastr.error('Failed to add new fyp', 'Failure Message', opts);
    }

    return (<>
        <ol className="breadcrumb bc-3">
            <li><a href="/student"><i className="fa fa-home"></i>Home</a></li>
            <li><a href="javascript:void(0);">Supervisors</a></li>
            <li className="active"><strong>Supervision Request</strong></li>
        </ol>

        <h2>List of all available supervisors </h2>

        <br/>

        { loader && supervisors && supervisors.map(item =>
            <>
                <div className="member-entry">
                    <a href="#" className="member-img">
                        <img src="/images/supervisor2.png" className="img-rounded"/>
                        <i className="entypo-forward"></i>
                    </a>
                    <div className="member-details"><h4>
                        <a href="#">{item && item.name}</a></h4>
                        <div className="row">
                            <div className="col-sm-6 col-lg-4">
                                <p style={{'margin-left': '25px'}}>Teacher</p>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <p style={{'margin-left': '25px'}}>Email: {item && item.User && item.User.email}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-lg-4">
                                <p style={{'margin-left': '25px'}}>Address: {item && item.address}</p>
                            </div>
                            <div className="col-sm-4 col-lg-4">
                                <p style={{'margin-left': '25px'}}>Phone No: {item && item.phone_number}</p>
                            </div>
                            {/*<div className="col-sm-4 col-lg-4">*/}
                            {/*    <p style={{'margin-left': '25px'}}>*/}
                            {/*        <button className={'btn btn-success'}>Request for supervisor</button>*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                        </div>

                    </div>
                </div>
            </>
        )}


    </>);
};
