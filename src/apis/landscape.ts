import http from './http';

export function getLandscapeImgs () {
  return http.get('/mock/landscape.json');
}
