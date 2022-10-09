import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  FeedHeader,
  CreatePost,
  LeftSideCard,
  RightSideCard,
  CreatePostModal,
  Post,
  Loader,
} from "components";
import { Container } from "custom-styled-component";
import { useNavigate } from "react-router-dom";
import { getPost, clearError } from "redux/slices/postSlice";


export const Feed = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useSelector(state => state.auth)
  const { error, posts, loading } = useSelector((state) => state.post);
  const navigate = useNavigate()
  const dispatch = useDispatch()



  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate("/")
  //   }
  // },[currentUser])

  useEffect(() => {

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    dispatch(getPost())
  }, [error])
  return (
    <>
      <FeedHeader />
      <CreatePostModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <FeedPage>
        <LeftSideCard />
        <Main>
          <CreatePost setIsOpen={setIsOpen} />
          {
            loading ? <Loader /> : posts?.map(post => <Post key={post.id} content={post.content} likes={post.likes} postPhoto= {post.postPhoto} />)

          }

        </Main>
        <RightSideCard />
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

const Main = styled.main`
  min-height: 100vh;
  height: fit-content;
`;
