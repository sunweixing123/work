import * as actionTypes from '../constants/userinfo'

export function update(data) { //更新数据
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  }
}