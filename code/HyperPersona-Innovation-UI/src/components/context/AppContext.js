import { createContext, useEffect, useState, useContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [commonMasterOptions, setCommonMasterOptions] = useState(new Map());
  const [user, setUser] = useState([]);
  const [networkError, setNetWorkError] = useState(null);
  const [userRoles, setUserRoles] = useState([]);
  // const [userRights, setUserRights] = useState([]);
  const [token, setToken] = useState(null); // To store the authentication token
  const [userInfo, setUserInfo] = useState({}); // To store user information

  const addCommonMasterOptions = (key, value) => {
    let valueArr = commonMasterOptions.get(key);
    if(!valueArr)valueArr = [];
    valueArr.push(value)
    commonMasterOptions.set(key,valueArr);
    setCommonMasterOptions(commonMasterOptions);
  };
  const clearMasterOptionsByKey = (key, value) => {
    let valueArr = [];
    commonMasterOptions.set(key,valueArr);
    setCommonMasterOptions(commonMasterOptions);
  }; 
  
    useEffect(()=>{
      if(token && user && user.isActive)
      {
         setUserRoles(user.roles)
        //  Api.getData(URL_ALLMASTERVALUES)
        //   .then((response) => {
        //     setCommonMasterOptions(response.data);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      }
    },[token])
  return <AppContext.Provider value={{ token, setToken, userInfo, setUserInfo, commonMasterOptions, 
    setCommonMasterOptions, addCommonMasterOptions, clearMasterOptionsByKey,networkError, setNetWorkError }}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);

