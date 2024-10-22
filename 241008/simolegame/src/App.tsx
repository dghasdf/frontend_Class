import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Box from "./components/Box";

const GlobalStyleds = createGlobalStyle`
  ${reset}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100vh;
`;

const BoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  display: inline-block;
  width: 80px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const choice = {
  rock: {
    name: "rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlgEpqkAI7I5aELDAFl8tLzuo6kEFdnVd-vQ&s",
  },
  scissors: {
    name: "scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmmCSKZf2Y0-4QucHo2XEsm1uBWe-T-76OSA&s",
  },
  paper: {
    name: "paper",
    img: "data:image/png;base64,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",
  },
};

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgeMent(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgeMent = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "win" : "lose";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "win" : "lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "win" : "lose";
    }
  };

  return (
    <>
      <GlobalStyleds />
      <Wrapper>
        <BoxGroup>
          <Box title={"you"} item={userSelect} result={result} />
          <Box title={"computer"} item={computerSelect} result={result} />
        </BoxGroup>
        <ButtonGroup>
          <Button onClick={() => play("scissors")}>가위</Button>
          <Button onClick={() => play("rock")}>바위</Button>
          <Button onClick={() => play("paper")}>보</Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
};

export default App;
