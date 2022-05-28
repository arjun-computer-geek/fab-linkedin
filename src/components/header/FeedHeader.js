import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./../../assets/logo.png";
import Container from "./../styled-component/Container";
import searchIcon from "../../assets/search.png";
import { Home } from "@styled-icons/boxicons-solid/Home";
import { People } from "@styled-icons/ionicons-sharp/People";
import { MessageSquare } from "@styled-icons/evaicons-solid/MessageSquare";
import { Notifications } from "@styled-icons/material-rounded/Notifications";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";
import {CaretDown} from "@styled-icons/ionicons-sharp/CaretDown"

const FeedHeader = () => {
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
          <Icon>
            <HomeIcon />
            <IconText>Home</IconText>
          </Icon>
          <Icon>
            <MyNetworksIcon />
            <IconText>My Networks</IconText>
          </Icon>
          <Icon>
            <MessageIcon />
            <IconText>Messaging</IconText>
          </Icon>
          <Icon>
            <NotificationIcon />
            <IconText>Notifications</IconText>
          </Icon>
          <Icon>
            <UserIcon />
            <IconText>Me <DownIcon /></IconText>
          </Icon>
        </IconContainer>
      </Nav>
    </Container>
  );
};
const DownIcon = styled(CaretDown)`
height: 1rem !important;
`
const HomeIcon = styled(Home)`
  color: gray;
  height: 2rem !important;
`;
const MyNetworksIcon = styled(People)`
  height: 2rem !important;
  color: gray;
`;
const MessageIcon = styled(MessageSquare)`
  height: 2rem !important;
  color: gray;
`;
const NotificationIcon = styled(Notifications)`
  height: 2rem !important;
  color: gray;
`;
const UserIcon = styled(UserCircle)`
  height: 2rem !important;
  color: gray;
`;
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
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const IconText = styled.span`
  color: gray;
`;
export default FeedHeader;
