import { useRef } from "react";
import { delay, motion, stagger } from "framer-motion";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: "Source Sans 3", sans-serif; 
  background: linear-gradient(135deg, #e09, #d0e);
}

  ul,li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background: rgba(255, 170, 255, 0.2);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const boxmyVariants = {
  hover: { scale: 2, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

const App03 = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  console.log(biggerBoxRef);
  // null / undeifined: 값이 아직 정의되지 않은 상태
  // 1) 원래는 진짜로 값이 들어와야하는데 어떠한 경우에 의해서아직 값이 들어오지 못한 경우 오류로 인해서 값을 받을 수 없는 부득의한 경우
  // 2) 오타, 에러, 오류로 인해서 값을 받을 수 없는 부득의한 경우 >null: 의도적으로 유효하지 않은 값을 정의한 상태 일부러, 계획적으로 해당값에 정아ㅣ하지 않는상황
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            drag
            dragSnapToOrigin
            dragElastic={3}
            dragConstraints={biggerBoxRef}
            variants={boxmyVariants}
            whileHover="hover"
            whileTap="click"
          />
        </BiggerBox>
      </Wrapper>
    </>
  );
};

export default App03;
