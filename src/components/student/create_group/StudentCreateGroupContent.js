import React, {useEffect, useState} from "react";
import api from "../../../routes/api";
import toastr from "toastr";

export const StudentCreateGroupContent = () => {

    const [state, setState] = useState({});

    const [groupData, setGroupData] = useState({})
    const [errors, setErrors] = useState({});

    const [supervisorData, setSupervisorData] = useState({})
    const [fypData, setFypData] = useState({})
    const [partnerData, setPartnerData] = useState({})

    const [dataLoaded, setDataLoaded] = useState(false)


    const [checkGroupLoading, setCheckGroupLoading] = useState(false);
    const [checkGroup, setCheckGroup] = useState(false);


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
                setCheckGroup(response.data.data)
                setCheckGroupLoading(true)
            })
            .catch((err) => {
                console.log("Error ", err)
                setCheckGroupLoading(false)
            })

        const setGdata = (e) => {
            api.index('/groups')
                .then(response => {
                    setGroupData(response.data.data)
                })
                .catch(err => {
                    failure_message()
                })
        }
        setGdata()

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

    return (
        <>
            {checkGroupLoading && checkGroup ?
                <span>
                    <h2>Create Group</h2>
                    <br/>

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
                    <img src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
                         className="img-rounded"/>
                    <i className="entypo-forward"></i>
            </a>
            <div className="member-details"><h4>
                <a href="#"></a></h4>
                <div className="row info-list">
                    <div className="col-sm-4"><i className="entypo-briefcase"></i>
                        Teacher <a href="#">SZABIST Islamabad</a></div>
                    <div className="col-sm-4"><i className="entypo-twitter"></i> <a href="#">@example</a></div>
                    <div className="col-sm-4"><i className="entypo-facebook"></i> <a href="#">fb.me/example</a></div>
                    <div className="clear"></div>
                    <div className="col-sm-4"><i className="entypo-location"></i> <a href="#">Islamabad</a></div>
                    <div className="col-sm-4"><i className="entypo-mail"></i> <a href="#">example@gmail.com</a></div>
                    <div className="col-sm-4"><i className="entypo-linkedin"></i> <a href="#">example</a></div>
                </div>
            </div>
        </div>
                </span>}
        </>
    );
}