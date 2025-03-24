import React, { useState, useEffect, useContext } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import "./login-signup.css";
import { login, signup } from "../../services/AuthServices";
import { AppContext } from "../../components/context/AppContext";
import { useNavigate } from 'react-router-dom';
import { useErrorContext } from "../../components/context/ErrorContext";
import { createInput, createSelectInput} from "../../components/inputtype/InputComponents";
import {createDateChooser} from "../../components/inputtype/DateChooser";
import {createButton} from "../../components/inputtype/Button";
import AppDialog from "../../components/dialog/AppDialog";

import {
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Divider,
} from "@mui/material";


const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [dob, setDob] = useState(null);
  const [userName, setUserName] = useState('');
  const [userNameSignUp, setUserNameSignUp] = useState('');
  const [password, setPassword] = useState('');
  const [signuppassword, setSignuppassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { token, setToken, setUserInfo } = useContext(AppContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState(false);
  const [dialogTitle, setDialogTitle] = useState(false);
  const [dialogSize, setDialogSize] = useState(false);
  const [buttonArr, setButtonArr] = useState([]);
  const [signupVal, setSignupVal]=useState(false);
  const [message, setMessage]=useState('');
  const [errorMessage, setErrorMessage]=useState('');
  const { networkError } = useErrorContext();
  


  const handleOpenDialog = (title,content,size,actionArr) => {
    setDialogContent(content);
    setDialogTitle(title);
    setDialogSize(size);
    setButtonArr(actionArr);
    setDialogOpen(true);
    
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (networkError) {
      console.error("Network error detected! May be backend services are down !");
    }
  }, [networkError]);

  useEffect(() => {
    if (token)
      navigate('/hyperpersonalization/home');
  }, [token])
  useEffect(() => {
    if (signupVal && !isLogin){
      handleOpenDialog("SignUp Success",message,"sm",[
        { label: "OK", onClick: handleAction, type: "primary" },
      ]);
    }     
  }, [signupVal,isLogin]);
  useEffect(() => {
    if (errorMessage){
      handleOpenDialog("Signup Failed",errorMessage,"sm",[
        { label: "OK", onClick: handleAction, type: "primary" },
      ]);
    }     
  }, [errorMessage]);

 
  
  const handleAction = () => {
    setMessage('');
    setErrorMessage('');
    setDialogOpen(false);
    if(message && !isLogin)
      navigate('/hyperpersonalization/home');
  }
  
  const handleSignup = () => {
    const datestr = (new Date()).toISOString().slice(0, 19).replace("T", " ");
    const errors = validateSignupForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      const userData = {
        'userName': userNameSignUp,
        'userEmail':email,
        'password': signuppassword,
        'createdDate': datestr,
        'updatedDate':datestr,
        'emailVerified':"N",
        'person': {
          'firstName': firstName,
          'lastName': lastName,
          'dob': dob,
          'email': email,
          'phoneNumber': phoneNumber,
          'createdDate': datestr,
        'updatedDate':datestr,
        }
      };
      signup(userData, setSignupVal, setMessage,setErrorMessage);        
    }
  };

  const handleLogin = () => {
    const errors = validateLoginForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      const loginData = {
        'email': userName,
        'password': password,
      };
      login(loginData, setToken, setUserInfo);
    }
  };
  const validateLoginForm = () => {
    const errors = {};
    if (userName.trim() === '') {
      errors.userName = 'UserName is required';
    }
    if (password.trim() === '') {
      errors.password = 'Password is required';
    }       
    return errors;
  };
  const validateSignupForm = () => {
    const errors = {};
    if (userNameSignUp.trim() === '') {
      errors.userNameSignUp = 'UserName is required';
    }
    if (firstName.trim() === '') {
    errors.firstName = 'FirstName is required';
    }
    if (lastName.trim() === '') {
      errors.lastName = 'LastName is required';
      }
    if (signuppassword.trim() === '') {
      errors.signuppassword = 'Password is required';
    }
    if (email.trim() === '') {
      errors.email = 'Email is required';
    }
    if (phoneNumber.trim() === '') {
      errors.phoneNumber = 'Phone number is required';
    }    
    if(signuppassword !== confirmPassword)
    {
      errors.confirmPassword= 'Passwords do not match';
    }
    return errors;
  };
  const handleOnEnter = (e) => {
    if (e.key === 'Enter' && isLogin) {
      handleLogin();
    }
    else if (e.key === 'Enter' && !isLogin) {
      handleSignup();
    }
  };

  const handleGoogleLogin = () => {
    // Logic for Google login
    console.log("Google login");
  };

  const handleFacebookLogin = () => {
    // Logic for Facebook login
    console.log("Facebook login");
  };



  const handleGoogleSignup = () => {
    // Logic for Google signup
    console.log("Google Signup");
  };

  const handleFacebookSignup = () => {
    // Logic for Facebook signup
    console.log("Facebook Signup");
  };
 
  const createSocialLogin = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} align="center">
        <FacebookIcon onClick={() => console.log("Facebook login")} style={{ cursor: "pointer" }} />
      </Grid>
      <Grid item xs={12} sm={6} align="center">
        <GoogleIcon onClick={() => console.log("Google login")} style={{ cursor: "pointer" }} />
      </Grid>
    </Grid>
  );
 
  const signInForm = () => (
    <>
          {createInput("text", "Username or Email", userName, setUserName, errors["userName"])}
          {createInput("password", "Password", password, setPassword, errors["password"])}
          <Grid container alignItems="center" justifyContent="space-between">
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <Button color="primary">Forgot password</Button>
          </Grid>
        </>
  );
  const signupForm = () => (
    <>
          {createInput("text", "UserName", userNameSignUp, setUserNameSignUp, errors["userNameSignUp"])}
          {createInput("text", "First Name", firstName, setFirstName, errors["firstName"])}
          {createInput("text", "Middle Name", middleName, setMiddleName, errors["middleName"])}
          {createInput("text", "Last Name", lastName, setLastName, errors["lastName"])}
          {createDateChooser("Date Of Birth", dob, setDob, errors["dob"])}
          {createInput("email", "E-mail", email, setEmail, errors["email"])}
          {createInput("text", "Phone Number", phoneNumber, setPhoneNumber, errors["phoneNumber"])}
          {createInput("password", "Password", signuppassword, setSignuppassword, errors["signuppassword"])}
          {createInput("password", "Confirm Password", confirmPassword, setConfirmPassword, errors["confirmPassword"])}          
        </>
  );
  const createForm = (isLogin) => (
    <form className="page-container">
      {isLogin ? (signInForm()) : (signupForm())}
    </form>
  );
  return (
    <div className="login-signup-container">
    <div className="form-container">
      <Typography variant="h6" align="center" gutterBottom>
      World Of Hyper-Personalization Welcomes you!
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        {isLogin ? "Please Login To Continue" : "Create a New Account"}
      </Typography>
      <div className="tab-container">
        <Button variant={isLogin ? "contained" : "outlined"} onClick={() => setIsLogin(true)}>
          Sign In
        </Button>
        <Button variant={!isLogin ? "contained" : "outlined"} onClick={() => setIsLogin(false)}>
          Sign Up
        </Button>
      </div>
      {createForm(isLogin)}
      {errors.general && <Typography color="error">{errors.general}</Typography>}
      <div className="button-container">
        {!isLogin && <FormControlLabel control={<Checkbox />} label="I'm not a robot" />}
        {isLogin ? createButton("Sign In", handleLogin):createButton("Sign Up", handleSignup)}
      </div>
      <Divider>or</Divider>
      {createSocialLogin()}
      {!isLogin && (
        <Typography variant="body2" align="center">
          By creating this account, you agree to our <a href="#">Privacy Policy</a> & <a href="#">Cookie Policy</a>.
        </Typography>
      )}
      <div className="beanstack-text">
        <p>@InnovateX</p>
      </div>
      <div>
        {networkError && <p style={{ color: "red" }}>⚠️ Network Error! Please check your connection.</p>}
      </div>
      <AppDialog
        open={dialogOpen}
        onClose={handleAction}
        title={dialogTitle}
        content={dialogContent}
        size={dialogSize}
        actions={buttonArr}
        isModal={true}
      />
    </div>    
  </div>
  );
};

export default LoginSignupPage;
