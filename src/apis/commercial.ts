import http from './http';

export function getCommercialImgs () {
  return http.get('/commercial.json');
}
