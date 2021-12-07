import http from './http';

export function getLandscapeImgs () {
  return http.get('/landscape.json');
}
