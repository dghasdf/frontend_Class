import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInpit from "../ui/Textinput";
import Button from "../ui/Button";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  margon: 0 auto;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Conainer = styled.div`
  width: 100%;
  max-width: 720px;
  & * {
    margin-bottom: 16px;
  }
`;

const PostWritePage = () => {
  const [title,setTitle] = useState("");
    const[content,setContent] = useState("");
    const navigate = useNavigate();
  )
  return (
    <div>
      <Conainer>
        <TextInpit value={title} height={20} onChange={(e)=> setTimeout}/>
        <TextInpit height={480} />
        <Button title="글작성하기" onCick={()=>navigate}>
      </Conainer>
    </div>
  );
};

export default PostWritePage;
