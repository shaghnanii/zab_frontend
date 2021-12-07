import React, {useEffect, useState} from "react";
import {ACCESS_TOKEN_NAME} from "../../_general_components/_api/apiconstants";
import axios from "axios";
import toastr from "toastr";
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
    const { id, value } = e.target;
    let errors = state.errors;
    switch (id){
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
    axios.post(process.env.REACT_APP_BACKEND_API_URL + '/fyps', payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
        .then(response => {
          console.log(response)
         setSuccessMessage(true)
        })
        .catch(err => {
          console.log(err)
          setFailureMessage(true)
          // failure_message()
        })
  }

  useEffect(() => {
    const fetchDropdownData = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN_NAME);
      const department_response = await axios.get(process.env.REACT_APP_BACKEND_API_URL + '/api/departments-dropdown', {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setDepartmentDropdown(department_response.data.data);
      const supervisor_response = await axios.get(process.env.REACT_APP_BACKEND_API_URL + '/api/supervisors-dropdown', {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      setSupervisorDropdown(supervisor_response.data.data);
    }
    fetchDropdownData();
  }, [])
  return (<>
    <ol className="breadcrumb bc-3">
      <li><a href="/student/home"><i className="fa fa-home"></i>Home</a></li>
      <li><a href="javascript:void(0);">FYP</a></li>
      <li className="active"><strong>My Fyp</strong></li>
    </ol>

    <h2>FYP Details </h2>

    <br/>

    <div className="row">
      <div className="col-md-12">
        {/*{{#if data}}*/}
        {/*<table className="table table-bordered table-hover responsive">*/}
        {/*  <thead>*/}
        {/*  <tr>*/}
        {/*    <th width="15%">Reg No.</th>*/}
        {/*    <th>Name</th>*/}
        {/*    <th>Project Name</th>*/}
        {/*    <th width="16%">Project Type</th>*/}
        {/*    <th>Contact</th>*/}
        {/*    <th>Action</th>*/}
        {/*  </tr>*/}
        {/*  </thead>*/}
        {/*  <tbody>*/}
        {/*  <tr>*/}
        {/*    <td><span className="custom_colored_text_bold">reg id</span></td>*/}
        {/*    <td>*/}
        {/*      Saud Khan*/}
        {/*      <span className="custom_colored_text_bold">&</span>*/}
        {/*      Asif Khan*/}
        {/*    </td>*/}
        {/*    <td>*/}
        {/*    <span className="custom_colored_text_normal">*/}
        {/*        /!*{{#if data.Fyp}}*!/*/}
        {/*      /!*{{data.Fyp.title}}*!/*/}
        {/*      /!*{{else}}*!/*/}
        {/*      <span style={{color: 'red'}}>No FYP registered yet.</span>*/}
        {/*      /!*{{/if}}*!/*/}
        {/*        </span>*/}
        {/*    </td>*/}
        {/*    <td>email</td>*/}
        {/*    <td>contact</td>*/}
        {/*    <td>*/}
        {/*      <a href="javascript:void(0);" class="btn btn-success btn-sm btn-icon icon-left"> <i class="entypo-eye"></i>*/}
        {/*        View Details*/}
        {/*      </a>*/}
        {/*    </td>*/}
        {/*  </tr>*/}
        {/*  </tbody>*/}
        {/*</table>*/}
        {/*{{else}}*/}
        <div class="alert alert-danger">No Fyp registered yet, please register your FYP to see more details here. error</div>

        <form class="form" name={'form'}>
          <label for="title">Enter Title *</label>
          <input class="form-control" type="text" name="title" id={'title'} value={state.title} onChange={handleChange} placeholder="Title" required/>
          {titleError && <span style={{color: 'red'}}>{titleError}</span>}
          <br/>
          <label for="title">Enter FYP Type *</label>
          <input class="form-control" type="text" name="type" id={'type'} value={state.type} onChange={handleChange} placeholder="Type" required/>
          {typeError && <span style={{color: 'red'}}>{typeError}</span>}
          <br/>
          <label for="title">Enter Description *</label>
          <input class="form-control" type="text" name="desc" id={'desc'} value={state.desc} onChange={handleChange} placeholder="Description" required/>
          {descError && <span style={{color: 'red'}}>{descError}</span>}
          <br/>
          <button onClick={handleSubmitClick} class="btn btn-success btn-icon form-control">
            Add FYP Details
            <i class="entypo-plus"></i>
          </button>
        </form>
        {/*{{/if}}*/}
      </div>
    </div>

  </>);
};
