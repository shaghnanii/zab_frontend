import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './UserTypes'

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
            .get(process.env.REACT_APP_BACKEND_API_URL + '/api/users')
            .then(response => {
                // response.data is the users
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}