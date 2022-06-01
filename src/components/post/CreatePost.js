import { ButtonWithIcon, Input, Avatar } from "custom-styled-component";
import React from "react";
import styled from "styled-components";
import CameraIcon from "../../assets/camera.png";
import PhotoIcon from "../../assets/photo.png";
import VideoIcon from "../../assets/video.png";
import EventIcon from "../../assets/event.png";
import ArticleIcon from "../../assets/article.png";

export const CreatePost = () => {
  return (
    <CreatePostContainer>
      <Avatar>
        <img src={CameraIcon} alt="profile-pic" />
      </Avatar>
      <PostInput type="button" value="Ask your network for advice" />
      <ButtonWithIcon icon={PhotoIcon}>Photo</ButtonWithIcon>
      <ButtonWithIcon icon={VideoIcon}>Video</ButtonWithIcon>
      <ButtonWithIcon icon={EventIcon}>Event</ButtonWithIcon>
      <ButtonWithIcon icon={ArticleIcon}>Write article</ButtonWithIcon>
    </CreatePostContainer>
  );
};
const CreatePostContainer = styled.div`
  background-color: #ffff;
  width: 100%;
  height: 25vh;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: space-around;
  align-items: center;
`;
const PostInput = styled(Input)`
  /* flex-grow: 2; */
  width: 80%;
  border-radius: 5rem;
  border-color: rgba(0, 0, 0, 0.4);
  color: rgba(0, 0, 0, 0.7);
  text-align: left;
  &:focus,
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
