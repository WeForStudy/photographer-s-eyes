import axios from 'axios';

const http = axios.create({
  // baseURL: '/',
  timeout: 3000, // the unit is millsecond
  // headers: {'X-Custom-Header': 'foobar'}
});

http.interceptors.response.use(
  response => {   
      // If the returned status code is 200, the interface request is successful and the data can be obtained normally     
      // Otherwise, an error will be thrown
      if (response.status === 200) {     
          return Promise.resolve(response.data);        
      } else {            
          return Promise.reject(response);        
      }    
  }, );

export default http;