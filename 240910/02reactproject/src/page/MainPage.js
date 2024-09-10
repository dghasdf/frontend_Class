import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  border: 1px solid #ccc;
  padding: 16px;
  maring: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & * {
    margin-bottom: 16px;
  }
`;

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <container>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostList posts={data} onClick={(item) => navigate(``)} />
      </container>
    </Wrapper>
  );
};

export default MainPage;
