import { combineReducers } from 'redux';
import * as userinfo from './userinfo';
import * as test1 from './test1';


const rootReducer = combineReducers({
  userinfo,
  test1,
})

export default rootReducer;

