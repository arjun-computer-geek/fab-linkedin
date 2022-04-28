import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroSection>
      <HeroText>Welcome to your professional community</HeroText>
      <HeroImage>
        <img
          src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          alt="hero"
        />
      </HeroImage>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  right: -200px;
`;
const HeroText = styled.div`
  height: 100%;
  width: 50%;
  color: #8c5546;
  font-size: 5rem;
  font-family: 'Montserrat', sans-serif;
`;

export default Hero;
