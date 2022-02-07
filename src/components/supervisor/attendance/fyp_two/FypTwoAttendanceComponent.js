import React, {useEffect, useState} from "react";
import api from "../../../../routes/api";
import toastr from "toastr";
import {Link} from "react-router-dom";

export const FypTwoAttendanceComponent = () => {
    const [comments, setComments] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        api.index('/supervisors-attendance-comments?level=2')
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
                window.location = "/supervisor/home";
            }
        }
        toastr.success('Success', 'Success Message', opts);
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
                window.location = "/supervisor/home";
            }
        }
        toastr.error('Failure', 'Failure Message', opts);
    }

    return (<>
        <ol className="breadcrumb bc-3">
            <li><a href="/supervisor"><i className="fa fa-home"></i>Home</a></li>
            <li><a href="#;">Supervisor</a></li>
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
                            && comments.Supervisor
                            && comments.Supervisor.Groups
                            && comments.Supervisor.Groups.map(item =>
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
                                                pathname: "/supervisor/view-attendance-2",
                                                state: item // your data array of objects
                                            }}
                                        >
                                            <button className={'btn btn-primary'}>View Attendance</button>
                                        </Link>

                                        <Link
                                            to={{
                                                pathname: "/supervisor/mark-attendance",
                                                state: {
                                                    fyp_id: item.Fyp.id,
                                                    level: item.id,
                                                    m_text: 'Fyp Part-I',
                                                    fyp_name: item.Fyp.name,
                                                    group_name: item.name,
                                                    back_url: 'attendance-and-meetings-part-2'
                                                } // your data array of objects
                                            }}
                                            style={{"margin-left": '6px'}}
                                        >
                                            <button className={'btn btn-success'}>Mark Attendance</button>
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
