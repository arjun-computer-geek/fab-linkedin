import React from "react";
import styled from "styled-components";
import { FeedHeader, LeftSideCard } from "components";
import { Container } from "custom-styled-component";

export const Feed = () => {
  return (
    <>
      <FeedHeader />
      <FeedPage>
        <LeftSideCard />
        <div>Main</div>
        <div>Right Side</div>
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