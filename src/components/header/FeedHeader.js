import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./../../assets/logo.png";
import { Container } from "custom-styled-component";
import searchIcon from "../../assets/search.png";
import {
  DownIcon,
  HomeIcon,
  MessageIcon,
  MyNetworksIcon,
  NotificationIcon,
  UserIcon,
} from "components/icons";

export const FeedHeader = () => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <Search>
          <img src={searchIcon} alt="search icon" />
          <input placeholder="Search" />
        </Search>
        <IconContainer>
          <Icon to="/home">
            <HomeIcon />
            <IconText>Home</IconText>
          </Icon>
          <Icon to="/my-networks">
            <MyNetworksIcon />
            <IconText>My Networks</IconText>
          </Icon>
          <Icon to="/messaging">
            <MessageIcon />
            <IconText>Messaging</IconText>
          </Icon>
          <Icon to="/notifications">
            <NotificationIcon />
            <IconText>Notifications</IconText>
          </Icon>
          <Icon to="/me">
            <UserIcon />
            <IconText>
              Me <DownIcon />
            </IconText>
          </Icon>
        </IconContainer>
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
    width: 3%;
  }
  & > a:first-child > img {
    height: 100%;
    width: 100%;
  }
`;
const Search = styled.div`
  background-color: rgba(112, 181, 249, 0.15);
  height: 100%;
  width: 25%;
  margin-left: 0.5rem;
  border-radius: 5px;
  display: flex;
  gap: 0.5rem;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  img {
    height: 80%;
    width: 10%;
  }
  input {
    background-color: transparent;
    border: none;
    width: 90%;
    height: 100%;
    font-size: 1.2rem;
    outline: none;
  }
`;
const IconContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const Icon = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const IconText = styled.span`
  color: gray;
`;
