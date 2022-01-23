import api from "../../routes/api";
class Auth {
  constructor() {
    // this.authenticated = false;
  }

  login(role, cb) {
    console.log(
      "++++++++++++++++++++++++++++++++++++++++++++++ CHECKING ROLE: ",
      role
    );
    localStorage.setItem("CHECK_ROLE", role);
    localStorage.setItem("IS_AUTH", true);
    cb();
  }

  logout(cb) {
    localStorage.setItem("CHECK_ROLE", "null");
    localStorage.setItem("IS_AUTH", false);
    cb();
  }

  isAuthenticated() {
    return localStorage.getItem("IS_AUTH");
  }

  isAdmin() {
    if (localStorage.getItem("CHECK_ROLE") == "admin") {
      return true;
    } else {
      return false;
    }
  }
  isStudent() {
    if (localStorage.getItem("CHECK_ROLE") == "student") {
      return true;
    } else {
      return false;
    }
  }
  isStudentProfileComplete() {
    if (localStorage.getItem('check_user_details') == 'false'){
      return false
    }
    else {
      return true;
    }
  }

  isSupervisor() {
    if (localStorage.getItem("CHECK_ROLE") == "supervisor") {
      return true;
    } else {
      return false;
    }
  }

  isPM() {
    if (localStorage.getItem("CHECK_ROLE") == "pm") {
      return true;
    } else {
      return false;
    }
  }
}

export default new Auth();
