import * as actionTypes from '../constants/userinfo'

export function updata(data) {
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  }
}