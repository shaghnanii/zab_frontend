import React from "react";

export const StudentFypProposalContent = () => {
  return (<>
    <ol className="breadcrumb bc-3">
      <li><a href="/student"><i className="fa fa-home"></i>Home</a></li>
      <li><a href="javascript:void(0);">FYP</a></li>
      <li className="active"><strong>Proposal</strong></li>
    </ol>

    <h2>FYP Proposal </h2>
    <br/>

    <div className="row">
      <div className="col-md-12">

        {/*{{#if success_msg}}*/}
        <div className="alert alert-success">succes_mg</div>
        {/*{{/if}}*/}
        {/*{{#if data}}*/}
        <table class="table table-bordered table-hover responsive">
          <thead>
          <tr>
            <th width="15%">Reg No.</th>
            <th>Name</th>
            <th>Project Name</th>
            <th width="16%">Project Type</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><span class="custom_colored_text_bold">regID</span></td>
            <td>
              Saud Khan
              <span class="custom_colored_text_bold">&</span>
              Asif Khan
            </td>
            <td>
            <span class="custom_colored_text_normal">
          title
            </span>
            </td>
            <td>type</td>
            <td>contact</td>
            <td>
              {/*if pending active */}
            </td>
            <td>
              <a href="javascript:void(0);" class="btn btn-success btn-sm btn-icon icon-left"> <i class="entypo-eye"></i>
                View Details
              </a>
            </td>
          </tr>
          </tbody>
        </table>
        {/*{{else}}*/}
        <div class="alert alert-danger">Currently there no proposal added. Please add/submit a new proposal.</div>
        <form class="form" action="/student/add-proposal" method="post">
          <label for="title">Enter Title *</label>
          <input class="form-control" type="text" name="title" placeholder="Title" required/>
          <label for="title">Enter Description *</label>
          <input class="form-control" type="text" name="desc" placeholder="Description" required/>
          <label for="title">Enter FYP Type *</label>
          <input class="form-control" type="text" name="type" placeholder="Type" required/>
          <br/>
          <button type="submit" class="btn btn-success btn-icon form-control">
            Add New Proposal
            <i class="entypo-plus"></i> </button>
        </form>
        {/*{{/if}}*/}

      </div>
    </div>

  </>);
};
