import React from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Container from "../../components/styled-component/Container";

const Home = () => {
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


export default Home;
