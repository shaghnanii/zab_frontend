import React, {useEffect, useState} from "react";
import api from "../../../routes/api";
import toastr from "toastr";
import {Link} from "react-router-dom";

export const AssessmentTwoComponent = () => {
    const [assessments, setAssessments] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        api.index('/assessments')
            .then(response => {
                console.log('response assessments: ', response)
                setAssessments(response.data.data);
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
                window.location = "/student/dashboard";
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
                window.location = "/student/dashboard";
            }
        }
        toastr.error('Failed to add new fyp', 'Failure Message', opts);
    }

    return (<>
        <ol className="breadcrumb bc-3">
            <li><a href="/student/home"><i className="fa fa-home"></i>Home</a></li>
            <li><a href="javascript:void(0);">PM</a></li>
            <li className="active"><strong>Assessments</strong></li>
        </ol>

        <h2>Fyp Part-II <small>[ Assessments ]</small></h2>

        <br/>
        <>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered table-hover responsive">
                        <thead>
                        <tr>
                            <th width="15%">Student Email</th>
                            <th width="15%">Reg ID.</th>
                            <th>Student Name</th>
                            <th>Group Name</th>
                            <th>Fyp</th>
                            <th>Supervisor Comment</th>
                        </tr>
                        </thead>
                        <tbody>
                        { loader
                            && assessments
                            && assessments.map(item =>
                                <>
                                    {item && item.Student && item.Student.Group && item.Student.Group.level === "2" ?
                                        <>
                                            <tr>
                                                <td><span className="">{ item.email && item.email}</span></td>
                                                <td><span className="">{ item && item.reg_id}</span></td>
                                                <td><span className="">{ item.Student && item.Student.name}</span></td>
                                                <td><span className="">{ item.Student && item.Student.Group && item.Student.Group.name}</span></td>
                                                <td><span className="">
                                                    { item.Student
                                                    && item.Student.Group
                                                    && item.Student.Group.level === "1" ? 'Fyp-I' : 'Fyp-II'}</span></td>

                                                <td>
                                                    <Link
                                                        to={{
                                                            pathname: "/pm/pm-assessments-results",
                                                            state: {
                                                                data: item,
                                                                level: item.Student.Group.level
                                                            } // your data array of objects
                                                        }}
                                                    >
                                                        <button className={'btn btn-success'}>View Assessments</button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </>
                                        :
                                        ""

                                    }
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    </>);
};
