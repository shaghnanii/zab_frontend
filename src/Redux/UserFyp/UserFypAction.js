import axios from 'axios'
import {
    ADD_USERS_FYP_REQUEST,
    ADD_USERS_FYP_SUCCESS,
    ADD_USERS_FYP_FAILURE
} from './UserFypTypes'
import {ACCESS_TOKEN_NAME} from "../../components/_general_components/_api/apiconstants";

export const addUsersFyp = (userFyp) => {
    return (dispatch) => {
        dispatch(addUsersFypRequest())
        const token = localStorage.getItem(ACCESS_TOKEN_NAME);
        axios
            .post(process.env.REACT_APP_BACKEND_API_URL + '/fyps/', userFyp, {
              headers: {
                Authorization: "Bearer " + token,
              },
            })
            .then(response => {
                // response.data is the users
                const users = response.data
                dispatch(addUsersFypSuccess(users))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(addUsersFypFailure(error.message))
            })
    }
}

export const addUsersFypRequest = () => {
    return {
        type: ADD_USERS_FYP_REQUEST
    }
}

export const addUsersFypSuccess = fyps => {
    return {
        type: ADD_USERS_FYP_SUCCESS,
        payload: fyps
    }
}

export const addUsersFypFailure = error => {
    return {
        type: ADD_USERS_FYP_FAILURE,
        payload: error
    }
}