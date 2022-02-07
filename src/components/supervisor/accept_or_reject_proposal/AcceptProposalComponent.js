import React, {useEffect, useState} from "react";
import {ACCESS_TOKEN_NAME} from "../../_general_components/_api/apiconstants";
import axios from "axios";
import toastr from "toastr";
import api from "../../../routes/api";
import {
    AvForm,
    AvField,
    AvGroup,
    AvInput,
    AvFeedback,
    AvRadioGroup,
    AvRadio,
    AvCheckboxGroup,
    AvCheckbox
} from 'availity-reactstrap-validation';
import {Button, Label, FormGroup} from 'reactstrap';
import {Link} from "react-router-dom";

export const AcceptProposalComponent = () => {
    const [state, setState] = useState({})
    const [supervisorDropdown, setSupervisorDropdown] = useState({
        id: '',
        name: ''
    })
    const [departmentDropdown, setDepartmentDropdown] = useState({
        id: '',
        name: '',
        code: ''
    })
    const [projects, setProjects] = useState({});
    const [projectLoader, setProjectLoader] = useState(false);

    const [errors, setErrors] = useState(false)
    const [titleError, setTitleError] = useState('')
    const [typeError, setTypeError] = useState('')
    const [descError, setDescError] = useState('')

    const [successMessage, setSuccessMessage] = useState(false)
    const [failureMessage, setFailureMessage] = useState(false)

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
                window.location = "/supervisor/accept-or-reject-proposals";
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
                window.location = "/supervisor/accept-or-reject-proposals";
            }
        }
        toastr.error('Failed to accept/reject the proposal, please try agian.', 'Failure Message', opts);
    }
    const handleChange = (e) => {
        const {id, value} = e.target;
        let errors = state.errors;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    useEffect(() => {
        api.index('/supervisors-proposal-lists')
            .then(response => {
                console.log('response:L ', response)
                setProjects(response.data.data);
                setProjectLoader(true)
            })
            .catch(err => {
                console.log('err: ', err)
                setProjectLoader(false)
            })
    }, [])

    function submitResponse(response, fypId, groupId) {

        // api.store('/supervisors-accept-or-reject-proposal', payload)
        //     .then(response => {
        //         console.log('response:L ', response)
        //         success_message();
        //     })
        //     .catch(err => {
        //         console.log('err: ', err)
        //         failure_message()
        //     })
    }

    function handleSubmitClick(type) {
        // alert('Sumit', state.response);
        // alert('Sumit', state.response);
        console.log('state:::::::::::::::: ', state)
        console.log('state:::::::::::::::: response ', state.response)
        let payload = {
            fyp_id: state.fyp_id,
            group_id: state.group_id,
            type: state.response
        }
    }

    function acceptButtonPress(fyp_id, group_id) {
        state.response = 'accept';
        state.fyp_id = fyp_id
        state.group_id = group_id;

        state.group_id && handleSubmitClick();
    }
    function rejectButtonPress(fyp_id, group_id) {
        state.response = 'reject';
        state.fyp_id = fyp_id
        state.group_id = group_id;
    }


    return (
        <>
            <ol className="breadcrumb bc-3">
                <li><a><i className="fa fa-home"></i>Home</a></li>
                <li className="active"><strong>Proposals</strong></li>
            </ol>


            <h2>Fyp Proposal Lists</h2>

            <br/>

            {
                projectLoader
                && projects
                && projects.Supervisor
                && projects.Supervisor.Groups.map(item =>
                <div className="member-entry">
                    <a href="#" className="member-img">
                        <img src="/images/project2.jpg" className="img-rounded" />
                        <i className="entypo-forward"></i>
                    </a>
                    <div className="member-details">
                        <h4>
                            <a href="#">Group Name: { item.name }</a>
                        </h4>
                        <div className="row info-list">
                            <div className="col-sm-4">
                                Fyp Type:  <a href="#">{ item.Fyp && item.Fyp.type.toUpperCase() }</a>
                                <p>Fyp Name: {item.Fyp && item.Fyp.name}</p>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12" style={{'margin-top': '1px'}}>
                                {/*<label className="control-label">Select Response</label>*/}
                                <select onClick={handleChange} className="form-control"
                                        name="mresponse" id={'mresponse'}>
                                    <option value="" selected={true} disabled={true}>Select Response</option>
                                    <option value="accept">Accept</option>
                                    <option value="reject">Reject</option>
                                </select>
                            </div>

                            <Link
                                to={{
                                    pathname: "/supervisor/response-on-proposal",
                                    state: {
                                        fyp_id: item.Fyp.id,
                                        group_id: item.id,
                                        res_type: state.mresponse,
                                        back_url: 'accept-or-reject-proposals'
                                    } // your data array of objects
                                }}
                                >
                                <button className={'btn btn-success'}>Submit</button>
                            </Link>
                        </div>
                        <div className="row info-list">
                            <div className="col-sm-12">
                                <p>Proposal/Description: {item.Fyp && item.Fyp.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>

    );
};
