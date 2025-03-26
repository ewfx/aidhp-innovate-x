import {
  Backdrop,
  Box,
  CircularProgress,
  circularProgressClasses,
  createTheme,
  Dialog,
  LinearProgress,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { lazy, Suspense, useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import { AppContext } from "./components/context/AppContext";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LeftNav from "./components/leftnav/LeftNav";
import "./App.css";
import AboutUs from "./pages/aboutus/AboutUs";
import Home from "./pages/home/Home";
import HelpAndSupport from "./pages/helpandsupport/HelpAndSupport";
import { Navigate } from "react-router-dom";
import { useAxiosInterceptors } from "./api/axiosApi";

const LoginForm = lazy(() => import("./pages/login/Login"));
const Recommendation = lazy(() => import("./pages/recommendation/recommendation"));
const AdminHome = lazy(() => import("./pages/admin/AdminHome"));
const light = {
  palette: {
    type: "light",
    primary: {
      main: "#4285f6",
    },
    secondary: {
      main: "#fcc60b",
    },
    footer: {
      main: "#f4f0ed",
    },
    header: {
      main: "#fcc60a",
    },
    headercolor: {
      main: "#000",
    },
    inputBackground: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "roboto-regular",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "*": { fontFamily: "inherit !important" },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "#d71e28",
        },
      },
    },
  },
};

const AppContainer = () => {
  useAxiosInterceptors(); 
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const { setUserRoles } = useContext(AppContext);
  const { token} = useContext(AppContext);


  useEffect(()=>{
    if(token){
      setIsUserLoggedIn(true);
    }
    else{
      setIsUserLoggedIn(false);
    }
  },[token]);

  
  const getAllPages = () => {
    return (!isUserLoggedIn? (<>
      <Router>
        <div>
          <Routes>
            <Route path="/hyperpersonalization" element={<LoginForm />} />            
          </Routes>
        </div>
        <Navigate to="/hyperpersonalization"/>
      </Router>
    </>):(<>
      <ThemeProvider theme={createTheme(light)}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <Router>
            <Suspense
              fallback={
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              }
            >
              {/* {!error && (<TokenExpirationPopup expiryEpoch={localStorage.getItem("accessTokenExpiry")}/>)} */}
              <Header />
              <LeftNav />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  paddingTop: "80px",
                  paddingLeft: "0px",
                  m: 1,
                }}
              >
                <Typography component={"div"} sx={{ minHeight: "87vh" }}>
                  <Routes>
                    <Route path="/hyperpersonalization/home" element={<Home />} />,
                    <Route path="/hyperpersonalization/recommendation" element={<Recommendation />} />,
                    <Route path="/hyperpersonalization/adminhome" element={<AdminHome />} />,
                    <Route path="/hyperpersonalization/aboutus" element={<AboutUs />} />,
                    <Route path="/hyperpersonalization/support" element={<HelpAndSupport />} />,
                    
                   {/* <Route exact={false} path="/settings" render ={()=><Setting/>}/> */}
                    {/* <Route exact={false} path="/about" render ={()=><About/>}/> */}
                  </Routes>
                </Typography>
                <Footer />
              </Box>
            </Suspense>
          </Router>
        </Box>
      </ThemeProvider></>)
    );
  };

  return <>{getAllPages()}</>;
};
export default AppContainer;
