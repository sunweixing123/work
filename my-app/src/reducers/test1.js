const initState = {}
export default function test1(state = initState, action) {
  console.log('lalalalala');
  console.log(action); //传过来的action还是userinfo的action，可能是父组件的index里重新赋了一次值
  switch(action.type) {
    case 'test':
    return 'lalala'
    default :
    return 'not find'
  }
}