import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  FeedHeader,
  CreatePost,
  LeftSideCard,
  RightSideCard,
  CreatePostModal,
  Post
} from "components";
import { Container } from "custom-styled-component";
import { useNavigate } from "react-router-dom";

export const Feed = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {  currentUser } = useSelector(state => state.auth)
  const authData = useSelector((state) => state.auth);
  const navigate = useNavigate()

  console.log(authData);

  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate("/")
  //   }
  // },[currentUser])
  return (
    <>
      <FeedHeader />
      <CreatePostModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      <FeedPage>
        <LeftSideCard />
        <Main>
          <CreatePost isOpen={isOpen} setIsOpen={setIsOpen}/>
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
