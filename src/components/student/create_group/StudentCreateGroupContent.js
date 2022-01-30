import React, {useEffect, useState} from "react";
import api from "../../../routes/api";
import toastr from "toastr";
import axios from "axios";
import {ACCESS_TOKEN_NAME} from "../../_general_components/_api/apiconstants";

export const StudentCreateGroupContent = () => {

    const [state, setState] = useState({});

    const [groupData, setGroupData] = useState({})
    const [errors, setErrors] = useState({});

    const [supervisorData, setSupervisorData] = useState({})
    const [fypData, setFypData] = useState({})
    const [partnerData, setPartnerData] = useState({})

    const [dataLoaded, setDataLoaded] = useState(false)
    const [test, setTest] = useState(false)


    const [checkGroupLoading, setCheckGroupLoading] = useState(false);
    const [checkGroup, setCheckGroup] = useState(false);
    const [checkGroupData, setCheckGroupData] = useState(false);

    useEffect(() => {
        api.dropdown_data()
            .then(response => {
                setSupervisorData(response.data.data.supervisors)
                setFypData(response.data.data.fyps)
                setPartnerData(response.data.data.students)
                setDataLoaded(true)
            })
            .catch((err) => {
                setDataLoaded(false)
                console.log("Error in student complete profile controller: ", err)
            })

        api.index('/student-fyp')
            .then(response => {
                console.log('resp:M ', response)
                setCheckGroup(response.data.check)
                setCheckGroupData(response.data.group)
                setCheckGroupLoading(true)

                console.log("dataaaaaaaaaaaa: ", response.data.group)
                getGroups(response.data.group)

            })
            .catch((err) => {
                console.log("Error ", err)
                setCheckGroupLoading(false)
            })
        const getGroups = async (id) => {
            api.index('/groups/' + id)
                .then(response => {
                    console.log("apiiiiiiiiiiiiiiiiiii", response)
                    setGroupData(response.data.data)
                    setTest(true)
                })
                .catch(err => {
                    failure_message()
                })
        }


        // const fetchData = async () => {
        //     const token = localStorage.getItem(ACCESS_TOKEN_NAME);
        //     const headers = {
        //         Authorization: "Bearer " + token,
        //     };
        //     const response = await axios.get(process.env.REACT_APP_BACKEND_API_URL + '/api/student-fyp', {headers});
        //     console.log('response: ', response)
        //     setCheckGroup(response.data.check)
        //     setCheckGroupData(response.data.group)
        //     setCheckGroupLoading(true)
        //     if (response.status === 200){
        //         getSudentGroupData(response.data.group);
        //     }
        // };
        //
        // const getSudentGroupData = async (id) => {
        //     const token = localStorage.getItem(ACCESS_TOKEN_NAME);
        //     const headers = {
        //         Authorization: "Bearer " + token,
        //     };
        //     const response = await axios.get(process.env.REACT_APP_BACKEND_API_URL + '/api/groups/' + id, {headers});
        //     setGroupData(response.data.data)
        // }
        //
        // fetchData();

    }, []);


    const handleChange = (e) => {
        const {id, value} = e.target;

        setState((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }
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
                window.location = "/admin/fyp-list";
            }
        }
        toastr.success('Successfully added new fyp', 'Success Message', opts);
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
        toastr.error('Failed to add new fyp', 'Failure Message', opts);
    }

    const handleSubmitClick = (e) => {
        e.preventDefault()

        window.scrollTo(0, 0)
        const payload = {
            name: state.name,
            fyp_id: state.fyp_id,
            supervisor_id: state.supervisor_id,
            partner_id: state.partner_id
        }
        api.store('/groups', payload)
            .then(response => {
                success_message()
            })
            .catch(err => {
                console.log("Failed to add new group.. ", err)
            })
    }

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

    return (
        <>
            {!checkGroupLoading && !groupData ?
                <span>
                    <h2>Create Group</h2>
                    <br/>

                    <p>{console.log(groupData)}</p>

                    <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-primary" data-collapsed="0">
                            <div className="panel-heading">
                                <div className="panel-title">Please create a new group for FYP here.</div>

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
                                    <div className="tab-content">
                                        <div className="">
                                            {/*has-error class for erros */}
                                            <div className="row" style={{marginLeft: '0px'}}>
                                                <div className="form-group col-lg-5 col-md-5 col-sm-12">
                                                    <label htmlFor="field-1" className="control-label">
                                                        FYP Title
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Group Title"
                                                        name="name"
                                                        value={state.name}
                                                        id={'name'}
                                                        onChange={handleChange}
                                                    />
                                                    {errors && <span style={{color: 'red'}}>{errors.name}</span>}
                                                </div>
                                                <div className="form-group col-lg-2 col-md-2 col-sm-0">
                                                </div>

                                                <div className="form-group col-lg-5 col-md-5 col-sm-12">
                                                    <label className="control-label">Select Campus</label>
                                                    <select onClick={handleChange} className="form-control"
                                                            name="supervisor_id" id={'supervisor_id'}>
                                                        <option value="" selected={true} disabled={true}>Select Supervisor</option>
                                                        {dataLoaded && supervisorData.map(data => (
                                                                <>
                                                                    <option value={data.id}>{data.name}</option>
                                                                </>
                                                            )
                                                        )}
                                                    </select>
                                                    {errors &&
                                                        <span style={{color: 'red'}}>{errors.supervisor_id}</span>}
                                                </div>


                                                <div className="form-group col-lg-5 col-md-5 col-sm-12">
                                                    <label className="control-label">Select Group Partner</label>
                                                    <select onClick={handleChange} className="form-control"
                                                            name="partner_id" id={'partner_id'}>
                                                        <option value="" selected={true} disabled={true}>Select Group Partner</option>
                                                        {dataLoaded && partnerData.map(data => (
                                                                <>
                                                                    <option value={data.User.id}>{data.name}</option>
                                                                </>
                                                            )
                                                        )}
                                                    </select>
                                                    {errors && <span style={{color: 'red'}}>{errors.student_id}</span>}
                                                </div>

                                                <div className="form-group col-lg-2 col-md-2 col-sm-0">
                                                </div>
                                                <div className="form-group col-lg-5 col-md-5 col-sm-12">
                                                    <label className="control-label">Select Fyp</label>
                                                    <select onClick={handleChange} className="form-control"
                                                            name="fyp_id" id={'fyp_id'}>
                                                        <option value="" selected={true}
                                                                disabled={true}>Select Fyp</option>
                                                        {dataLoaded && fypData.map(data => (
                                                                <>
                                                                    <option value={data.id}>{data.name}</option>
                                                                </>
                                                            )
                                                        )}
                                                    </select>
                                                    {errors &&
                                                        <span style={{color: 'red'}}>{errors.supervisor_id}</span>}
                                                </div>
                                                {/*<div className="form-group col-lg-5 col-md-5 col-sm-12">*/}
                                                {/*    <label className="control-label">Select Pannel</label>*/}
                                                {/*    <select onClick={handleChange} className="form-control"*/}
                                                {/*            name="pannel_id" id={'pannel_id'} onChange={changePannels}>*/}
                                                {/*        <option value="" selected={true} disabled={true}>Select Pannel</option>*/}
                                                {/*        {dataLoaded && pannelData.map(data => (*/}
                                                {/*                <>*/}
                                                {/*                    <option value={data.id}>{data.name}</option>*/}
                                                {/*                </>*/}
                                                {/*            )*/}

                                                {/*        )}*/}
                                                {/*    </select>*/}
                                                {/*    {errors && <span style={{color: 'red'}}>{errors.supervisor_id}</span>}*/}
                                                {/*</div>*/}
                                            </div>

                                            <div className="form-group">
                                                <div className="col-sm-offset-3 col-sm-5">
                                                    <button
                                                        onClick={handleSubmitClick}
                                                        className={'btn btn-primary btn-block btn-login'}
                                                    >
                                                        Create Group
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
                    <span/>
            </span>
                :
                <span>

            <div className="member-entry">
                <a href="#" className="member-img">
                    <img src="/images/task.jpg"
                         className="img-rounded"/>
                    <i className="entypo-forward"></i>
                </a>
            <div className="member-details">
                <div className="row" style={{marginLeft: '25px'} }>
                    <div className="row">
                        <div className="col-sm-6">
                            <p href="#"><span>Group Name: </span>{groupData && groupData.name}</p>
                        </div>
                        <div className="col-sm-6">
                            <a href="#">Status: {groupData && groupData.status == true ? 'Active' : 'Not Active'}</a>
                        </div>
                    </div>

                   <div className="row">
                       <div className="col-sm-6">
                           <a href="#">Group Members:</a>
                           <p>{groupData && groupData.Students && groupData.Students.map(item =>
                               <span style={{'margin-right': '5px'}}>[{item.name}]</span>
                           )
                           }</p>
                       </div>
                       <div className="col-sm-6">
                           <p>Fyp Name: {groupData && groupData.Fyp && groupData.Fyp.name}</p>
                           <a href="#" style={{'margin-top': '5px'}}>Group Created At: {groupData && groupData.createdAt && formatDate(groupData.createdAt)}</a>
                       </div>
                   </div>
                </div>
            </div>
        </div>
                </span>}
        </>
    );
}