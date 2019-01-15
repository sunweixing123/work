import * as actionTypes from '../constants/userinfo'

//Action 描述当前发生的事情。改变State的唯一办法，就是使用 Action。它会运送数据到Store。
// action的格式就是对象，有type属性和data
export function update(data) { //更新数据
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  }
}