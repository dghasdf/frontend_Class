import { useState } from "react";
import styled from "styled-components";
import PostForm from "../PostForm";

const Wrapp = styled.div``;

const Home = () => {
  return (
    <Wrapp>
      <PostForm />
    </Wrapp>
  );
};

export default Home;
