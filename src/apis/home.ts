import http from './http';

export function getHomeImgs () {
  return http.get('/mock/home.json');
}
