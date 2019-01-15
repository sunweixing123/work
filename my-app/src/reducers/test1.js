const initState = {}
export default function test1(state = initState, action) {
  switch(action.type) {
    case 'test':
    return 'lalala'
    default :
    return 'not find'
  }
}