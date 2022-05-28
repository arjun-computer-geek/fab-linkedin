import { Link } from "react-router-dom";
import styled from "styled-components";
import CameraIcon from "../../assets/camera.png";

export const LeftSideCard = () => {
  return (
    <CardContainer>
      <CardBackground />
      <UserInfo to="/profile">
        <Photo>
          <img src={CameraIcon} />
        </Photo>
        <h2>John Doe</h2>
      </UserInfo>
      <Description>
        Full stack web developer (knowing these technologies : nodejs, express,
        pug, Mongodb, and reactJs)
      </Description>
    </CardContainer>
  );
};
const CardContainer = styled.div`
  background-color: #ffff;
  height: 80vh;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
const CardBackground = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq");
  background-repeat: no-repeat;
  background-origin: content-box;
  background-position: center;
  background-size: 350px;
  height: 5rem;
  border-radius: 10px 10px 0 0;
`;

const Photo = styled.div`
  background-color: #ffff;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  border: 2px solid #ffff;
  margin: -38px auto 12px;
  img{
      height: 100%;
      width: 100%;
  }

`;
const UserInfo = styled(Link)`
  text-align: center;
  h2 {
    color: rgba(0, 0, 0, 0.8);
}
&:hover h2{
      text-decoration: underline;
  }
`;
const Description = styled.p`
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-size: 1.2rem;
  padding: 1rem 1rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
