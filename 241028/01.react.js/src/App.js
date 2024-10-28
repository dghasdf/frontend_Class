import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
background: ${(props)=>props.theme};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input.sttrs({ required: true })`
  background: tomato;
`;
// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   background: ${({ bgcolor }) => bgcolor};
// `;

// const Circle = styled(Box)`
// border-radius: 50%;
// `;

// const Btn = styled.button`
//   background: tomato;
//   color: #fff;
//   border: none;
//   border-radius: 8px;
//   padding: 8px;
// `;

const rotationAnimation = keyframes`
from{
  transform: rotate(0deg);
  border-radius: 0px;
} to{
  transform:  rotate(360deg);
  border-radius: 100px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} is linear infinite alternate;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const App = () => {
  return (
    <Container>
      {/* <Box bgcolor="teal" />
      <Circle bgcolor="tomato" /> */}
      {/* <Btn>Login</Btn>
      <Btn as="a" href="#">
        Login out
      </Btn> */}
      {/* <Input required="true"></Input> */}
      <Box>
        <Emoji>🎈</Emoji>
      </Box>
      <Emoji>🎆</Emoji>
    </Container>
  );
};

export default App;
