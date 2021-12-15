import http from './http';
export function getAllProjectsImgs () {
  return http.get('/project.json');
}
