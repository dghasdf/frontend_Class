import React from "react";
import styled from "styled-components";

const Wrapper = stled.div`
border: 1px solid grey;
border-radius:8px;
padding: 8px 16px;
width: calc(100% - 32px)
cursor:pointer;
background: #fff
trans
&:hover{
background:lightgrey
}
`;

const CommentListItem = ({ comment }) => {
  return <Wrapper>{comment}</Wrapper>;
};

export default CommentListItem;
Item;
