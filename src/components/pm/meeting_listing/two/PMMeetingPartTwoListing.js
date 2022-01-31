import React, {useEffect, useState} from "react";
import api from "../../../../routes/api";
import toastr from "toastr";
import {Link} from "react-router-dom";

export const PMMeetingPartTwoListing = () => {
    const [comments, setComments] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        api.index('/pms-part-two-attendances-and-comments')
            .then(response => {
                console.log('response meeting comments: ', response)
                setComments(response.data.data);
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
                window.location = "/student/comments";
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
                window.location = "/student/comments";
            }
        }
        toastr.error('Failed to add new fyp', 'Failure Message', opts);
    }

    return (<>
        <ol className="breadcrumb bc-3">
            <li><a href="/student"><i className="fa fa-home"></i>Home</a></li>
            <li><a href="javascript:void(0);">PM</a></li>
            <li className="active"><strong>Attendance & Comments</strong></li>
        </ol>

        <h2>Fyp Part-II <small>[ Meetings Attendance & Comments ]</small></h2>

        <br/>
        <>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered table-hover responsive">
                        <thead>
                        <tr>
                            <th width="15%">Group Members</th>
                            <th width="15%">Group Name.</th>
                            <th>Fyp Name</th>
                            <th>Fyp Type</th>
                            <th>Total Marked Attendance</th>
                            <th>Supervisor Comment</th>
                        </tr>
                        </thead>
                        <tbody>
                        { loader
                            && comments
                            && comments.map(item =>
                                <tr>
                                    <td>
                                            <span className="">
                                                { item.Students && item.Students.map(student =>
                                                    <>
                                                        <p>{ student.name } ({student.User.reg_id})</p>
                                                    </>
                                                )}
                                            </span>
                                    </td>
                                    <td><span className="">{ item.name}</span></td>
                                    <td><span className="">{ item.Fyp.name}</span></td>
                                    <td><span className="">{ item.Fyp.type}</span></td>
                                    <td><span className="">{ (item.Fyp.Attendances).length} attendance marked</span></td>
                                    <td>
                                        <Link
                                            to={{
                                                pathname: "/pm/meetings-attendance-two",
                                                state: item // your data array of objects
                                            }}
                                        >
                                            <button className={'btn btn-success'}>View Attendance</button>
                                        </Link>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    </>);
};
