import http from './http';
export function getArchitectureImgs () {
  return http.get('/architecture.json');
}
