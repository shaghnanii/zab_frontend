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

export const PannelContent = () => {
    const [state, setState] = useState({
        title: '',
        type: '',
        desc: '',
        department_id: '',
        supervisor_id: '',
        student_id: '',
        errors: {
            title: '',
            type: '',
            desc: '',
            department_id: '',
            supervisor_id: '',
            student_id: '',
        }
    })
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
                window.location = "/supervisor/fyp-list-1";
            }
        }
        toastr.success('Successfully retrieved fyps', 'Success Message', opts);
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
        toastr.error('Failed to retrieve fyp lists', 'Failure Message', opts);
    }
    const handleChange = (e) => {
        const {id, value} = e.target;
        let errors = state.errors;
        switch (id) {
            case 'title':
                errors.title =
                    value.length < 5
                        ? setTitleError("Title must be 5 at least characters long!")
                        : setTitleError('');
                break;
            case 'type':
                errors.type =
                    value.length < 2
                        ? setTypeError('Type must be at least 2 characters long!')
                        : setTypeError('');
                break;
            case 'desc':
                errors.desc =
                    value.length < 20
                        ? setDescError("Description must be at least 20 characters long")
                        : setDescError('')
            default:
                break;
        }
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    useEffect(() => {
        api.index('/supervisors-show-pannels')
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
    return (
        <>
            <ol className="breadcrumb bc-3">
                <li><a><i className="fa fa-home"></i>Home</a></li>
                <li><a href="#;">Supervisor</a></li>
                <li className="active"><strong>Panel</strong></li>
            </ol>


            <h2>Pannel & Groups </h2>

            <br/>

            {
                projectLoader
                && projects
                && projects.Supervisor
                && projects.Supervisor.Pannel
                && projects.Supervisor.Pannel.Groups.map(item =>
                <div className="member-entry">
                    <a href="#" className="member-img">
                        <img src="/images/project2.jpg" className="img-rounded" />
                        <i className="entypo-forward"></i>
                    </a>
                    <div className="member-details"><h4>
                        <a href="#">Group Name: { item.name }</a></h4>
                        <div className="row info-list">
                            <div className="col-sm-4">
                                Fyp Type:  <a href="#">{ item.Fyp && item.Fyp.type.toUpperCase() }</a></div>
                            <div className="col-sm-4">
                                <i className={item.status == true ? 'entypo-check' : 'entypo-block' }></i>
                                <a href="#">{ item.status == true ? 'Active' : 'Not Active'}</a>
                            </div>
                            <Link
                                to={{
                                    pathname: "/supervisor/view-all-assessments-results",
                                    state: {
                                        data: item,
                                        level: item.level
                                    } // your data array of objects
                                }}
                            >
                                <button className={'btn btn-info'} >View Assessments [need comfirmation or update on this button]</button>
                            </Link>
                        </div>
                        <div className="row info-list">
                            <div className="col-sm-12">
                                <p>Fyp Name: {item.Fyp && item.Fyp.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>

    );
};
