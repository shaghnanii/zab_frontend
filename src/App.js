import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import check_auth from '../src/components/protected_routes/auth'
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
import { StudentCreateGroup } from "./components/student/create_group/StudentCreateGroup";
import { StudentMeeting } from "./components/student/student_meetings/StudentMeeting";
import { StudentResult } from "./components/student/student_results/StudentResult";
import { StudentSupervisor } from "./components/student/student_supervisor/StudentSupervisor";
import { StudentFypProposal } from "./components/student/student_proposal/StudentFypProposal";
import { StudentAttendance } from "./components/student/student_attendance/StudentAttendance";
import { OneAttendanceDetail } from "./components/supervisor/attendance/fyp_one/details/OneAttendanceDetail";
import { TwoAttendanceDetail } from "./components/supervisor/attendance/fyp_two/details/TwoAttendanceDetail";
import { MarkAttendanceOne } from "./components/supervisor/attendance/fyp_one/mark/MarkAttendanceOne";
import { Logout } from "./components/auth/Logout";
import { Forgot } from "./components/auth/Forgot";
import { PMHome } from "./components/pm/PMHome";
import { SupervisorHome } from "./components/supervisor/SupervisorHome";
import {FypOneAttendance} from "./components/supervisor/attendance/fyp_one/FypOneAttendance";
import {FypTwoAttendance} from "./components/supervisor/attendance/fyp_two/FypTwoAttendance";
import {FypOneList} from "./components/supervisor/fyp_lists/fyp_one/FypOneList";
import {FypTwoList} from "./components/supervisor/fyp_lists/fyp_two/FypTwoList";
import {AcceptProposal} from "./components/supervisor/accept_or_reject_proposal/AcceptProposal";
import {response} from "./components/supervisor/accept_or_reject_proposal/response";

import {PmSupervisor} from "./components/pm/supervisor_listing/PmSupervisor";
import {PmMeetingOne} from "./components/pm/meeting_listing/one/PmMeetingOne";
import {PmMeetingTwo} from "./components/pm/meeting_listing/two/PmMeetingTwo";
import {PmAttedance} from "./components/pm/meeting_listing/one/PmAttendance";
import {PmAttendanceTwo} from "./components/pm/meeting_listing/two/PmAttendanceTwo";
import {AssessmentMain} from "./components/pm/assessment/AssessmentMain";
import {AssessmentTwoMain} from "./components/pm/assessment/AssessmentTwoMain";
import {AssessmentResult} from "./components/pm/assessment/AssessmentResult";
import {CreatePannel} from "./components/pm/pannel/create/CreatePannel";
import {ListPannel} from "./components/pm/pannel/list/ListPannel";

import {PmFypTwo} from "./components/pm/fyp_listing/fyp_two/PmFypTwo";
import {PmFypOne} from "./components/pm/fyp_listing/fyp_one/PmFypOne";
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
                  path="/student/group"
                  component={StudentCreateGroup}
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

              <PMProtectedRoute path="/pm/fyp-one" component={PmFypOne} />
              <PMProtectedRoute path="/pm/fyp-two" component={PmFypTwo} />

              <PMProtectedRoute path="/pm/supervisors-list" component={PmSupervisor} />

              <PMProtectedRoute path="/pm/pm-assessments-one" component={AssessmentMain} />
              <PMProtectedRoute path="/pm/pm-assessments-two" component={AssessmentTwoMain} />
              <PMProtectedRoute path="/pm/pm-assessments-results" component={AssessmentResult} />


              <PMProtectedRoute path="/pm/pannel-create" component={CreatePannel} />
              <PMProtectedRoute path="/pm/pannel-list" component={ListPannel} />

              <PMProtectedRoute path="/pm/meetings-and-comments-one" component={PmMeetingOne} />
              <PMProtectedRoute path="/pm/meetings-attendance" component={PmAttedance} />
              <PMProtectedRoute path="/pm/meetings-attendance-two" component={PmAttendanceTwo} />
              <PMProtectedRoute path="/pm/meetings-and-comments-two" component={PmMeetingTwo} />

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
                  path="/supervisor/attendance-and-meetings-part-1"
                  component={FypOneAttendance}
              />

              <SupervisorProtectedRoute
                  path="/supervisor/attendance-and-meetings-part-2"
                  component={FypTwoAttendance}
              />

              <SupervisorProtectedRoute
                  path="/supervisor/view-attendance-1"
                  component={OneAttendanceDetail}
              />

              <SupervisorProtectedRoute
                  path="/supervisor/mark-attendance"
                  component={MarkAttendanceOne}
              />

              <SupervisorProtectedRoute
                  path="/supervisor/view-attendance-2"
                  component={TwoAttendanceDetail}
              />

              <SupervisorProtectedRoute
                  path="/supervisor/accept-or-reject-proposals"
                  component={AcceptProposal}
              />
              <SupervisorProtectedRoute
                  path="/supervisor/response-on-proposal"
                  component={response}
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
