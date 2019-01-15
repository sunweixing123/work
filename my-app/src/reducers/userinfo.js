import * as actionTypes from '../constants/userinfo'

const initialState = {}

//Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。
//这种 State 的计算过程就叫做 Reducer。
//Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
export default function userinfo(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case actionTypes.USERINFO_UPDATE:
      return action.data
      default:
      return state
  }
}
