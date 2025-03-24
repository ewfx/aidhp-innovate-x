import { useContext } from "react";
import Axios from "axios";
import {WHITELIST_URLS} from "../constants/ApiURLConstants";
import { BASE_URL } from "../constants/ApiURLConstants";
import { useAppContext } from "../components/context/AppContext";
import { errorManager } from "../util/ErrorManager";

const apiInstance = Axios.create({ baseUrl: BASE_URL })
const useAxiosInterceptors = () => {
    const { token } = useAppContext();
    apiInstance.interceptors.response.use((response) => {
        if (response.status === 200) {
            return response;
        }
        if (response.status === 500) {
            return response;
        }
        if (response.data.unauthorized) {
            window.location.hash = "/logout";
            return response;
        }
    }, (error) => {
        if (!error.response) {
            if (!errorManager.getNetworkError()) {
              errorManager.setNetworkError(true);
              return Promise.reject("Network error! Please check your connection.");
            }
            return new Promise(() => {}); // Prevent multiple promise rejections
          }
          if (errorManager.getNetworkError()) 
            errorManager.setNetworkError(false);  
                const status = error.response?.status;
                const errorMessage =
                  error.response?.data?.errorMessage?.errorMessage || 'Something went wrong. Please try again.';
                const data = error.response?.data;
            
                // Reject with a structured error object
                return Promise.reject({ status, errorMessage, data });
        }
        
    )
    apiInstance.interceptors.request.use(config => {
        if(WHITELIST_URLS.includes(config.url.substring(BASE_URL.length)))
        {
            return config;
        }
        if (config.method === 'POST')
            config.headers['Content-Type'] = 'application/json;charset=utf-8';
    
        // const token = localStorage.getItem('token');
        if (token) config.headers.Authorization = 'Bearer ' + token;
    
        return config;
    });
    
}  


const getData = (url, headers = {}) => apiInstance.get(`${BASE_URL}${url}`, { headers });

const postData = (url, formData = {}, headers = {}, isArray = false, param = {}) => 
    apiInstance.post(`${BASE_URL}${url}`, isArray ? [...formData, ...param] : { ...formData, ...param }, { headers });

export { useAxiosInterceptors, getData, postData, apiInstance };

