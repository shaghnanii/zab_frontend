import React, {useEffect, useState} from "react";
import api from "../../../../../routes/api";
import toastr from "toastr";
export const MarkAttendanceOneComponent = (props) => {

    const [state, setState] = useState({});

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

    const handleChange = (e) => {
        const {id, value} = e.target;

        setState((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault()

        window.scrollTo(0, 0)
        const payload = {
            status: state.status,
            fyp_id: props.data.fyp_id,
            level: props.data.level,
            comment: state.comment
        }
        api.store('/supervisors-mark-attendance', payload)
            .then(response => {
                success_message()
            })
            .catch(err => {
                failure_message()
                console.log("Failed to add new group.. ", err)
            })
    }

    const success_message = () => {
        var opts = {
            "closeButton": true,
            "debug": false,
            "positionClass": "toast-top-right",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "500",
            "timeOut": "3000",
            "extendedTimeOut": "500",
            "showEasing": "swing",
            "hideEasing": "swing",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut",
            "onHidden": function () {
                window.location = props.data.back_url;
            }
        }
        toastr.success('Attendance marked successfully', 'Success Message', opts);
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
        }
        toastr.error('Failed to mark attendance', 'Failure Message', opts);
    }
    return (
        <>
            {console.log("attendanceeeeeeeeeeeeeeeeee: ", props)}
            <ol className="breadcrumb bc-3">
                <li><a href="/supervisor"><i className="fa fa-home"></i>Home</a></li>
                <li><a href="#;">Supervisor</a></li>
                <li className="active"><strong>Mark Attendance</strong></li>
            </ol>

            <h2>{ props.data.m_text} <small>[ Mark Attendances ]</small></h2>

            <br/>
            <>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-primary" data-collapsed="0">
                            <div className="panel-heading">
                                <div className="panel-title">Please mark the attendance here.</div>

                                <div className="panel-options">
                                    <a
                                        href="#;"
                                        data-toggle="modal"
                                        data-target="#sample-modal-dialog-1"
                                        className="bg"
                                    >
                                        <i className="entypo-cog"></i>
                                    </a>

                                    <a href="#;" data-rel="collapse">
                                        <i className="entypo-down-open"></i>
                                    </a>
                                    <a href="#;" data-rel="reload">
                                        <i className="entypo-arrows-ccw"></i>
                                    </a>
                                    <a href="#;" data-rel="close">
                                        <i className="entypo-cancel"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="panel-body">
                                <form
                                    className="form-horizontal form-groups-bordered"
                                >
                                    <div className="tab-content">
                                        <div className="">
                                            {/*has-error class for erros */}
                                            <div className="row" style={{marginLeft: '0px'}}>
                                                <div className="form-group col-lg-5 col-md-5 col-sm-12">
                                                    <label htmlFor="field-1" className="control-label">
                                                        FYP Name
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        disabled={true}
                                                        placeholder="Fyp Name"
                                                        value={props.data.fyp_name}
                                                    />
                                                </div>
                                                <div className="form-group col-lg-2 col-md-2 col-sm-0">
                                                </div>
                                                <div className="form-group col-lg-5 col-md-5 col-sm-12">
                                                    <label htmlFor="field-1" className="control-label">
                                                        Group Name
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        disabled={true}
                                                        placeholder="Group Name"
                                                        value={props.data.group_name}
                                                    />
                                                </div>


                                                <div className="form-group col-lg-5 col-md-5 col-sm-12">
                                                    <label className="control-label">Select Status</label>
                                                    <select onClick={handleChange} className="form-control"
                                                            name="status" id={'status'}>
                                                        <option value="" selected={true} disabled={true}>Select Attendance Status</option>
                                                        <option value="Present">Present</option>
                                                        <option value="Absent">Absent</option>
                                                        <option value="Leave">Leave</option>
                                                    </select>
                                                    {/*{errors &&*/}
                                                    {/*    <span style={{color: 'red'}}>{errors.supervisor_id}</span>}*/}
                                                </div>

                                                <div className="form-group col-lg-2 col-md-2 col-sm-0">
                                                </div>
                                                <div className="form-group col-lg-5 col-md-5 col-sm-12">
                                                    <label htmlFor="field-1" className="control-label">
                                                        Attendance Date
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        disabled={true}
                                                        placeholder="Date"
                                                        value={new Date().getFullYear() +'-'+ (new Date().getMonth() + 1) + '-' + new Date().getDay()}
                                                    />
                                                </div>

                                                <div className="form-group col-lg-2 col-md-2 col-sm-0">
                                                </div>

                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <label className="control-label" htmlFor="about">
                                                        Write your comment here
                                                    </label>
                                                    <textarea
                                                        required={true}
                                                        className="form-control autogrow"
                                                        name="comment"
                                                        data-validate="minlength[10]"
                                                        rows="5"
                                                        placeholder="Comment"
                                                        aria-invalid="true"
                                                        aria-describedby=""
                                                        value={state.comment}
                                                        id={'comment'}
                                                        onChange={handleChange}
                                                        style={{
                                                            overflow: "hidden",
                                                            overflowWrap: "break-word",
                                                            resize: "horizontal",
                                                            height: "98",
                                                        }}
                                                    ></textarea>
                                                    {/*{descriptionError && <span style={{color: 'red'}}>{descriptionError}</span>}*/}
                                                </div>


                                            </div>

                                            <div className="form-group">
                                                <div className="col-sm-offset-3 col-sm-5">
                                                    <button
                                                        onClick={handleSubmitClick}
                                                        className={'btn btn-success btn-block btn-login'}
                                                    >
                                                        Mark Attendance
                                                        {/*&nbsp; <i className={'glyphicon glyphicon-refresh spin'}></i>*/}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};
