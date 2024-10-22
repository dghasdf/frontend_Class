import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
display:flex
flex-direction:column;
justify-content: center;
align-items:flex-start;
& * {
margin-bottom:16px;
}
`;

const CommentList = ({ Comments }) => {
  console.log(Comments);
  return (
    <Wrapper>
      {Comments.map((comment) => {
        return <CommentListItem key={comment.id} comment={comment.content} />;
      })}
    </Wrapper>
  );
};
export default CommentList;
