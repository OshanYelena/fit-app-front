import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import instructor from './instructor'


export default combineReducers({
    alert,
    auth,
    profile,
    instructor

});