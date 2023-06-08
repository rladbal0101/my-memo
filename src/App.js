import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";

const MainTitleText = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 20px 0;
  background-color: #6688ff;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>Memo</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/memo-write" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
