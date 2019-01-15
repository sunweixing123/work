import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState,
    //第一个参数为Reducer，以后每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State。
    window.devToolExtension ? window.devToolsEctension() : undefined,
  )
  return store;
}