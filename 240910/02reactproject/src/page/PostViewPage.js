import React, { useDebugValue } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../component/list/CommentList";
import Textinput from "../ui/Textinput";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = stlyed.div`
width: calc(100% - 32px);
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin: 0auto;
padding: 16px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
`;

const PostContainer = styled.div`
border: 1px solid grey;
border-radius: 8px;
paddingL 8px 16px
`;

const TitleText = styled.p`
font-size:28px
font-weight:500`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
`;

const CommentLabel = styled.p`
font-size:16px
font-weight: 500`;

const PostViewPage = () => {
  const navigate = useNavigate();
  const { postId } = useParms();
  const post = data.find((item) => {
    return item.id == postId;
  });
  console.log(post);
  return (
    <Wrapper>
      <Container>
        <Button title="뒤로가기" onClick={() => navigate("/")} />
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <contentText>{post.content}4</contentText>
        </PostContainer>
        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />
        <Textinput height={40} />
        <Button title="댓글작성하기" onClick={() => navigate("/")} />
      </Container>
    </Wrapper>
  );
};

export default PostViewPage;
