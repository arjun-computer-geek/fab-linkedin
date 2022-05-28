import React from "react";
import { Header, Hero } from "components";
import styled from "styled-components";
import { Container } from "custom-styled-component";

export const Home = () => {
  return (
    <>
      <Header />
      <LandingPageContainer>
        <Hero />
      </LandingPageContainer>
    </>
  );
};
const LandingPageContainer = styled(Container)``;
