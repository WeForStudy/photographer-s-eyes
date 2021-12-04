import http from './http';
interface FormType {
  name: string;
  email: string;
  message: string;
}
export function sendContactForm (form: FormType) {
  return http.post('http://mockbin.com/request?foo=bar&foo=baz');
}
