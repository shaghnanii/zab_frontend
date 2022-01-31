import React, {useEffect, useState} from "react";
import api from "../../../../routes/api";
import toastr from "toastr";
import Multiselect from 'multiselect-react-dropdown';


export const CreatePannelContent = () => {

    const [state, setState] = useState({});

    const [errors, setErrors] = useState({});

    const [supervisorData, setSupervisorData] = useState({})
    const [partnerData, setPartnerData] = useState({})

    const [dataLoaded, setDataLoaded] = useState(false)
    const [fypData, setFypData] = useState({})
    const [groupData, setGroupData] = useState({})

    let supList = [];
    let groupList = [];
    useEffect(() => {
        api.dropdown_data()
            .then(response => {
                setSupervisorData(response.data.data.supervisors)
                setFypData(response.data.data.fyps)
                setPartnerData(response.data.data.students)
                setGroupData(response.data.data.groups)
                setDataLoaded(true)
            })
            .catch((err) => {
                setDataLoaded(false)
                console.log("Error in student complete profile controller: ", err)
            })

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
                window.location = "/pm/pannel-list";
            }
        }
        toastr.success('Successfully added new pannel', 'Success Message', opts);
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
        toastr.error('Failed to add new pannel', 'Failure Message', opts);
    }

    const handleSubmitClick = (e) => {
        e.preventDefault()

        window.scrollTo(0, 0)
        const payload = {
            name: state.name,
            supervisors_id: state.supervisors_id,
            groups_id: state.groups_id
        }
        api.store('/pm-create-panels', payload)
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

    function onSelectSupervisor(selectedList, selectedItem) {
        supList = [...supList, selectedItem.id]
        state.supervisors_id = supList;
    }

    function onRemoveSupervisor(selectedList, removedItem) {
        console.log('removing this item: ', removedItem.id)
        supList.splice(removedItem.id, 1)
        state.supervisors_id = supList;
        console.log('final array bucket: ', supList)
    }

    function onSelectGroup(selectedList, selectedItem) {
        groupList = [...groupList, selectedItem.id]
        state.groups_id = groupList;
    }

    function onRemoveGroup(selectedList, removedItem) {
        console.log('removing this item: ', removedItem.id)
        groupList.splice(removedItem.id, 1)
        state.groups_id = groupList;
        console.log('final array bucket: ', groupList)
    }

    return (
        <>
                    <h2>Create new Pannel</h2>
                    <br/>

                    <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-primary" data-collapsed="0">
                            <div className="panel-heading">
                                <div className="panel-title">Please create a new pannel here.</div>

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
                                                        Pannel Name
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
                                                    <label className="control-label">Select Supervisors</label>
                                                    {console.log('supervisor data; ', supervisorData)}
                                                    {
                                                        dataLoaded && supervisorData ?
                                                            <Multiselect
                                                                options={supervisorData} // Options to display in the dropdown
                                                                selectedValues={null} // Preselected value to persist in dropdown
                                                                onSelect={onSelectSupervisor} // Function will trigger on select event
                                                                onRemove={onRemoveSupervisor} // Function will trigger on remove event
                                                                displayValue="name" // Property name to display in the dropdown options
                                                            />
                                                            : ""
                                                    }
                                                    {errors &&
                                                        <span style={{color: 'red'}}>{errors.supervisors_id}</span>}
                                                </div>


                                                <div className="form-group col-lg-5 col-md-5 col-sm-12">
                                                    <label className="control-label">Select Groups</label>
                                                    {
                                                        dataLoaded && groupData ?
                                                            <Multiselect
                                                                options={groupData} // Options to display in the dropdown
                                                                selectedValues={null} // Preselected value to persist in dropdown
                                                                onSelect={onSelectGroup} // Function will trigger on select event
                                                                onRemove={onRemoveGroup} // Function will trigger on remove event
                                                                displayValue="name" // Property name to display in the dropdown options
                                                            />
                                                            : ""
                                                    }
                                                    {errors && <span style={{color: 'red'}}>{errors.groups_id}</span>}
                                                </div>

                                            </div>

                                            <div className="form-group">
                                                <div className="col-sm-offset-3 col-sm-5">
                                                    <button
                                                        onClick={handleSubmitClick}
                                                        className={'btn btn-primary btn-block btn-login'}
                                                    >
                                                        Create Pannel
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
    );
}