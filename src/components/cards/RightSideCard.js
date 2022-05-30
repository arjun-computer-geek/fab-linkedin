import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const RightSideCard = () => {
  return (
    <NewsContainer>
      <h2>Fab LinkedIn News</h2>
      <ul>
        <Link to="#">
          <li>Giving feedback to your boss</li>
        </Link>
      </ul>
    </NewsContainer>
  );
};

const NewsContainer = styled.div`
  background-color: #ffff;
  height: 70vh;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 1rem;
  li {
    margin: 1.2rem 1rem;
  }
  ul a {
    color: rgb(0, 0, 0);
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    width: 100%;
    padding: 0.1rem 0;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
