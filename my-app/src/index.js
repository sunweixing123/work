import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import RouterComponent from './router/app-router';
import configureStore from './store/configureStore';
import { getData, postData } from './fetch/getdata';

// 创建 Redux 的 store 对象
const store = configureStore()
getData();
postData();
render(
  <Provider store={store}>
    <RouterComponent/> 
  </Provider>,
  document.getElementById('root')
);
