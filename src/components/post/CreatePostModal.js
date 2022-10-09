import { Avatar, ButtonAsIcon } from "custom-styled-component";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CameraIcon from "../../assets/camera.png";
import PhotoIcon from "../../assets/photo.png";
import VideoIcon from "../../assets/video.png";
import DocumentIcon from "../../assets/document.jpg";
import { useDispatch } from "react-redux";
import { createPost } from "redux/slices/postSlice";
import { storage } from 'utils/init-firebase';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { v4 as uuid } from 'uuid'

export const CreatePostModal = ({ isOpen, setIsOpen }) => {
  const [file, setFile] = useState()
  const [isConfirmdUpload, setIsConfirmUpload] = useState(false)
  const [imgLink, setImgLink] = useState('')
  const [photoPreview, setPhotoPreview] = useState();
  const [progress, setProgress] = useState(0);

  const contentRef = useRef()
  const dispatch = useDispatch()

  const uploadFile = async () => {
    if (file === null) return;

    const imgRef = ref(storage, `postPhotos/${file.name + uuid()}`)
    const uploadTask = uploadBytesResumable(imgRef, file);

    uploadTask.on('state_changed', snapshot => {
      const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(percent);
    }, null, async () => {

      const res = await getDownloadURL(uploadTask.snapshot.ref)
      setImgLink(res)
      setIsConfirmUpload(false)
    })
  }

  useEffect(() => {
    if (isConfirmdUpload) {
      uploadFile()
    }

  }, [isConfirmdUpload])

  const createPostHandler = () => {

    dispatch(createPost({ content: contentRef.current.innerText, postPhoto: imgLink }))
    setIsOpen(false)
    contentRef.current.innerText = ""
  }
  const fileChangeHandler = (e) => {
    setFile(e.target.files[0])
    const reader = new FileReader();
    reader.onload = () => {

      setPhotoPreview(reader.result)
    }
    reader.readAsDataURL(e.target.files[0]);

    let status = window.confirm("Are You Sure want to upload");
    setIsConfirmUpload(status)
  }
  return (
    <CreatePostContainer id="modal" isOpen={{ display: isOpen ? "flex" : "none" }}>
      <CreateModal >
        <h2>Create a post</h2>
        <CrossBtn onClick={() => setIsOpen(false)}>X</CrossBtn>

        <TextAreaContainer>
          <div>
            <Avatar>
              <img src={CameraIcon} alt="profile-pic" />
            </Avatar>
            <h3>Arjun Kumar</h3>
          </div>
          <div>
            <PostTextArea ref={contentRef} contentEditable="true" data-placeholder="Do you want to talk about?" />
          </div>
          {photoPreview && <PreviewPhoto src={photoPreview} />}
        </TextAreaContainer>

        <ModalFooter>
          <UploadFileButton >
            <img src={PhotoIcon} alt="icon" />
            <input type="file" onChange={fileChangeHandler} />
          </UploadFileButton>
          <ButtonAsIcon src={VideoIcon} />
          <ButtonAsIcon src={DocumentIcon} />
          <PostBtn progress={progress} disabled={isConfirmdUpload} onClick={createPostHandler}>
            <div></div>
            <span>{progress < 100 && progress > 0 ? "Uploading.." : "Post"}</span>
            </PostBtn>
        </ModalFooter>
      </CreateModal>
    </CreatePostContainer>
  );
};
const TextAreaContainer = styled.div`
  overflow: auto;
  width: 100%;
  height: 82%;

  
  &>div:nth-child(1) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
    h3 {
      padding-left: 5px;
    }
  }
`
const PreviewPhoto = styled.img`
  height: 60vh;
  width: 100%;
`
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
`;
const CrossBtn = styled.span`
  display: inline-block;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
const PostTextArea = styled.pre`
  -moz-appearance: textfield-multiline;
  -webkit-appearance: textarea;
  white-space: pre-wrap;
  overflow-x: hidden;
  border: none;
  width: 100%;
  height: auto;
  outline: none;
  resize: none;
  font-size: 1.5rem;
  height: 50%;
  margin-bottom: 0.4rem;
  &:empty:before {
    content:attr(data-placeholder);
    color:gray
  }
`;
const ModalFooter = styled.div`
  height: 12%;
  width: 50%;
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
  position: relative;
  &>div{
    display: ${props => props.progress === 100 && "none"};
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: ${props=> props.progress === 100 ? "40px" : "40px 0  0 40px"};
  }
  &>span{
    position: relative;
  }
`;

const UploadFileButton = styled.label`
  height: 25px;
  width: 25px;
  border: none;
  img{
      height: 100%;
      width: 100%;
  };
  &>input[type='file']{
    display: none
  }
`