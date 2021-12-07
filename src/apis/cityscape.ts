import http from './http';
export function getCityscapeImgs () {
  return http.get('/cityscape.json');
}
