import React from "react";
import styled from "styled-components";
import {
  FeedHeader,
  CreatePost,
  LeftSideCard,
  RightSideCard,
} from "components";
import { Container } from "custom-styled-component";

export const Feed = () => {
  return (
    <>
      <FeedHeader />
      <FeedPage>
        <LeftSideCard />
        <Main>
          <CreatePost />
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
