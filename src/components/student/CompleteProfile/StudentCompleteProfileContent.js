import React, {useEffect, useState} from "react";
import {ACCESS_TOKEN_NAME} from "../../_general_components/_api/apiconstants";
import axios from "axios";
import api from '../../../routes/api'
import toaster from "toastr";
import { useHistory } from "react-router-dom";

export const StudentCompleteProfileContent = (props) => {
    let history = useHistory();
    const [state, setState] = useState({
        department_id: '',
        new_password: '',
        new_password_confirmation: '',
    });
    const [campusData, setCampusData] = useState({
        id: '',
        name: ''
    })
    const [departmentData, setDepartmentData] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)
    const handleChange = (e) => {
        const {id, value} = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }
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

    const handleSubmitClick = (e) => {
        e.preventDefault()
        const payload = {
            new_password: state.new_password,
            new_password_confirmation: state.confirm_password,
            department_id: state.department_id
        }
        console.log('payload', payload)
        api.complete_profile(payload)
            .then(response => {
                console.log("here in response ", response)
                if (response.data.data.Role.name === 'student'){
                    history.push('/student/home')
                }
                else if (response.data.data.Role.name === 'supervisor'){
                    history.push('/supervisor/home')
                }
                else if (response.data.data.Role.name === 'pm'){
                    history.push('/pm/home')
                }
                // window.location = '/student/home';
            })
            .catch(err => {
                console.log('Error while completing profile')
                console.log(err.response.data.errors && err.response.data.errors)
                // history.push('/student/complete-profile')
                // window.location = '/student/complete-profile';
            })
    }
    const changeCampus = async (event) => {
        api.dropdown_departments({campus_id: event.target.value})
            .then(response => {
                if (response){
                    setDepartmentData(response.data.data)
                    setDataLoaded(true)
                }
            })
            .catch(err => {
                setDepartmentData(null)
            })

    }
    return (
        <>
            <h2>Please complete your profile first</h2>
            <br/>

            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-primary" data-collapsed="0">
                        <div className="panel-heading">
                            <div className="panel-title">Provide your details here.</div>

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
                                name={"form"}
                            >
                                {/*image here starts */}
                        {/*        <div className="form-group">*/}
                        {/*            <label className="col-sm-3 control-label">Image Upload</label>*/}
                        {/*            <div className="col-sm-5">*/}
                        {/*                <div*/}
                        {/*                    className="fileinput fileinput-new"*/}
                        {/*                    data-provides="fileinput"*/}
                        {/*                >*/}
                        {/*                    <input type="hidden" />*/}
                        {/*                    <div*/}
                        {/*                        className="fileinput-new thumbnail"*/}
                        {/*                        style={{ width: "200", height: "150" }}*/}
                        {/*                        data-trigger="fileinput"*/}
                        {/*                    >*/}
                        {/*                        <img src="http://placehold.it/200x150" alt="..." />*/}
                        {/*                    </div>*/}
                        {/*                    <div*/}
                        {/*                        className="fileinput-preview fileinput-exists thumbnail"*/}
                        {/*                        style={{*/}
                        {/*                            maxWidth: "200",*/}
                        {/*                            maxHeight: "150",*/}
                        {/*                            lineHeight: "10",*/}
                        {/*                        }}*/}
                        {/*                    ></div>*/}
                        {/*                    <div>*/}
                        {/*<span className="btn btn-white btn-file">*/}
                        {/*  <span className="fileinput-new">Select image</span>*/}
                        {/*  <span className="fileinput-exists">Change</span>*/}
                        {/*  <input*/}
                        {/*      type="file"*/}
                        {/*      name="image"*/}
                        {/*      id={'image'}*/}
                        {/*      onChange={handleChange}*/}
                        {/*      accept=""*/}
                        {/*  />*/}
                        {/*</span>*/}
                        {/*                        <a*/}
                        {/*                            href="javascript:void(0);"*/}
                        {/*                            className="btn btn-orange fileinput-exists"*/}
                        {/*                            data-dismiss="fileinput"*/}
                        {/*                        >*/}
                        {/*                            Remove*/}
                        {/*                        </a>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                                    {/*image here ends */}
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">New Password</label>
                                    <div className="col-sm-5">
                                        <input className="form-control" type="password" name={'new_password'} onChange={handleChange} id={'new_password'} value={state.new_password}/>
                                        {/*<span></span>*/}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Confirm Password</label>
                                    <div className="col-sm-5">
                                        <input className="form-control" type="password" name={'confirm_password'} onChange={handleChange} id={'confirm_password'} value={state.confirm_password}/>
                                        {/*<span></span>*/}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Select Your Campus</label>
                                    <div className="col-sm-5">
                                        <select className="form-control" name="student_campus" onChange={changeCampus}>
                                            <option value="" selected={true} disabled={true}>Select Campus</option>
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
                                    <label className="col-sm-3 control-label">Select Your Department</label>
                                    <div className="col-sm-5">
                                        <select className="form-control" name="student_department">
                                            <option value="" selected disabled={true}>Select Department</option>
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
                                    <div className="col-sm-offset-3 col-sm-5">
                                        <button
                                            onClick={handleSubmitClick}
                                            className="btn btn-primary btn-block btn-login"
                                        >
                                            Update Information
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}