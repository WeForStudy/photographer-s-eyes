import http from './http';

export function getHomeImgs () {
  return http.get('/home.json');
}
