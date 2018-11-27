import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import RouterComponent from './router/app-router';
import configureStore from './store/configureStore'

// 创建 Redux 的 store 对象
const store = configureStore()

render(
  <Provider store={store}>
    <RouterComponent/> 
  </Provider>,
  document.getElementById('root')
);
