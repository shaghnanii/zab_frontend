import React, {useEffect, useState} from "react";
import api from "../../../routes/api";
import toastr from "toastr";
import {Link} from "react-router-dom";

export const AssessmentResultComponent = (props) => {

    return (<>
        <ol className="breadcrumb bc-3">
            <li><a href="/student"><i className="fa fa-home"></i>Home</a></li>
            <li><a href="javascript:void(0);">PM</a></li>
            <li className="active"><strong>Assessment details</strong></li>
        </ol>

        {console.log(props)}
        <h2> {props && props.data && props.data.level === '1' ? 'Fyp Part-I' : 'Fyp Part-II'} <small>[ Assessment Details ]</small></h2>

        <br/>
        <>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered table-hover responsive">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Question</th>
                            <th>Total Marks</th>
                            <th>Obtained Marks</th>
                        </tr>
                        </thead>
                        <tbody>
                        { props
                            && props.data
                            && props.data.data
                            && props.data.data.Student
                            && props.data.data.Student.Group
                            && props.data.data.Student.Group.Assessments
                            && props.data.data.Student.Group.Assessments.map(item =>
                                <tr>
                                    <td><span className="">{ props.data.data.Student.name}</span></td>
                                    <td><span className="">{ props.data.data.email}</span></td>
                                    <td><span className="">{ item.question}</span></td>
                                    <td><span className="">{ item && item.total_mark}</span></td>
                                    <td><span className="">{ item && item.obtained_mark}</span></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    </>);
};
