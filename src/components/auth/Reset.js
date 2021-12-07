import React, {useState} from 'react'
import axios from "axios";
import {ACCESS_TOKEN_NAME} from "../_general_components/_api/apiconstants";
import {Link, Redirect} from "react-router-dom";

export const Reset = (props) => {
    const [errMsg, setErrMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const [codeError, setCodeError] = useState('')
    const [newPasswordError, setNewPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [state, setState] = useState({
        code: '',
        new_password: '',
        confirm_password: '',
        errors: {
            code: '',
            new_password: '',
            confirm_password: '',
        }
    })
    const redirectingBox = (msg) => {
        setErrMsg('')
        setSuccessMsg("Password Reset Successfully, Please login with your new password Now redirecting to Login page.")
        props.history.push({
            pathname: '/auth/login',
            state: {reset_message: 'Password Reset Successfully, Please login with your new password Now redirecting to Login page.'}
        })
    }
    const handleChange = (e) => {
        const {id, value } = e.target;
        let errors = state.errors;
        switch (id){
            case 'code':
                errors.code =
                    value.length != 5
                        ? setCodeError("Code must be 5 digit long!")
                        : setCodeError('');
                break;
            case 'new_password':
                errors.new_password =
                    value.length < 6
                        ? setNewPasswordError('Password must be at least 6 characters long!')
                        : setNewPasswordError('');
                break;
            case 'confirm_password':
                errors.confirm_password =
                    value.length < 6
                        ? setNewPasswordError('Password must be at least 6 characters long!')
                        : setNewPasswordError('');
                errors.confirm_password =
                    value != state.new_password
                        ? setNewPasswordError('New password and confirm password does not match.')
                        : setNewPasswordError('')
                break;
            default:
                break;
        }
        console.log("value: ", value)
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (state.new_password == state.confirm_password){
            const payload = {
                code: state.code,
                email: props.location.state.email_address,
                password: state.new_password,
            }
            axios.post(process.env.REACT_APP_BACKEND_API_URL + '/reset', payload)
                .then(response => {
                    if (response.data.status == 404){
                       setErrMsg(response.data.message)
                    }
                    else {
                        redirectingBox(response.data.message);
                    }
                })
                .catch(err => {
                    console.log("Error Found: ", err);
                })
        }
        else {
            setErrMsg("New password and confirm password does not match.")
        }
    }
    return (
        <div className="container">
            <div className="col-sm-6 col-sm-offset-3">
                <h1>Reset Password</h1>

                {errMsg ? <div className="alert alert-danger">{errMsg}</div> : <></>}
                {successMsg ? <div className="alert alert-success">{successMsg}</div> : <></>}

                    <form name={"form"}>
                    <div className="form-group">
                    <label>Code</label>
                    <input value={state.code} onChange={handleChange} id={'code'} type="number" className="form-control" name="code" required />
                        {codeError && <span style={{color: 'red'}}>{codeError}</span>}
                    </div>
                    <div className="form-group">
                    <label>New Password</label>
                    <input type="password" value={state.new_password} id={'new_password'} onChange={handleChange} className="form-control" name="new_password" required />
                        {newPasswordError && <span style={{color: 'red'}}>{newPasswordError}</span>}

                    </div>
                    <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" id={'confirm_password'} onChange={handleChange} value={state.confirm_password} name="confirm_password" required />
                        {confirmPasswordError && <span style={{color: 'red'}}>{confirmPasswordError}</span>}
                    </div>

                    <button onClick={handleSubmitClick} className="btn btn-info">Reset Password</button>
                    </form>

                    <hr/>
                    <p>Back to Login ? <Link to={"/auth/login"}>Back to Login</Link></p>

                    <p>Need an account? <a href="javascript:void(0);">Contact Admin/Management to create an account for you.</a></p>
                    </div>
                    </div>
    );
}