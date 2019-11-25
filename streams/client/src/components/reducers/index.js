import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'; // change name of named export
import authReducer from './authReducer';
import streamsReducer from './streamsReducer';
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams:streamsReducer
});