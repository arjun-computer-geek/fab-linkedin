import styled from "styled-components";
import SignIn from "./SignIn";

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
export default SignInWithGoogle;