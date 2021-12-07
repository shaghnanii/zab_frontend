import {
    ADD_USERS_FYP_REQUEST,
    ADD_USERS_FYP_SUCCESS,
    ADD_USERS_FYP_FAILURE
} from './UserFypTypes'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS_FYP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_USERS_FYP_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case ADD_USERS_FYP_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer