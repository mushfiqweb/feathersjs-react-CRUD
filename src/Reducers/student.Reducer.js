const defaultState = {
    students: [],
    student: { name: {} },
    loading: false,
    errors: {},
    emailed:false
}

export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case 'FETCH_Students_FULFILLED': {
            return {
                ...state,
                students: action.payload.data.data,
                loading: false,
                errors: {}
            }
        }

        case 'FETCH_Students_PENDING': {
            return {
                ...state,
                loading: true,
                errors: {}
            }
        }

        case 'FETCH_Students_REJECTED': {
            return {
                ...state,
                loading: false,
                errors: { global: action.payload.message }
            }
        }

        case 'NEW_Student': {
            return {
                ...state,
                student: { name: {} }
            }
        }

        case 'SAVE_Student_PENDING': {
            return {
                ...state,
                loading: true
            }
        }

        case 'SAVE_Student_FULFILLED': {
            return {
                ...state,
                students: [...state.students, action.payload.data],
                errors: {},
                loading: false
            }
        }

        case 'SAVE_Student_REJECTED': {
            const data = action.payload.response.data;
            // convert feathers error formatting to match client-side error formatting
            const { "name.first": first, "name.last": last, phone, email } = data.errors;
            const errors = { global: data.message, name: { first, last }, phone, email };
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }

        case 'FETCH_Student_PENDING': {
            return {
                ...state,
                loading: true,
                student: { name: {} }
            }
        }

        case 'FETCH_Student_FULFILLED': {
            return {
                ...state,
                student: action.payload.data,
                errors: {},
                loading: false
            }
        }

        case 'UPDATE_Student_PENDING': {
            return {
                ...state,
                loading: true
            }
        }

        case 'UPDATE_Student_FULFILLED': {
            const student = action.payload.data;
            return {
                ...state,
                students: state.students.map(item => item._id === student._id ? student : item),
                errors: {},
                loading: false
            }
        }

        case 'UPDATE_Student_REJECTED': {
            const data = action.payload.response.data;
            const { "name.first": first, "name.last": last, phone, email } = data.errors;
            const errors = { global: data.message, name: { first, last }, phone, email };
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }

        case 'DELETE_Student_FULFILLED': {
            const _id = action.payload.data._id;
            return {
                ...state,
                students: state.students.filter(item => item._id !== _id)
            }
        }

        case 'SAVE_EMAIL_FULFILLED': {            
            return {
                ...state,
                errors: {},
                emailed: true
            }
        }            
        default:
            return state;
    }
}
