import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import MemoWritePage from "./component/page/MemoWritePage";
import MemoViewDetailPage from "./component/page/MemoViewDetailPage";
import { useCallback, useRef, useState } from "react";

const MainTitleText = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 20px 0;
  background-color: #aaa;
`;

function App() {
  const [memos, setMemos] = useState([
    {
      id: 1,
      content: "오늘은 6월 9일 입니다"
    },
    {
      id: 2,
      content: "금요일 입니다"
    }
  ]);

  const nextId = useRef(3);
  // console.log(nextId);
  // console.log(memos[1].id);
  // console.log(memos[1].content);
  // console.log(nextId.current);

  const handleSubmit = useCallback((content) => {
    const memo = {
      id: nextId.current,
      content
    };
    
    setMemos(memos => memos.concat(memo));
    nextId.current += 1;
  }, []);
  // console.log(memos);

  return (
    <BrowserRouter>
      <MainTitleText>Memo</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage memos={memos} onSubmit={handleSubmit} nextId={nextId} />} />
        <Route path="/memo/:memoId" element={<MemoViewDetailPage/>} />
        <Route path="/memo-write" element={<MemoWritePage memos={memos} onSubmit={handleSubmit} nextId={nextId} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
