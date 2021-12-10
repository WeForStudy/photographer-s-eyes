import http from './http';
export function getPortraitImgs () {
  return http.get('/portrait.json');
}
