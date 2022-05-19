import React, { useRef, useState } from 'react'
import googleIcon from '../../assets/googleIcon.png'
import Container from '../styled-component/Container'
import SignupLoginHeader from '../header/SignupLoginHeader'
import styled from "styled-components";
import SignIn from '../styled-component/SignIn'

const Login = () => {
  const [visible, setVisible] = useState(false)
  const passwordRef = useRef(null);

  const hideShowPasswordHandler = () => {
    if (visible)
      passwordRef.current.type = "password"
    else
      passwordRef.current.type = "text"

    setVisible(!visible)
  }
  return (
    <>
      <SignupLoginHeader />
      <LoginContainer>
        <LoginCard>
          <LoginHeader>
            Sign in
          </LoginHeader>
          <Quote>Stay updated on your professional world</Quote>
          <Input type="text" placeholder='Email or Phone' />
          <PasswordWrapper>
            <Input type="password" ref={passwordRef} placeholder='Password' />
            <HideShow onClick={hideShowPasswordHandler}>
              {visible ? "hide" : "show"}
            </HideShow>
          </PasswordWrapper>
          <ForgotPassword>
            Forgot Password?
          </ForgotPassword>
          <SignInBtn>
            Sign in
          </SignInBtn>
          <VerticleLine>
            <span>or</span>
          </VerticleLine>
          <SignInWithGoogle>
            <img src={googleIcon} alt="google Icon"/>
            <span>Sign in with Google</span> 
          </SignInWithGoogle>
        </LoginCard>
      </LoginContainer>
    </>
  )
}
const LoginHeader = styled.h2`
  font-size: 2.5rem;
`
const LoginContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  justify-content: center;

`
const LoginCard = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  height: 80vh;
  width: 25vw;
  padding: 2em;
`
const Quote = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`
const Input = styled.input`
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.6);
  outline : none;
  width: 100%;
  padding: 0.8em 1em;
  margin: 0.5em 0;
  font-size: 1.5rem;
  border-radius: 5px;
`
const HideShow = styled.button`
  border: none;
  background-color: transparent;
  box-shadow: none;
  font-size: 1.2rem;
  color: #0a66c2;
  border-radius: 12px;
  padding: 0.2em;
  position: absolute;
  right: 10px;
  top: 35%;
  &:hover{
    background-color: rgba(112, 181, 249, 0.25)
  }

`
const PasswordWrapper = styled.div`
  position: relative;
`
const ForgotPassword = styled.a`
  color: #0a66c2;
  font-weight: 600;
  font-size: 1.2rem;
`
const SignInBtn = styled(SignIn)`
  display: block;
  text-align: center;
  margin-top: 1em;
  background-color: #0a66c2;
  color: #ffff;
  &:hover{
    background-color: #064079;
  }
`
const VerticleLine = styled.div`
  width: 85%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 78%;
  & span{
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffff;
    border: 1px solid #ffff;
    border-radius: 50%;
    padding: 8px 10px;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.5)
  }
`
const SignInWithGoogle = styled(SignIn)`
   display: block;
  text-align: center;
  margin-top: 2.5em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  &> img{
    height: 25px;
    width: 25px;
  }
`
export default Login