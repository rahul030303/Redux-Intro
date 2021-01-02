import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import loggedReducer from './isLogged';


const allReducers = combineReducers({
    counter:  counterReducer, 
    logged:   loggedReducer
})

export default allReducers;