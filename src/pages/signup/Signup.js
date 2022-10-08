import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import googleIcon from "../../assets/googleIcon.png";
import {
  Container,
  LoginCard,
  SignIn,
  Input,
  SignInWithGoogle,
  InputPassword,
} from "custom-styled-component";

import { SignupLoginHeader } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearError , setError, singupWithEmailAndPassword} from "redux/slices/authSlice";

export const Signup = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.toLowerCase())){
      return true
    }
    return false
  };

  
  const checkEmailOrPassword = (inputData) =>{
    let input = String(inputData)
    if(input === null || input === '') return
    
    if(input.length > 10){
      if(validateEmail(input)){
        return 'email'
      }
      
    }
    if(input.length === 10){
      return 'phone'
    }
   
  }

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Register successfull 😉");
      navigate("/feed");
    }
    if (error) {
      toast.error(error)
      dispatch(clearError());
    };

  }, [ error, isAuthenticated]);

  const emailChangeHandler = (e) => {
    setUser((prev) => ({ ...prev, email: e.target.value }));
  };

  const passwordChangeHandler = (e) => {
    setUser((prev) => ({ ...prev, password: e.target.value }));
  };

  const signupHandler = (e, userData) => {
    e.preventDefault();

    if(checkEmailOrPassword(userData.email) === 'email'){
      return dispatch(singupWithEmailAndPassword(userData));
    }
    
    if(checkEmailOrPassword(userData.email) === 'phone'){
     return console.log("singhup with phone")
    }
    
     return dispatch(setError("Invalid email or phone number"))
    
  };
  return (
    <>
      <SignupLoginHeader />
      <SignupContainer>
        <h2>Make the most of your professional life</h2>
        <LoginCard>
          <Input
            onChange={emailChangeHandler}
            type="text"
            placeholder="Email or Phone number"
          />
          <InputPassword
            onChange={passwordChangeHandler}
            placeholder="Password"
          />
          <TermsCondition>
            By clicking Agree &amp; Join, you agree to the LinkedIn{" "}
            <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>, and{" "}
            <a href="#">Cookie Policy</a>.
          </TermsCondition>
          <SignUpBtn onClick={(e) => signupHandler(e, user)} to="/login">
            Agree &amp; Join
          </SignUpBtn>
          <VerticleLine>
            <span>or</span>
          </VerticleLine>
          <SignInWithGoogle to="/google">
            <img src={googleIcon} alt="google Icon" />
            <span>Sign in with Google</span>
          </SignInWithGoogle>
          <AlreadyOnLinkedIn>
            Already on LinkedIn? <Link to="/login">Sign in</Link>
          </AlreadyOnLinkedIn>
        </LoginCard>
      </SignupContainer>
    </>
  );
};
const SignupContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    font-size: 2rem;
    margin: 1.5em 0;
    font-weight: 500;
  }
`;
const TermsCondition = styled.p`
  text-align: center;
  margin-top: 1em;
  color: rgba(0, 0, 0, 0.5);
  & a {
    color: #0a66c2;
  }
`;
const SignUpBtn = styled(SignIn)`
  display: block;
  text-align: center;
  margin-top: 1em;
  background-color: #0a66c2;
  color: #ffff;
  &:hover {
    background-color: #064079;
  }
`;
const VerticleLine = styled.div`
  width: 85%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 65%;
  & span {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffff;
    border: 1px solid #ffff;
    border-radius: 50%;
    padding: 8px 10px;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.5);
  }
`;
const AlreadyOnLinkedIn = styled.p`
  font-size: 1.4rem;
  margin-top: 1em;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  & a {
    color: #0a66c2;
  }
`;
