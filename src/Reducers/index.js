import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

//all reducers
import studentReducer from './student.Reducer';

const reducers = {
    studentStore: studentReducer,
    form: formReducer
}

const rootReducer = combineReducers({
    ...reducers
});

export default rootReducer;
