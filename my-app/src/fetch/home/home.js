import { get } from '../get';

export function getdata1() {
  const result = get('/api/homed');
  return result;
}

export function getdata2() {
  const result = get('/api/homed2');
  return result;
}

export function getList() {
  const result = get('api/list');
  return result;
}