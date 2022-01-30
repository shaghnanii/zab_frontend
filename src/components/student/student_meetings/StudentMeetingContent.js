import React, {useEffect, useState} from "react";
import api from "../../../routes/api";
import toastr from "toastr";

export const StudentMeetingContent = () => {
  const [comments, setComments] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    api.index('/student-comments')
        .then(response => {
          console.log('response meeting comments: ', response)
          setComments(response.data.data);
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
        window.location = "/student/comments";
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
        window.location = "/student/comments";
      }
    }
    toastr.error('Failed to add new fyp', 'Failure Message', opts);
  }

  return (<>
    <ol className="breadcrumb bc-3">
      <li><a href="/student"><i className="fa fa-home"></i>Home</a></li>
      <li><a href="javascript:void(0);">Supervisors</a></li>
      <li className="active"><strong>Supervisor Comments</strong></li>
    </ol>

    <h2>Supervisor Comments </h2>

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
                  <th width="16%">Project Type</th>
                  <th>Contact</th>
                  <th>Attendance Status</th>
                  <th>Supervisor Comment</th>
                </tr>
                </thead>
                <tbody>
                { loader
                    && comments
                    && comments.Student
                    && comments.Student.Group
                    && comments.Student.Group.Fyp
                    && comments.Student.Group.Fyp.Attendances.map(item =>
                <tr>
                  <td><span className="custom_colored_text_bold">{ comments.reg_id}</span></td>
                  <td>
                    {comments.Student.name}
                  </td>
                  <td>
            <span className="custom_colored_text_normal">
              {comments.Student.Group.Fyp.name}
            </span>
                  </td>
                  <td>{(comments.Student.Group.Fyp.type).toUpperCase()}</td>
                  <td>{ comments.Student.Group.name}</td>
                  <td>
                    {item.status && item.status}
                  </td>
                  <td>
                    {item.Comment && item.Comment.comment ? item.Comment.comment : 'NA'}
                </td>
                </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        </>


  </>);
};
