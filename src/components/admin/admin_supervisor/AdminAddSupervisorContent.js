import React, {useEffect, useState} from "react";
import toastr from "toastr";
import {ACCESS_TOKEN_NAME} from "../../_general_components/_api/apiconstants";
import axios from "axios";
import api from "../../../routes/api";

export const AdminAddSupervisorContent = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    name: '',
    reg_id: '',
    department_id: '',
    phone_number: '',
    address: '',
    dob: '2021-03-03',
    majors: 'bscs',
    gender: 'male',
    batch: '2021',
    errors: {
      email: '',
      password: '',
      name: '',
      reg_id: '',
      department_id: '',
      phone_number: '',
      address: '',
      batch: '',
      gender: '',
      dob: '',
      majors: '',
    }
  });
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [regIdError, setRegIdError] = useState(false)
  const [departmentIdError, setDepartmentIdError] = useState(false)
  const [phoneNumberError, setPhoneNumberError] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [batchError, setBatchError] = useState(false)
  const [genderError, setGenderError] = useState(false)
  const [dobError, setDobError] = useState(false)
  const [majorsError, setMajorsError] = useState(false)

  const [campusData, setCampusData] = useState({
    id: '',
    name: ''
  })
  const [departmentData, setDepartmentData] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    api.dropdown_data()
        .then(response => {
          setCampusData(response.data.data.campuses)
          setDataLoaded(true)
        })
        .catch((err) => {
          console.log("Error in student complete profile controller: ", err)
        })
  }, []);

  const changeCampus = async (event) => {
    api.dropdown_departments({campus_id: event.target.value})
        .then(response => {
          console.log('api response: ', response)
          if (response){
            setDepartmentData(response.data.data)
            setDataLoaded(true)
          }
        })
        .catch(err => {
          setDepartmentData(null)
        })
  }

  const handleChange = (e) => {
    const {id, value} = e.target;

    let errors = state.errors;

    switch (id){
      case 'email':
        errors.email =
            value.length < 6
                ? setEmailError("Email must be at least 5 characters long!")
                : setEmailError('');
        break;
      case 'password':
        errors.password =
            value.length < 6
                ? setPasswordError('Password must be at least 5 characters long!')
                : setPasswordError('');
        break;
      case 'name':
        errors.name =
            value.length < 4
                ? setNameError('Description must be at least 4 characters long!')
                : setNameError('');
        break;
      case 'reg_id':
        errors.reg_id =
            value.length !== 7
                ? setRegIdError('Registration ID must be 7 digit !')
                : setRegIdError('');
        break;
      case 'phone_number':
        errors.phone_number =
            value.length !== 11
                ? setPhoneNumberError('Contact number must be 11 digit !')
                : setPhoneNumberError('');
        break;
      case 'address':
        errors.address =
            value.length < 4
                ? setAddressError('Address must be at least 4 characters long !')
                : setAddressError('');
        break;
      case 'gender':
        errors.gender =
            value.length < 1
                ? setGenderError('Gender is required must be at least 1 character !')
                : setGenderError('');
        break;
      // case 'majors':
      //   errors.majors =
      //       value.length < 2
      //           ? setMajorsError('Majors is required and must be at least 2 digit long !')
      //           : setMajorsError('');
      //   break;
      // case 'batch':
      //   errors.batch =
      //       value.value.length !== 4
      //           ? setBatchError('Batch(Year) is required and must be 4 digit long !')
      //           : setBatchError('');
      //   break;
      case 'dob':
        errors.dob =
            value.length < 1
                ? setDobError('DOB is required!')
                : setDobError('');
        break;
      default:
        break;
    }

    setState((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }
  const success_msg = () => {
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
        window.location = "/admin/supervisor-list";
      }
    }
    toastr.success('Successfully added new supervisor.', 'Success Message', opts);
  }
  const failure_msg = () => {
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
    toastr.error('Failed to added new supervisor.', 'Failure Message', opts);
  }
  const handleSubmitClick = (e) => {
    e.preventDefault()
    window.scrollTo(0,0)
    const payload = {
      name: state.name,
      password: state.password,
      email: state.email,
      reg_id: state.reg_id,
      phone_number: state.phone_number,
      gender: state.gender,
      batch: state.batch,
      dob: state.dob,
      majors: state.majors,
      department_id: state.department_id,
      address: state.address
    }
    api.admin_supervisor_store(payload)
        .then(response => {
          success_msg()
        })
        .catch(err => {
          failure_msg()
        })
  }
  return (
    <>
      <h2>Add Supervisor Account</h2>
      <br />

      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-primary" data-collapsed="0">
            <div className="panel-heading">
              <div className="panel-title">
                Please add/enter Student details here.
              </div>

              <div className="panel-options">
                <a
                    href="javascript:void(0);"
                    data-toggle="modal"
                    data-target="#sample-modal-dialog-1"
                    className="bg"
                >
                  <i className="entypo-cog"></i>
                </a>

                <a href="javascript:void(0);" data-rel="collapse">
                  <i className="entypo-down-open"></i>
                </a>
                <a href="javascript:void(0);" data-rel="reload">
                  <i className="entypo-arrows-ccw"></i>
                </a>
                <a href="javascript:void(0);" data-rel="close">
                  <i className="entypo-cancel"></i>
                </a>
              </div>
            </div>
            <div className="panel-body">
              <form
                  className="form-horizontal form-groups-bordered"
              >
                <div className={
                  regIdError ? "form-group has-error" : "form-group"
                }>
                  <label htmlFor="field-1" className="col-sm-3 control-label">
                    Reg ID
                  </label>
                  <div className="col-sm-5">
                    <input
                        className="form-control"
                        type="number"
                        placeholder="Registration ID"
                        name="reg_id"
                        id={'reg_id'}
                        onChange={handleChange}
                        value={state.reg_id}
                    />
                    {regIdError && <span style={{color: 'red'}}>{regIdError}</span>}
                  </div>
                </div>

                <div className={
                  nameError ? "form-group has-error" : "form-group"
                }>
                  <label htmlFor="field-1" className="col-sm-3 control-label">
                    Full Name
                  </label>
                  <div className="col-sm-5">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        id={'name'}
                        onChange={handleChange}
                        value={state.name}
                    />
                    {nameError && <span style={{color: 'red'}}>{nameError}</span>}
                  </div>
                </div>

                <div className={
                  emailError ? "form-group has-error" : "form-group"
                }>
                  <label htmlFor="field-1" className="col-sm-3 control-label">
                    Email
                  </label>
                  <div className="col-sm-5">
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        id={'email'}
                        onChange={handleChange}
                        value={state.email}
                    />
                    {emailError && <span style={{color: 'red'}}>{emailError}</span>}
                  </div>
                </div>

                <div className={
                  phoneNumberError ? "form-group has-error" : "form-group"
                }>
                  <label htmlFor="field-1" className="col-sm-3 control-label">
                    Contact
                  </label>
                  <div className="col-sm-5">
                    <input
                        className="form-control"
                        type="number"
                        placeholder="Contact No."
                        name="phone_number"
                        id={'phone_number'}
                        onChange={handleChange}
                        value={state.phone_number}
                    />
                    {phoneNumberError && <span style={{color: 'red'}}>{phoneNumberError}</span>}
                  </div>
                </div>

                <div
                    className={
                      passwordError ? "form-group has-error" : "form-group"
                    }
                >
                  <label htmlFor="field-1" className="col-sm-3 control-label">
                    Password
                  </label>
                  <div className="col-sm-5">
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        id={'password'}
                        onChange={handleChange}
                        value={state.password}
                    />
                    {passwordError && <span style={{color: 'red'}}>{passwordError}</span>}
                  </div>
                </div>

                <div className={
                  addressError ? "form-group has-error" : "form-group"
                }>
                  <label htmlFor="field-1" className="col-sm-3 control-label">
                    Address
                  </label>
                  <div className="col-sm-5">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Address"
                        name="address"
                        id={'address'}
                        onChange={handleChange}
                        value={state.address}
                    />
                    {addressError && <span style={{color: 'red'}}>{addressError}</span>}
                  </div>
                </div>

                <div className={
                  dobError ? "form-group has-error" : "form-group"
                }>
                  <label htmlFor="field-1" className="col-sm-3 control-label">
                    DOB
                  </label>
                  <div className="col-sm-5">
                    <div className="input-group">
                      <input
                          type="text"
                          className="form-control datepicker"
                          data-format="yyyy-mm-dd"
                          name="dob"
                          id={'dob'}
                          onChange={handleChange}
                          value={state.dob}
                      />
                      <div className="input-group-addon">
                        <a href="javascript:void(0);">
                          <i className="entypo-calendar"></i>
                        </a>
                      </div>
                    </div>
                    {dobError && <span style={{color: 'red'}}>{dobError}</span>}
                  </div>
                </div>


                <div className="form-group">
                  <label className="col-sm-3 control-label">Select Major</label>
                  <div className="col-sm-5">
                    <select id={'majors'} name={'majors'} onChange={handleChange} className="form-control">
                      <option selected disabled={true}>Select Major</option>
                      <option value={'bscs'}>BSCS</option>
                      <option value={'bsse'}>BSSE</option>
                      <option value={'bsit'}>BSIT</option>
                      <option value={'bba'}>BBA</option>
                    </select>
                  </div>
                </div>


                <div className="form-group">
                  <label className="col-sm-3 control-label">Select Batch (Year)</label>
                  <div className="col-sm-5">
                    <select id={'batch'} name={'batch'} onChange={handleChange} className="form-control" >
                      <option selected={true} disabled={true} >Select Batch (Year)</option>
                      <option value={'2021'}>2021</option>
                      <option value={'2020'}>2020</option>
                      <option value={'2019'}>2019</option>
                      <option value={'2018'}>2018</option>
                      <option value={'2017'}>2017</option>
                      <option value={'2016'}>2016</option>
                      <option value={'2015'}>2015</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-3 control-label">Select Campus</label>
                  <div className="col-sm-5">
                    <select id={'campus_id'} name={'campus_id'} onChange={changeCampus} className="form-control" >
                      <option selected disabled={true} >Select Campus</option>
                      {dataLoaded && campusData.map(data => (
                              <>
                                {state.campus_id = data.id}
                                <option value={data.id}>{data.name}</option>
                              </>
                          )
                      )}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Select Department</label>
                  <div className="col-sm-5">
                    <select id={'department_id'} name={'department_id'} onChange={handleChange} className="form-control" >
                      <option selected disabled={true}>Select Department</option>
                      {dataLoaded && departmentData && departmentData.map(data => (
                              <>
                                <>{state.department_id = data.id}</>
                                <option value={state.department_id}>{data.name}</option>
                              </>
                          )
                      )}
                    </select>
                  </div>
                </div>


                <div className="form-group">
                  <label className="col-sm-3 control-label">Gender</label>
                  <div className="col-sm-5">
                    <div className="radio">
                      <label>
                        <input
                            type="radio"
                            name="gender"
                            id={'gender'}
                            onChange={handleChange}
                            value={"male"}
                            checked={true}
                        />
                        Male
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                            type="radio"
                            name="gender"
                            id={'gender'}
                            onChange={handleChange}
                            value={"female"}
                        />
                        Female
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-offset-3 col-sm-5">
                    <button
                        onClick={handleSubmitClick}
                        className="btn btn-primary btn-block btn-login"
                    >
                      Add New Supervisor
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
