import React, { useState } from "react";
import styled from "styled-components";
import DataView from "./components/DataView";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const mockData = ["Typesciprt 복습", "Next.js 연습", "Node.js 공부"];

const App = () => {
  const [toDoList, setoDoList] = useState(mockData);
  const [toDo, setToDo] = useState("");

  const onAdd = () => {
    if (toDo === "") return;
    
    setoDoList([toDo, ...toDoList]);
    setToDo("");
  };

  const onDelete = (todo: string) => {
    setoDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={toDo} onChange={setToDo} />
      <Button label={"추가"} color="#304ffe" onClick={onAdd} />
    </Container>
  );
};

export default App;
