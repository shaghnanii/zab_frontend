import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "toastr/build/toastr.min.css";
import { Login } from "./components/auth/Login";
import { WelcomePage } from "./components/Welcome/WelcomePage";
import { AdminProtectedRoute } from "./components/protected_routes/AdminProtectedRoute";
import { StudentProtectedRoute } from "./components/protected_routes/StudentProtectedRoute";
import { PMProtectedRoute } from "./components/protected_routes/PMProtectedRoute";
import { SupervisorProtectedRoute } from "./components/protected_routes/SupervisorProtectedRoute";

import { Err_404 } from "./components/errors_page/Err_404";
import { ForbiddenPage } from "./components/errors_page/ForbiddenPage";
import { AdminDashboard } from "./components/admin/AdminDashboard";

import { AdminAddFyp } from "./components/admin/admin_fyp/AdminAddFyp";
import { AdminFypList } from "./components/admin/admin_fyp/AdminFypList";

import { AdminStudentList } from "./components/admin/admin_student/AdminStudentList";
import { AdminAddStudent } from "./components/admin/admin_student/AdminAddStudent";
import { AdminAddSupervisor } from "./components/admin/admin_supervisor/AdminAddSupervisor";
import { AdminSupervisorList } from "./components/admin/admin_supervisor/AdminSupervisorList";
import { AdminAddPM } from "./components/admin/admin_pm/AdminAddPM";
import { AdminPMList } from "./components/admin/admin_pm/AdminPMList";
import { StudentHome } from "./components/student/StudentHome";
import { StudentFyp } from "./components/student/student_fyp/StudentFyp";
import { StudentMeeting } from "./components/student/student_meetings/StudentMeeting";
import { StudentResult } from "./components/student/student_results/StudentResult";
import { StudentSupervisor } from "./components/student/student_supervisor/StudentSupervisor";
import { StudentFypProposal } from "./components/student/student_proposal/StudentFypProposal";
import { StudentAttendance } from "./components/student/student_attendance/StudentAttendance";
import { Logout } from "./components/auth/Logout";
import { Forgot } from "./components/auth/Forgot";
import { PMHome } from "./components/pm/PMHome";
import { SupervisorHome } from "./components/supervisor/SupervisorHome";
import {FypOneAttendance} from "./components/supervisor/attendance/fyp_one/FypOneAttendance";
import {FypTwoAttendance} from "./components/supervisor/attendance/fyp_two/FypTwoAttendance";
import {FypOneList} from "./components/supervisor/fyp_lists/fyp_one/FypOneList";
import {FypTwoList} from "./components/supervisor/fyp_lists/fyp_two/FypTwoList";
import {FypOneMeeting} from "./components/supervisor/meetings/fyp_one/FypOneMeeting";
import {FypTwoMeeting} from "./components/supervisor/meetings/fyp_two/FypTwoMeeting";
import {PMSupervisorListing} from "./components/pm/supervisor_listing/PMSupervisorListing";
import {PMMeetingPartOneListing} from "./components/pm/meeting_listing/one/PMMeetingPartOneListing";
import {PMMeetingPartTwoListing} from "./components/pm/meeting_listing/two/PMMeetingPartTwoListing";
import {PMAttendanceOneListing} from "./components/pm/attendance_listing/fyp_one/PMAttendanceOneListing";
import {PMAttendanceTwoListing} from "./components/pm/attendance_listing/fyp_two/PMAttendanceTwoListing";
import {PMFypTwoListing} from "./components/pm/fyp_listing/fyp_two/PMFypTwoListing";
import {PMFypOneListing} from "./components/pm/fyp_listing/fyp_one/PMFypOneListing";
import {Reset} from "./components/auth/Reset";
import { LOGIN_EXPIRE } from "./components/_general_components/_api/apiconstants";

import { Provider } from "react-redux";
import store from "./Redux/store";
import {StudentCompleteProfile} from "./components/student/CompleteProfile/StudentCompleteProfile";

import './custom.css';
import {AdminFypViewDetails} from "./components/admin/admin_fyp/view_details/AdminFypViewDetails";

function App() {
  const [currentDateTime, setCurrentDateTime] = useState();

  // useEffect(() => {
  //   if (localStorage.getItem(LOGIN_EXPIRE) == 'true'){
  //     localStorage.removeItem();
  //   }
  // }, []);
  return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route path={"/"} exact component={WelcomePage} />
              <Route path={"/auth/login"} component={Login} />
              <Route path={'/auth/forget'} component={Forgot} />
              <Route path={'/auth/reset'} component={Reset} />

              {/* admin routes starts here  */}
              <AdminProtectedRoute
                path="/admin/dashboard"
                component={AdminDashboard}
              />
              <AdminProtectedRoute path="/admin/add-fyp" component={AdminAddFyp} />
              <AdminProtectedRoute
                path="/admin/fyp-list"
                exact
                component={AdminFypList}
              />
              <AdminProtectedRoute
                path="/admin/add-student"
                component={AdminAddStudent}
              />
              <AdminProtectedRoute
                path="/admin/student-list"
                component={AdminStudentList}
              />

              <AdminProtectedRoute
                path="/admin/add-supervisor"
                component={AdminAddSupervisor}
              />
              <AdminProtectedRoute
                path="/admin/supervisor-list"
                component={AdminSupervisorList}
              />

              <AdminProtectedRoute path="/admin/add-pm" component={AdminAddPM} />
              <AdminProtectedRoute path="/admin/pm-list" component={AdminPMList} />

              <AdminProtectedRoute path={'/admin/fyp-list/view-details'} component={AdminFypViewDetails} />
              {/* admin routes ends here  */}

              {/* student routes starts here  */}
              <Route path={'/complete-profile'} component={StudentCompleteProfile} />

              <StudentProtectedRoute path="/student/home" component={StudentHome} />

              <StudentProtectedRoute
                path="/student/project"
                component={StudentFyp}
              />

              <StudentProtectedRoute
                path="/student/supervisor-comments"
                component={StudentMeeting}
              />

              <StudentProtectedRoute
                path="/student/student-result"
                component={StudentResult}
              />

              <StudentProtectedRoute
                path="/student/student-attendance"
                component={StudentAttendance}
              />

              <StudentProtectedRoute
                path="/student/request-supervisor"
                component={StudentSupervisor}
              />

              <StudentProtectedRoute
                path="/student/proposal"
                component={StudentFypProposal}
              />

              {/* student routes ends here  */}

              {/* PM routes start here  */}
              <PMProtectedRoute path="/pm/home" component={PMHome} />

              <PMProtectedRoute path="/pm/fyp-one" component={PMFypOneListing} />
              <PMProtectedRoute path="/pm/fyp-two" component={PMFypTwoListing} />

              <PMProtectedRoute path="/pm/supervisors-list" component={PMSupervisorListing} />

              <PMProtectedRoute path="/pm/meetings-part-one" component={PMMeetingPartOneListing} />
              <PMProtectedRoute path="/pm/meetings-part-two" component={PMMeetingPartTwoListing} />

              <PMProtectedRoute path="/pm/attendance-part-one" component={PMAttendanceOneListing} />
              <PMProtectedRoute path="/pm/attendance-part-two" component={PMAttendanceTwoListing} />
              {/* PM routes ends here  */}

              {/* Supervisor routes starts here  */}
              <SupervisorProtectedRoute
                path="/supervisor/home"
                component={SupervisorHome}
              />

              <SupervisorProtectedRoute
                  path="/supervisor/fyp-list-1"
                  component={FypOneList}
              />

              <SupervisorProtectedRoute
                  path="/supervisor/fyp-list-2"
                  component={FypTwoList}
              />

              <SupervisorProtectedRoute
                  path="/supervisor/meetings-fyp-1"
                  component={FypOneMeeting}
              />

              <SupervisorProtectedRoute
                  path="/supervisor/meetings-fyp-2"
                  component={FypTwoMeeting}
              />

              <SupervisorProtectedRoute
                  path="/supervisor/all-attendance-fyp-1"
                  component={FypOneAttendance}
              />

              <SupervisorProtectedRoute
                  path="/supervisor/all-attendance-fyp-2"
                  component={FypTwoAttendance}
              />
              {/* Supervisor routes ends here  */}
              <Route path="/forbidden-page" component={ForbiddenPage} />
              <Route path="/auth/logout" component={Logout} />
              <Route path="*" component={Err_404} />
            </Switch>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
