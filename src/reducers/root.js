import {combineReducers} from 'redux';
import {hosts} from "./hosts";


const rootReducer = combineReducers({
  hosts
});

export default rootReducer;