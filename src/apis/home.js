import http from './http';

export function getHomeImgs () {
  return http.get('http://mockbin.com/request?foo=bar&foo=baz');
}
