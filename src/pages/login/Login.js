import googleIcon from "../../assets/googleIcon.png";
import styled from "styled-components";
import { SignupLoginHeader } from "components";
import { useState } from "react";
import { loginWithEmailAndPassword } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import {
  Container,
  SignIn,
  LoginCard,
  Input,
  InputPassword,
  SignInWithGoogle,
} from "custom-styled-component";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const emailChangeHandler = (e) => {
    setUser((prev) => ({ ...prev, email: e.target.value }));
  };

  const passwordChangeHandler = (e) => {
    setUser((prev) => ({ ...prev, password: e.target.value }));
  };

  const loginHandler = (e, userData) => {
    e.preventDefault();
    dispatch(loginWithEmailAndPassword(userData));
  };
  return (
    <>
      <SignupLoginHeader />
      <LoginContainer>
        <LoginCard>
          <LoginHeader>Sign in</LoginHeader>
          <Quote>Stay updated on your professional world</Quote>
          <Input
            onChange={emailChangeHandler}
            type="text"
            placeholder="Email or Phone"
          />
          <InputPassword
            onChange={passwordChangeHandler}
            placeholder="Password"
          />
          <ForgotPassword>Forgot Password?</ForgotPassword>
          <SignInBtn onClick={(e) => loginHandler(e, user)} to="/signup">
            Sign in
          </SignInBtn>
          <VerticleLine>
            <span>or</span>
          </VerticleLine>
          <SignInWithGoogle to="/google">
            <img src={googleIcon} alt="google Icon" />
            <span>Sign in with Google</span>
          </SignInWithGoogle>
        </LoginCard>
      </LoginContainer>
    </>
  );
};
const LoginHeader = styled.h2`
  font-size: 2.5rem;
`;
const LoginContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Quote = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ForgotPassword = styled.a`
  color: #0a66c2;
  font-weight: 600;
  font-size: 1.2rem;
`;
const SignInBtn = styled(SignIn)`
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
  top: 78%;
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
