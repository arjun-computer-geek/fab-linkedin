import React from 'react'
import styled from "styled-components"
import googleIcon from '../../assets/googleIcon.png'
import Container from '../../components/styled-component/Container'
import LoginCard from '../../components/styled-component/LoginCard';
import SignIn from '../../components/styled-component/SignIn'
import Input from '../../components/styled-component/Input';
import SignInWithGoogle from '../../components/styled-component/SignInWithGoogle'

import SignupLoginHeader from '../../components/header/SignupLoginHeader'
import InputPassword from '../../components/styled-component/InputPassword';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <>
      <SignupLoginHeader />
      <SignupContainer>
        <h2>Make the most of your professional life</h2>
        <LoginCard>
          <Input type="text" placeholder='Email or Phone number' />
          <InputPassword placeholder="Password" />
          <TermsCondition>
            By clicking Agree &amp; Join, you agree to the LinkedIn <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>, and <a href='#'>Cookie Policy</a>.
          </TermsCondition>
          <SignUpBtn to='/login'>
            Agree &amp; Join
          </SignUpBtn>
          <VerticleLine>
            <span>or</span>
          </VerticleLine>
          <SignInWithGoogle to='/google'>
            <img src={googleIcon} alt="google Icon" />
            <span>Sign in with Google</span>
          </SignInWithGoogle>
          <AlreadyOnLinkedIn>
            Already on LinkedIn? <Link to="/login">Sign in</Link>
          </AlreadyOnLinkedIn>
        </LoginCard>
      </SignupContainer>
    </>
  )
}
const SignupContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2{
      font-size: 2rem;
      margin: 1.5em 0;
      font-weight: 500;

  }

`
const TermsCondition = styled.p`
  text-align: center;
  margin-top: 1em;
  color: rgba(0,0,0,0.5);
  & a{
    color: #0a66c2;
  }
`
const SignUpBtn = styled(SignIn)`
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
  top: 65%;
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
const AlreadyOnLinkedIn = styled.p`
    font-size: 1.4rem;
    margin-top: 1em;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    & a{
        color: #0a66c2;
    }
`
export default Signup