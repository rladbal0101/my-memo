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

  const { memos, onSubmit, nextId } = props;

  return (
    <Wrapper>
      <Container>
        {/* 메모 목록 */}
        <MemoList memos={memos} onSubmit={onSubmit} nextId={nextId} />

        {/* 작성하기 버튼 */}
        <Button
          title="작성하기"
          onClick={() => {
            navigate("/memo-write");
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;