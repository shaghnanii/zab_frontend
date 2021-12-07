import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN_NAME } from "../_general_components/_api/apiconstants";
import auth from "../protected_routes/auth";

import api from '../../routes/api'
import toaster from "toastr";

export const Login = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
    errors: {
      email: '',
      password: '',
      reset_msg: '',
    }
  });
  const [errors, setErrors] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [resetMessage, setResetMessage] = useState(false)
  const [checkLogin , setCheckLogin] = useState(true)

  const handleChange = (e) => {
    const { id, value } = e.target;
    let errors = state.errors;
    switch (id){
      case 'email':
        errors.email =
            value.length < 5
                ? setEmailError("Email address must be 5 at least characters long!")
                : setEmailError('');
        break;
      case 'password':
        errors.password =
            value.length < 6
                ? setPasswordError('Password must be at least 6 characters long!')
                : setPasswordError('');
        break;
      default:
        break;
    }
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    api.profile()
        .then(response => {
          if (response.data.data.password_status === false && response.data.data.Role.name === 'student'){
            console.log("checking inside student false condition: with data ", response.data.data)
            props.history.push('/complete-profile')
          }
          else if (response.data.data.password_status === true && response.data.data.Role.name === 'student'){
            console.log("checking inside student true condition: with data ", response.data.data)
            props.history.push('/student/home')
          }
          else if (response.data.data.Role.name === 'admin') {
            console.log("checking inside admin condition: with data ", response.data.data)
            props.history.push('/admin/dashboard')
          }
          else if (response.data.data.password_status === false && response.data.data.Role.name === 'pm'){
            console.log("checking inside pm false condition: with data ", response.data.data)
            props.history.push('/complete-profile')
          }
          else if(response.data.data.password_status === true && response.data.data.Role.name === 'pm'){
            console.log("checking inside pm true condition: with data ", response.data.data)
            props.history.push('/pm/home')
          }
          else if (response.data.data.password_status === false && response.data.data.Role.name === 'supervisor'){
            console.log("checking inside supervisor false condition: with data ", response.data.data)
            props.history.push('/complete-profile')
          }
          else if (response.data.data.password_status === true && response.data.data.Role.name === 'supervisor'){
            console.log("checking inside supervisor true condition: with data ", response.data.data)
            props.history.push('/supervisor/home')
          }
          else {
            console.log("checking inside else condition", response.data.data)
          }
        })
        .catch(err => {
          // set erros here
          setCheckLogin(false)
        })
    if (
        props.location.state !== undefined &&
        props.location.state.detail !== undefined &&
        props.location.state.detail !== null
    ) {
      setErrors(true)
    }
    if (
        props.location.state !== undefined &&
        props.location.state.reset_message !== undefined &&
        props.location.state.reset_message !== null
    ){
      setResetMessage(true)
    }
  }, []);

  // const addDays = (days) => {
  //   let date = Date();
  //   date.setDate(date.getDate() + days);
  //   return date;
  // }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
    };
    api.login(payload)
        .then(response => {
          setState((prevState) => ({
            ...prevState,
            successMessage: "Login successful. Checking User Role...",
          }));
          console.log("loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn: ", response)
          localStorage.setItem('login_access_token', response.data.access_token);
          localStorage.setItem("IS_AUTH", true);

          const token = localStorage.getItem(ACCESS_TOKEN_NAME);
          auth.login(response.data.data.Role.name, () => {
            localStorage.setItem("check_user_details", 'true')
            if (response.data.data.Role.name === "admin") {
              props.history.push("/admin/dashboard");
            } else if (response.data.data.Role.name === "student") {
              console.log("DATAA: ", response)
              if (response.data.data.password_status === false){
                props.history.push('/complete-profile')
              }
              else {
                props.history.push("/student/home");
              }
            } else if (response.data.data.Role.name === "pm") {
              if (response.data.data.password_status === false){
                props.history.push("/complete-profile");
              }
              else {
                props.history.push("/pm/home");
              }
            } else if (response.data.data.Role.name === "supervisor") {
              if (response.data.data.password_status === false){
                props.history.push("/complete-profile");
              }
              else {
                props.history.push("/supervisor/home");
              }
            }
          });
        })
        .catch(err => {
          // setEmailError(err)
          toaster['error'](err)
          // redirectToLogin(err.response.data.message);
        })
  };

  const redirectToLogin = (msg) => {
    props.history.push({
      pathname: "/auth/login",
      state: { detail: msg },
    });
  };

  return checkLogin ? (
      <div className={'loaderparent'}>
        <div className="loader"></div>
      </div>
  ) : (
    <div className="container">
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Login</h1>
        {errors ? (
          <div className="alert alert-danger">
            {props.location.state.detail}
            {(props.location.state.detail = null)}
          </div>
        ) : (
          ""
        )}
        {resetMessage ?
        <div className={'alert alert-success'}>
          {props.location.state.reset_message}
          {(setResetMessage(false))}

        </div>
        : ("")
        }

        <form name="form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              id="email"
              className="form-control"
              value={state.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>
          {emailError && <span style={{color: 'red'}}>{emailError}</span>}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={state.password}
              onChange={handleChange}
              required
            />
          </div>
          {passwordError && <span style={{color: 'red'}}>{passwordError}</span>}

          <div className="col-auto">
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
              />
              <label className="form-check-label" for="autoSizingCheck">
                Remember me
              </label>
            </div>
          </div>

          <div className="form-group">
            <button
              onClick={handleSubmitClick}
              className="btn btn-info form-control"
            >
              Login
            </button>
          </div>
        </form>
        <p>
          Forget Password ? <Link to={"/auth/forget"}>Click Here</Link>
        </p>

        <p>
          Need an account?{" "}
          <a href="javascript:void(0);">Contact Admin/Management to create an account for you.</a>
        </p>
      </div>
    </div>
  );
};
