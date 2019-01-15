import { combineReducers } from 'redux';
import userinfo from './userinfo';
import test1 from './test1';

export default combineReducers({
  userinfo, //combineReducers用来把多个Reducer合并成
  test1,
})