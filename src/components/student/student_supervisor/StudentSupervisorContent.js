import React from "react";

export const StudentSupervisorContent = () => {
    return (<>
        <ol className="breadcrumb bc-3">
            <li><a href="/student"><i className="fa fa-home"></i>Home</a></li>
            <li><a href="javascript:void(0);">Supervisors</a></li>
            <li className="active"><strong>Supervision Request</strong></li>
        </ol>

        <h2>List of all available supervisors </h2>

        <br/>

        <div className="member-entry">
            <a href="#" className="member-img">
                <img src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg" className="img-rounded"/>
                <i className="entypo-forward"></i>
            </a>
            <div className="member-details"><h4>
                <a href="#">Sample Name</a></h4>
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
        <div className="member-entry">
            <a href="#" className="member-img">
                <img src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg" className="img-rounded"/>
                <i className="entypo-forward"></i>
            </a>
            <div className="member-details"><h4>
                <a href="#">Sample Name</a></h4>
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


    </>);
};
