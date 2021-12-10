import http from './http';
export function getLifescapeImgs () {
  return http.get('/lifescape.json');
}
