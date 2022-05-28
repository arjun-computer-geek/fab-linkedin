import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./../../assets/fab-linkedin-logo.png";
import { Container, SignIn } from "custom-styled-component";

export const Header = () => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div>
          <Join to="/signup">Join now</Join>
          <SignIn to="/login">Sign in</SignIn>
        </div>
      </Nav>
    </Container>
  );
};

const Nav = styled.nav`
  padding: 1rem 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a:first-child {
    height: 100%;
    width: 20%;
  }
  & > a:first-child > img {
    height: 100%;
    width: 100%;
  }
`;
const Join = styled(Link)`
  font-size: 1.5rem;
  padding: 15px 20px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 5px;
  font-weight: 600;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;
