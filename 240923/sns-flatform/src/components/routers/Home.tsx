import styled from "styled-components";
import PostForm from "../PostForm";
import TimeLine from "../TimeLine";

const Wrapp = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  gap: 50px;
  height: 90vh;
`;

const Home = () => {
  return (
    <Wrapp>
      <PostForm />
      <TimeLine />
    </Wrapp>
  );
};

export default Home;
