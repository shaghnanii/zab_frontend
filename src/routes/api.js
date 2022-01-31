import { merge } from "lodash";
import axios from "../axios-setup";
// import toastr from "toastr";
// import { ACCESS_TOKEN_NAME } from "../components/_general_components/_api/apiconstants";

const getHeaders = (headers) => {
    const bearer_token = localStorage.getItem('login_access_token');
    const defaultHeaders = {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearer_token}`,
    };
    return merge({}, defaultHeaders, headers);
};

const login = async (data, headers = {}) => {
    try {
        return axios.post("/auth/login", data, {
            headers: getHeaders(headers),
        });
    } catch (err) {
        console.log('err', err)
        throw err.response;
    }
};
const profile = async (headers = {}) => {
    try {
        return axios.get("/profile", {
            headers: getHeaders(headers),
        });
    } catch (err) {
        throw err.response;
    }
};
const dropdown_data = async (headers = {}) => {
    try {
        return axios.get("/dropdown-data", {
            headers: getHeaders(headers)
        });
    } catch (err) {
        throw err.response;
    }
};

const dropdown_departments = async (data, headers = {}) => {
    try {
        return axios.post("/dropdown-departments", data);
    } catch (err) {
        throw err.response;
    }
};

const complete_profile = async (data, headers = {}) => {
    try {
        return axios.post('/complete-profile', data, {
            headers: getHeaders(headers),
        })
    }
    catch(err) {
        throw err.response;
    }
}

// student routes start here
const student_index = async (headers = {}) => {
    try {
        return axios.get('/students', {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const student_update = async (data, id, headers = {}) => {
    try {
        return axios.put(`/students/${id}`, data, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const student_destroy = async (id, headers = {}) => {
    try {
        return axios.delete(`/students/${id}`, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}
// Student routes ends here


// pm routes starts here

const pm_index = async (headers = {}) => {
    try {
        return axios.get('/pms', {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const pm_update = async (data, id, headers = {}) => {
    try {
        return axios.put(`/pms/${id}`, data, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const pm_destroy = async (id, headers = {}) => {
    try {
        return axios.delete(`/pms/${id}`, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}
// pm routes ends here

// supervisor routes start here
const supervisor_index = async (headers = {}) => {
    try {
        return axios.get('/supervisors', {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const supervisor_show = async (headers = {}) => {
    try {
        return axios.get('/supervisors/me', {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const supervisor_update = async (data, id, headers = {}) => {
    try {
        return axios.put(`/supervisors/${id}`, data, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const supervisor_destroy = async (id, headers = {}) => {
    try {
        return axios.delete(`/supervisors/${id}`, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}
// supervisor routes end here


// admin routes
const admin_fyp_index = async (headers = {}) => {
    try {
        return axios.get('/admin/fyps', {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const admin_fyp_store = async (data, headers = {}) => {
    try {
        return axios.post(`/admin/fyps`, data, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const admin_fyp_update = async (data, id, headers = {}) => {
    try {
        return axios.put(`/admin/fyps/${id}`, data, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const admin_fyp_destroy = async (id, headers = {}) => {
    try {
        return axios.delete(`/admin/fyps/${id}`, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

// for students
const admin_student_index = async (headers = {}) => {
    try {
        return axios.get('/admin/students', {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const admin_student_store = async (data, headers = {}) => {
    try {
        return axios.post(`/admin/students`, data, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const admin_student_update = async (data, id, headers = {}) => {
    try {
        return axios.put(`/admin/students/${id}`, data, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const admin_student_destroy = async (id, headers = {}) => {
    try {
        return axios.delete(`/admin/students/${id}`, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

// for supervisors
const admin_supervisor_index = async (headers = {}) => {
    try {
        return axios.get('/admin/supervisors', {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const admin_supervisor_store = async (data, headers = {}) => {
    try {
        return axios.post(`/admin/supervisors`, data, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const admin_supervisor_update = async (data, id, headers = {}) => {
    try {
        return axios.put(`/admin/supervisors/${id}`, data, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const admin_supervisor_destroy = async (id, headers = {}) => {
    try {
        return axios.delete(`/admin/supervisors/${id}`, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

// for PMs
const admin_pm_index = async (headers = {}) => {
    try {
        return axios.get('/admin/pms', {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const admin_pm_store = async (data, headers = {}) => {
    try {
        return axios.post(`/admin/pms`, data, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const admin_pm_update = async (data, id, headers = {}) => {
    try {
        return axios.put(`/admin/pms/${id}`, data, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const admin_pm_destroy = async (id, headers = {}) => {
    try {
        return axios.delete(`/admin/pms/${id}`, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}
// admin routes end here


const index = async (route, headers = {}) => {
    try {
        return axios.get(route, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const show = async (route, id, headers = {}) => {
    try {
        return axios.get(route + `/${id}`, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const store = async (route, payload, headers = {}) => {
    try {
        return axios.post(route, payload, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const update = async (route, payload, id, headers = {}) => {
    try {
        return axios.put(route + `/${id}`, payload, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}

const destroy = async (route, id, headers = {}) => {
    try {
        return axios.delete(route + `/${id}`, {
            headers: getHeaders(headers)
        })
    }
    catch (err) {
        throw err.response
    }
}


export default {
    login,
    dropdown_data,
    dropdown_departments,
    profile,
    complete_profile,

    // students routes
    student_index,
    student_update,
    student_destroy,

    // pms routes
    pm_index,
    pm_update,
    pm_destroy,

    // supervisor routes
    supervisor_index,
    supervisor_show,
    supervisor_update,
    supervisor_destroy,


    // admin routes
    admin_fyp_index,
    admin_fyp_store,
    admin_fyp_update,
    admin_fyp_destroy,

    admin_student_index,
    admin_student_store,
    admin_student_update,
    admin_student_destroy,

    admin_supervisor_index,
    admin_supervisor_store,
    admin_supervisor_update,
    admin_supervisor_destroy,

    admin_pm_index,
    admin_pm_store,
    admin_pm_update,
    admin_pm_destroy,

    index,
    show,
    store,
    update,
    destroy,
}