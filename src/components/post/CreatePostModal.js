import { Avatar, ButtonAsIcon } from "custom-styled-component";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import CameraIcon from "../../assets/camera.png";
import PhotoIcon from "../../assets/photo.png";
import VideoIcon from "../../assets/video.png";
import DocumentIcon from "../../assets/document.jpg";
import { useDispatch } from "react-redux";
import { createPost } from "redux/slices/postSlice";

export const CreatePostModal = ({isOpen, setIsOpen}) => {
    const contentRef = useRef()
    const dispatch = useDispatch()


    const createPostHandler = () => {
        dispatch(createPost({content: contentRef.current.value}))
        setIsOpen(true)
        contentRef.current.value = ""
    }
  return (
    <CreatePostContainer id="modal" onClick={(e) => setIsOpen(!(e.target.id === 'modal'))} isOpen={{ display: isOpen ? "flex" : "none" }}>
      <CreateModal >
        <h2>Create a post</h2>
        <div>
          <Avatar>
            <img src={CameraIcon} alt="profile-pic" />
          </Avatar>
          <h3>Arjun Kumar</h3>
        </div>
        <PostTextArea ref={contentRef} placeholder="Do you want to talk about?" />
        <ModalFooter>
          <ButtonAsIcon src={PhotoIcon} />
          <ButtonAsIcon src={VideoIcon} />
          <ButtonAsIcon src={DocumentIcon} />
          <PostBtn onClick={createPostHandler}>Post</PostBtn>
        </ModalFooter>
      </CreateModal>
    </CreatePostContainer>
  );
};

const CreatePostContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${(props) => props.isOpen.display};
  justify-content: center;
  `;
const CreateModal = styled.div`

  position: relative;
  height: 80vh;
  width: 40%;
  background-color: #ffff;
  margin-top: 5vh;
  border-radius: 10px;
  padding: 2rem;
  h2 {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.5);
  }
  div {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
    h3 {
      padding-left: 5px;
    }
  }
`;
const PostTextArea = styled.textarea`
  border: none;
  width: 100%;
  outline: none;
  resize: none;
  font-size: 1.5rem;
  height: 60%;
  margin-bottom: 0.4rem;
`;
const ModalFooter = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;
const PostBtn = styled.button`
  background-color: #0a66c2;
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  border: none;
  color: #ffff;
  border-radius: 40px;
`;