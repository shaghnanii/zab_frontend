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

export const StudentFypContent = () => {
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
                window.location = "/admin/fyp-list";
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
                window.location = "/admin/add-fyp";
            }
        }
        toastr.error('Failed to add new fyp', 'Failure Message', opts);
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
    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            title: state.title,
            desc: state.desc,
            type: state.type,
            department_id: state.department_id,
            supervisor_id: state.supervisor_id,
        };
        const token = localStorage.getItem(ACCESS_TOKEN_NAME);
        axios.post(process.env.REACT_APP_BACKEND_API_URL + '/api/fyps', payload, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
            .then(response => {
                console.log('my fyps data: ', response)
                setSuccessMessage(true)
            })
            .catch(err => {
                console.log('fyp data error : ', err)
                setFailureMessage(true)
                // failure_message()
            })
    }

    useEffect(() => {
        api.index('/fyps')
            .then(response => {
                console.log('response:L ', response)
                setProjects(response.data.data);
                setProjectLoader(true)
            })
            .catch(err => {
                console.log('err: ', err)
                setProjectLoader(false)
            })
        // console.log('onee here')
        // const token = localStorage.getItem(ACCESS_TOKEN_NAME);
        // const fetchDropdownData = async () => {
        //     const token = localStorage.getItem(ACCESS_TOKEN_NAME);
        //     const department_response = await axios.get(process.env.REACT_APP_BACKEND_API_URL + '/api/departments-dropdown', {
        //         headers: {
        //             Authorization: "Bearer " + token,
        //         },
        //     });
        //     console.log('setting department here')
        //     setDepartmentDropdown(department_response.data.data);
        //
        //     console.log('fetching superivsors here')
        //     const supervisor_response = await axios.get(process.env.REACT_APP_BACKEND_API_URL + '/api/supervisors-dropdown', {
        //         headers: {
        //             Authorization: "Bearer " + token,
        //         },
        //     })
        //     console.log('setting supervisors here')
        //     setSupervisorDropdown(supervisor_response.data.data);
        // }
        //
        //
        // fetchDropdownData();
    }, [])
    return (
        <>
            <ol className="breadcrumb bc-3">
                <li><a><i className="fa fa-home"></i>Home</a></li>
                <li><a href="javascript:void(0);"></a></li>
                <li className="active"><strong>Projects</strong></li>
            </ol>


            <h2>List of all projects </h2>

            <Link to={'proposal'}><button className={'pull-right btn btn-success'}>Add/Upload Proposal</button></Link>
            <br/>

            {projectLoader && projects && projects.map(item =>
                <div className="member-entry">
                    <a href="#" className="member-img">
                        <img src="/images/project2.jpg" className="img-rounded" />
                        <i className="entypo-forward"></i>
                    </a>
                    <div className="member-details"><h4>
                        <a href="#">{ item.name }</a></h4>
                        <div className="row info-list">
                            <div className="col-sm-4">
                                Fyp Type:  <a href="#">{ item.type.toUpperCase() }</a></div>
                            <div className="col-sm-4">
                                <i className={item.status == true ? 'entypo-check' : 'entypo-block' }></i>
                                <a href="#">{ item.status == true ? 'Active' : 'Not Active'}</a>
                            </div>
                            <button className={item.status == false ? 'btn btn-primary' : 'btn btn-success' }  disabled={item.status == false ? true : false }>Select This Project</button>
                        </div>
                        <div className="row info-list">
                            <div className="col-sm-12">
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>

    );
};
