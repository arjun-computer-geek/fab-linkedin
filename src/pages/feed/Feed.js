import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  FeedHeader,
  CreatePost,
  LeftSideCard,
  RightSideCard,
  Post,
} from "components";
import { Container } from "custom-styled-component";
import { useNavigate } from "react-router-dom";

export const Feed = () => {
  const { isAuthenticated } = useSelector(state => state.auth)
  const authData = useSelector((state) => state.auth);
  const navigate = useNavigate()
  console.log(authData);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/")
    }
  })

  return (
    <>
      <FeedHeader />
      <FeedPage>
        <LeftSideCard />
        <Main>
          <CreatePost />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Main>
        <RightSideCard />
      </FeedPage>
    </>
  );
};
const FeedPage = styled(Container)`
  background-color: #f3f2ef;
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas: "leftSide main rightSide";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  gap: 25px;
  padding-top: 25px;
`;

const Main = styled.main`
  min-height: 100vh;
  height: fit-content;
`;
