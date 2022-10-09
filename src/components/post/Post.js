import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

import { ThreeDotsIcon } from "components/icons";
import { Avatar, ButtonWithIcon } from "custom-styled-component";
import CameraIcon from "../../assets/camera.png";
import PlusIcon from "../../assets/plus.png";
import LoveIcon from "../../assets/love-sm.svg";
import LikeIcon from "../../assets/like-sm.svg";
import SupportIcon from "../../assets/support-sm.svg";
import CelebrateIcon from "../../assets/celebrate-sm.svg";
import CuriousIcon from "../../assets/curious-sm.svg";
import InsightfulIcon from "../../assets/insightful-sm.svg";
import LikeGrayIcon from "../../assets/like-gray.png";
import CommentIcon from "../../assets/comment.png";
import ShareIcon from "../../assets/share.png";
import SendIcon from "../../assets/send.png";



export const Post = ({ content, postPhoto, likes}) => {
  return (
    <PostContainer>
      <UserActivity>
        <div>
          <PostAvatar>
            <img src={CameraIcon} alt="profile-pic" />
          </PostAvatar>
          <UserName>John Doe</UserName>
          <UserAction>likes this</UserAction>
        </div>
        <ThreeDotsIcon />
      </UserActivity>

      <User>
        <Avatar>
          <img src={CameraIcon} alt="profile-pic" />
        </Avatar>
        <div>
          <UserName>John Doe</UserName>
          <UserAction>
            Full stack web developer (knowing these technologies : nodejs,
            express, pug, Mongodb, and reactJs)
          </UserAction>
        </div>
        <ButtonWithIcon icon={PlusIcon}>Follow</ButtonWithIcon>
      </User>

      <Description>
        {content}
      </Description>

      <PostImageContainer>
        <img src={postPhoto}  />
      </PostImageContainer>

      <LikeStatus>
        <div>
          <ReactionContainer>
            <img src={LikeIcon} alt="icon" />
            <img src={LoveIcon} alt="icon" />
            <img src={SupportIcon} alt="icon" />
            <img src={CelebrateIcon} alt="icon" />
            <img src={CuriousIcon} alt="icon" />
            <img src={InsightfulIcon} alt="icon" />
          </ReactionContainer>
          <span>
            <a href="#">{likes}</a>
          </span>
        </div>
        <ul>
          <li>42 comments</li>
          <li>25 shares</li>
        </ul>
      </LikeStatus>
      <PostActions>
        <ButtonWithIcon icon={LikeGrayIcon}>Like</ButtonWithIcon>
        <ButtonWithIcon icon={CommentIcon}>Comment</ButtonWithIcon>
        <ButtonWithIcon icon={ShareIcon}>Share</ButtonWithIcon>
        <ButtonWithIcon icon={SendIcon}>Send</ButtonWithIcon>
      </PostActions>
    </PostContainer>
  );
};

Post.propTypes = {
  postPhoto: PropTypes.string
}

const PostContainer = styled.div`
  margin: 10px 0;
  background-color: #ffff;
  width: 100%;
  height: content-fit;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 1rem;
`;
const PostAvatar = styled(Avatar)`
  height: 2rem;
  width: 2rem;
`;
const UserActivity = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
const UserName = styled.h2`
  font-size: 1.2rem;
`;
const UserAction = styled.p`
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.2rem;
  font-weight: 500;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const User = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  div:nth-child(2) {
    width: 70%;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
`;
const PostImageContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  img {
    height: 100%;
    width: 100%;
  }
`;
const LikeStatus = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 0.5rem;
  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    span {
      display: block;
      margin-left: 5px;
      a {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  ul {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    li {
      color: rgba(0, 0, 0, 0.5);
    }
    li:nth-child(1) {
      list-style-type: none;
    }
  }
`;
const ReactionContainer = styled.div`
  height: 2rem;
  img {
    margin-left: -5px;
  }
`;
const PostActions = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;
