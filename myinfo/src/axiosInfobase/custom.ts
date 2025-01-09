import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";

// Define the shape of the token object, assuming the structure based on your code.
interface Token {
  jwtToken: string;
}

const authFetch = axios.create({
  baseURL: "http://127.0.0.1:5001/api/"
});

// Request interceptor
authFetch.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    const tokenString = localStorage.getItem("token");

    console.log(tokenString);
    // Ensure the token exists and is valid
    if (tokenString) {
      const myToken: string = tokenString;

      
      request.headers.Authorization = `${tokenString}`;
    }

    console.log('request sent');
    return request;
  },
  (error: AxiosError) => {
    // Handle or save data in cloud
    return Promise.reject(error);
  }
);

// Response interceptor
authFetch.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('got response');
    return response;
  },
  (error: AxiosError) => {
    console.log(error.response);
    if (error.response?.status === 404) {
      // Handle 404 error
      console.log('NOT FOUND');
    }
    if (error.response?.status === 401) {
      // Handle 401 error
      console.log('UNAUTHORIZED');
    }
    return Promise.reject(error);
  }
);

export default authFetch;
