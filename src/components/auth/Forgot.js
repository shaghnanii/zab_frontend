import React, {useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import {ACCESS_TOKEN_NAME} from "../_general_components/_api/apiconstants";

export const Forgot = (props) => {
    const [state, setState] = useState({
        email: '',
        successMessage: ''
    })
    const [errMsg, setErrMsg] = useState('')

    const handleChange = (e) => {
        const {id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            email: state.email
        }
        const token = localStorage.getItem(ACCESS_TOKEN_NAME);
        axios.post(process.env.REACT_APP_BACKEND_API_URL + '/forgot-password', payload)
            .then(function (response) {
                setState((prevState) => ({
                    ...prevState,
                    successMessage: "Successfully sent email to the registered number.",
                }))
                console.log("return form the API CALL")
                if (response.data.status == 404){
                    console.log("on 404 error", response)
                    setErrMsg(response.data.message)
                }
                else {
                    console.log('on success forwarding with the response', state.email)
                    props.history.push({
                        pathname: '/auth/reset',
                        state: {email_address: state.email}
                    });
                }
            })
            .catch(err => {
                console.log("Error on forgot password: ", err)
                props.history.push('/auth/forget');
            })
    }

    return (
        <div className="container">
            <div className="col-sm-6 col-sm-offset-3">
                <h1>Forget Password</h1>
                {errMsg ? <div className="alert alert-danger">{errMsg}</div> : <></>}
                    <form name={"form"}>
                        <div className="form-group">
                            <label>Email</label>
                            <input id={"email"} type="email" className="form-control" name="email" value={state.email} onChange={handleChange} required />
                            {/*<small className="" role="alert" style={{color: "red" }}>error_msg</small>*/}
                        </div>

                        <button onClick={handleSubmitClick} className="btn btn-info">Send Reset Email</button>
                    </form>

                    <hr/>
                    <p>Back to Login ? <Link to={"/auth/login"}>Back to Login</Link></p>

                    <p>Need an account? <a href="javascript:void(0);">Contact Admin/Management to create an account for you.</a></p>
                    </div>
                    </div>
    );
}