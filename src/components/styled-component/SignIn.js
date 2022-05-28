import { Link } from "react-router-dom";
import styled from "styled-components";

const SignIn = styled(Link)`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 50px;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 15px 20px;
  &:hover{
    background-color: rgba(112, 181, 249, 0.15);
    
  }
`
export default SignIn;