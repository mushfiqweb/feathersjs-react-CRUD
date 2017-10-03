import { apiClientDev } from './';

const url = '/students';

export function fetchStudents() {
    return dispatch => {
        dispatch({
            type: 'FETCH_Students',
            payload: apiClientDev.get(url)
        })
    }
}

export function newStudent() {
    return dispatch => {
        dispatch({
            type: 'NEW_Student'
        })
    }
}

export function saveStudent(Student) {
    return dispatch => {
        return dispatch({
            type: 'SAVE_Student',
            payload: apiClientDev.post(url, Student)
        })
    }
}

export function fetchStudent(_id) {
    return dispatch => {
        return dispatch({
            type: 'FETCH_Student',
            payload: apiClientDev.get(`${url}/${_id}`)
        })
    }
}

export function updateStudent(Student) {
    return dispatch => {
        return dispatch({
            type: 'UPDATE_Student',
            payload: apiClientDev.put(`${url}/${Student._id}`, Student)
        })
    }
}

export function deleteStudent(_id) {
    return dispatch => {
        return dispatch({
            type: 'DELETE_Student',
            payload: apiClientDev.delete(`${url}/${_id}`)
        })
    }
}

export function sendEmail(email) {
    return dispatch => {
        return dispatch({
            type: 'SAVE_EMAIL',
            payload: apiClientDev.post('/mailer', email)
        })
    }
}
