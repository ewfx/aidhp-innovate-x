import {URL_REGISTERUSER} from "../constants/ApiURLConstants";
import {URL_LOGIN} from "../constants/ApiURLConstants";
import {URL_LOGOUT} from "../constants/ApiURLConstants";
import { postData  } from "../api/axiosApi";

// Signup user
export const signup = (userData,setSignupVal, setMessage, setErrorMessage) => {
  postData(URL_REGISTERUSER,userData)
    .then((response) => {
      if(response.data)
      {
        setSignupVal(true);
        setMessage(response.data);
      }
    })
    .catch((error) => {
      const { status, errorMessage, data } = error;
      console.error(`"Error:" ${status}`, data); // Log full error details
      setErrorMessage(errorMessage);
    });
};

// Login user
export const login = (loginData, setToken, setUserInfo) => {
    
  postData(URL_LOGIN,loginData)
    .then((response) => {
      if(response.data)
      {
        localStorage.setItem('token', response.data.accessToken);
        setToken(response.data.accessToken);
        setUserInfo(response.data.userInfo);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// Logout user (optional, as it's handled client-side)
export const logout = ( setToken, setUserInfo) => {
  postData(URL_LOGOUT)
    .then((response) => {
      if(response.data)
      {
        localStorage.removeItem('token');
        setToken(null);
        setUserInfo(null);
      }
    })
    .catch((error) => {
      console.log(error);
    });
    
};