import React, {useEffect, useState} from "react";
export const OneAttendanceDetailComponent = (props) => {
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
    let count = 1;
    return (
        <>
            {console.log("attendanceeeeeeeeeeeeeeeeee: ", props)}
            <ol className="breadcrumb bc-3">
                <li><a href="/supervisor"><i className="fa fa-home"></i>Home</a></li>
                <li><a href="#;">Supervisor</a></li>
                <li className="active"><strong>Attendances</strong></li>
            </ol>

            <h2>Fyp Part-I <small>[ Attendances ]</small></h2>

            <br/>
            <>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered table-hover responsive">
                            <thead>
                            <tr>
                                <th width="15%">Sr No.</th>
                                <th width="15%">Attendance Date</th>
                                <th width="15%">Group Name</th>
                                <th>Attendance Status</th>
                                <th>Supervisor Comment</th>
                            </tr>
                            </thead>
                            <tbody>
                            { props
                                && props.data
                                && props.data.Fyp
                                && props.data.Fyp.Attendances.map(item =>
                                    <tr>
                                        <td>{count++}</td>
                                        <td><span className="">{ formatDate(item.createdAt)}</span></td>
                                        <td><span className="">{ props.data.name}</span></td>
                                        <td><span
                                            className={
                                                item.status == 'Present'
                                                    ? 'text-success'
                                                    : 'text-danger'
                                            }
                                            style={{'font-weight': 'bold'}}
                                        >{ item.status }</span></td>
                                        <td>
                                            {item && item.Comment && item.Comment.comment != null ? item.Comment.comment : 'NA'}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        </>
    );
};
