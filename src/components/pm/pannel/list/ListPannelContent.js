import React, {useEffect, useState} from "react";
import api from "../../../../routes/api";
import toastr from "toastr";
import {Link} from "react-router-dom";

export const ListPannelContent = () => {
    const [comments, setComments] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        api.index('/pm-list-panels')
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
            <li className="active"><strong>Pannel Listing</strong></li>
        </ol>

        <h2>FYP <small>[ Pannel Listing ]</small></h2>

        <br/>
        <>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered table-hover responsive">
                        <thead>
                        <tr>
                            <th width="15%">Pannel Name</th>
                            <th width="15%">Pannel Created By.</th>
                            <th>Pannel Supervisors Name</th>
                            <th>Pannel Groups Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        { loader
                            && comments
                            && comments.map(item =>
                                <tr>
                                    <td><span className="">{ item.name}</span></td>
                                    <td><span className="">{ item.Pm.name}</span></td>
                                    <td>
                                        <span className="">
                                            { item.Supervisors && item.Supervisors.map(item =>
                                                <>
                                                    <p>{item.name}</p>
                                                </>
                                            ) }
                                        </span>
                                    </td>
                                    <td>
                                        <span className="">
                                            { item.Groups && item.Groups.map(item =>
                                                <>
                                                    <p>{item.name}</p>
                                                </>
                                            ) }
                                        </span>
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
