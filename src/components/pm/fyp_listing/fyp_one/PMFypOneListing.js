import React, {useEffect, useState} from "react";
import api from "../../../../routes/api";
import toastr from "toastr";

export const PMFypOneListing = () => {
    const [fyps, setFyps] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        api.index('/pm-fyp-one')
            .then(response => {
                console.log('response meeting comments: ', response)
                setFyps(response.data.data);
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
                window.location = "/pm/fyp-one";
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
                window.location = "/pm/fyp-one";
            }
        }
        toastr.error('Failed to add new fyp', 'Failure Message', opts);
    }

    return (<>
        <ol className="breadcrumb bc-3">
            <li><a href="/student"><i className="fa fa-home"></i>Home</a></li>
            <li className="active"><strong>Fyp-I Listing</strong></li>
        </ol>

        <h2>Fyp-I Listing </h2>

        <br/>
        <>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered table-hover responsive">
                        <thead>
                        <tr>
                            <th width="15%">Group Name</th>
                            <th>Fyp Name</th>
                            <th>Fyp Type</th>
                            <th width="16%">Supervisor Name</th>
                            <th>Supervisor Contact No.</th>
                            <th>Group Members</th>
                            <th>Group Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {loader
                            && fyps
                            && fyps.map(item =>
                            <tr>
                            <td><span className="custom_colored_text_bold">{item.name}</span></td>
                            <td>
                        {item.Fyp.name}
                            </td>
                            <td>
                            <span className="custom_colored_text_normal">
                        {item.Fyp.type}
                            </span>
                            </td>
                            <td>{item.Supervisor.name}</td>
                            <td>{item.Supervisor.phone_number}</td>
                            <td>
                                {item && item.Students && item.Students.map(student =>
                                    <>
                                        <p>{student.name} <span style={{'font-weight': 'bold', 'color': 'blue'}}>({ student.User && student.User.reg_id})</span></p>
                                    </>
                                )}
                            </td>
                            <td>
                                {item && item.Students && item.Students.map(student =>
                                    <>
                                        <p>
                                            <span style={{'font-weight': 'bold', 'color': 'blue'}}>
                                                { student.User && student.User.email}
                                            </span>
                                        </p>
                                    </>
                                )}
                            </td>
                            </tr>)
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </>


    </>);
};
