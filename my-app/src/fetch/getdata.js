import 'whatwg-fetch';
import 'es6-promise';
import {get} from './get';

export function getData() {
  // api/1  获取字符串
  const result = get('/api/1');
  return result;

}

export function postData() {
  //api/post  提交数据
  var result = fetch('/api/post', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    //注意修改post时的参数形式
    body: 'a=100&b=200'
  });

  result.then(res => {
    return res;
  }).then(json => {
    console.log(json);
  })
}