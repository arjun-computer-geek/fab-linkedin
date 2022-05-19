import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./../../assets/fab-linkedin-logo.png";
import Container from "./../styled-component/Container"

const SignupLoginHeader = () => {
    return (
        <Container>
            <Nav>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </Nav>
        </Container>
    )
}
const Nav = styled.nav`
  padding: 1rem 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a:first-child{
    height: 100%;
    width: 20%;
  }
  & > a:first-child > img{
    height: 100%;
    width: 100%;
  }
`;

export default SignupLoginHeader