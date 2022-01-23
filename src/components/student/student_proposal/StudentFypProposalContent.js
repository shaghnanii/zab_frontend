import React, {useEffect, useState} from "react";
import api from "../../../routes/api";
import toastr from "toastr";

export const StudentFypProposalContent = () => {

  const [state, setState] = useState({
    name: '',
    type: '',
    description: '',
    department_id: '',
    errors: {
      name: '',
      type: '',
      description: '',
      department_id: '',
    }
  });
  const [nameError, setNameError] = useState(false)
  const [typeError, setTypeError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [departmentError, setDepartmentError] = useState(false)
  const [campusError, setCampusError] = useState(false)

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

  const handleChange = (e) => {
    const {id, value} = e.target;
    let errors = state.errors;

    switch (id){
      case 'name':
        errors.name =
            value.length < 5
                ? setNameError("Title must be at least 5 characters long!")
                : setNameError('');
        break;
      case 'type':
        errors.type =
            value.length < 2
                ? setTypeError('Please selece a valid option and the type must be at least 2 characters long!')
                : setTypeError('');
        break;
      case 'description':
        errors.description =
            value.length < 20
                ? setDescriptionError('Description must be at least 20 characters long!')
                : setDescriptionError('');
        break;
      case 'department_id':
        errors.department_id =
            value == null
                ? setDepartmentError('Department cannot be null! Please select a department')
                : setDescriptionError('');
        break;
      case 'campus_id':
        errors.campus_id =
            value == null
                ? setCampusError('Campus cannot be null! Please select a campus')
                : setCampusError('');
        break;
      default:
        break;
    }
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
        window.location = "/student/project";
      }
    }
    toastr.success('Successfully added new fyp/proposal', 'Success Message', opts);
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
    toastr.error('Failed to add fyp/proposal details', 'Failure Message', opts);
  }

  const handleSubmitClick = (e) => {
    e.preventDefault()

    window.scrollTo(0, 0)
    const payload = {
      name: state.name,
      type: state.type,
      desc: state.description,
      department_id: state.department_id
    }
    api.store('fyps',payload)
        .then(response => {
          success_message()
        })
        .catch(err => {
          toastr.error(err, 'Error')
          console.log("Failed to add new fyp.. ", err)
        })
  }
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
  return (
      <>
        <h2>Add FYP</h2>
        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary" data-collapsed="0">
              <div className="panel-heading">
                <div className="panel-title">Please add your FYP details here</div>

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
                              placeholder="FYP Title"
                              name="name"
                              value={state.name}
                              id={'name'}
                              onChange={handleChange}
                          />
                          {nameError && <span style={{color: 'red'}}>{nameError}</span>}
                        </div>
                        <div className="form-group col-lg-2 col-md-2 col-sm-0">
                        </div>
                        <div className="form-group col-lg-5 col-md-5 col-sm-12">
                          <label className="control-label">FYP Type</label>
                          <select id={'type'} onClick={handleChange} className="form-control" name="admin_add_fyp_type">
                            <option value="" selected disabled={true}>Select an Option</option>
                            <option value={'android'}>Android</option>
                            <option value={'ios'}>IOS</option>
                            <option value={'web'}>Web</option>
                            <option value={'android/ios'}>Android/IOS</option>
                            <option value={'web/android'}>Web/Android</option>
                            <option value={'others'}>Others</option>
                          </select>
                          {typeError && <span style={{color: 'red'}}>{typeError}</span>}
                        </div>

                        <div className="form-group col-lg-5 col-md-5 col-sm-12">
                          <label className="control-label">Select Campus</label>
                          <select onClick={handleChange} className="form-control" name="campus_id" id={'campus_id'} onChange={changeCampus}>
                            <option value="" selected={true} disabled={true}>Select Campus</option>
                            {dataLoaded && campusData.map(data => (
                                    <>
                                      {state.campus_id = data.id}
                                      <option value={data.id}>{data.name}</option>
                                    </>
                                )

                            )}
                          </select>
                          {campusError && <span style={{color: 'red'}}>{campusError}</span>}
                        </div>

                        <div className="form-group col-lg-2 col-md-2 col-sm-0">
                        </div>

                        <div className="form-group col-lg-5 col-md-5 col-sm-12">
                          <label className="control-label">Select Department</label>
                          <select onClick={handleChange} className="form-control" name="department_id" id={'department_id'}>
                            <option value="" selected={true} disabled={true}>Select Department</option>
                            {dataLoaded && departmentData && departmentData.map(data => (
                                    <>
                                      <>{state.department_id = data.id}</>
                                      <option value={state.department_id}>{data.name}</option>
                                    </>
                                )
                            )}
                          </select>
                          {departmentError && <span style={{color: 'red'}}>{departmentError}</span>}
                        </div>

                        {/*can use has-error class here in form-group for errors */}
                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                          <label className="control-label" htmlFor="about">
                            Write your fyp description here
                          </label>
                          <textarea
                              className="form-control autogrow"
                              name="admin_add_fyp_description"
                              id="about"
                              data-validate="minlength[10]"
                              rows="5"
                              placeholder="FYP Description..."
                              aria-invalid="true"
                              aria-describedby=""
                              value={state.description}
                              id={'description'}
                              onChange={handleChange}
                              style={{
                                overflow: "hidden",
                                overflowWrap: "break-word",
                                resize: "horizontal",
                                height: "98",
                              }}
                          ></textarea>
                          {descriptionError && <span style={{color: 'red'}}>{descriptionError}</span>}
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-5">
                          <button
                              onClick={handleSubmitClick}
                              className={'btn btn-primary btn-block btn-login'}
                          >
                            Add FYP Proposal
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
  );
};
