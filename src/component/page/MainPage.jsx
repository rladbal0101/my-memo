import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import MemoList from '../list/MemoList';

const Wrapper = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
`;

const Container = styled.div`
  width: 100%;

`;

function MainPage(props) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        {/* 메모 목록 */}
        <MemoList />

        {/* 작성하기 버튼 */}
        <Button
          onClick={() => {
            navigate("./");
          }}
        />

      </Container>
    </Wrapper>
  );
}

export default MainPage;