import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import PostViewPage from "./page/PostViewPage";
import PostWritePage from "./page/PostWritePage";

const MainTitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>미니블로그</MainTitleText>;
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
