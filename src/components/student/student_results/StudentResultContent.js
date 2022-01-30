import React, {useEffect, useState} from "react";
import api from "../../../routes/api";
import toastr from "toastr";

export const StudentResultContent = () => {
  const [results, setResults] = useState({});
  const [loader, setLoader] = useState(false);
  const [total, setTotal] = useState(0);
  const [marks, setMarks] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    api.index('/student-results')
        .then(response => {
          console.log('response result: ', response)
          setResults(response.data.data);
          setTotal(response.data.total)
          setMarks(response.data.marks)
          setPercentage(response.data.percentage)
          setLoader(true)
        })
        .catch(err => {
          console.log('err: ', err)
          setLoader(false)
        })
  }, [])

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
        window.location = "/student/results";
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
        window.location = "/student/results";
      }
    }
    toastr.error('Failed to show results', 'Failure Message', opts);
  }
  return (<>
    <ol className="breadcrumb bc-3">
      <li><a href="/student"><i className="fa fa-home"></i>Home</a></li>
      <li><a href="javascript:void(0);">Results</a></li>
    </ol>

    <h2>Student Results </h2>

    <br/>
    <>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered table-hover responsive">
            <thead>
            <tr>
              <th width="15%">Reg No.</th>
              <th>Name</th>
              <th>Project Name</th>
              <th>Fyp</th>
              <th>Obtained Marks</th>
              <th>Total Marks</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            { loader
                && results
                && results.Student
                && results.Student.Group.Fyp &&
                results.Student.Group.Fyp.Results.map(item =>
                    <tr>
                      <td><span className="custom_colored_text_bold">{ results.reg_id}</span></td>
                      <td>
                        {results.Student.name}
                      </td>
                      <td>
            <span className="custom_colored_text_normal">
              {results.Student.Group.Fyp.name}
            </span>
                      </td>
                      <td>
                        {item.level == 1 ? 'FYP I' : 'FYP II'}
                      </td>
                      <td>{ item.marks}</td>
                      <td>
                        {item.total}
                      </td>
                      <td>
                        {item.marks && item.marks > 60 ?
                            <span style={{'color': 'green', 'font-weight': 'bold'}}>PASS</span>
                            :
                            <span style={{'color': 'red', 'font-weight': 'bold'}}>FAIL</span>}
                      </td>
                    </tr>
            )}
            <tr>
              <td colspan="4"></td>
              <td>{ marks }</td>
              <td>{ total }</td>
              <td>Percentage: {percentage} %</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>


  </>);
};
