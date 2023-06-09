import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 720px;
  margin: 0 auto;
  /* display: flex; */
  
`;

const Container = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

const MemoContentText = styled.p`
  font-size: 12px;
  padding: 12px;
`;

function MemoListItem(props) {
  const { memos, nextId } = props;
  console.log(nextId.current);
  console.log(memos[1].content);

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container
        onClick={() => {
          // navigate(`/memo/${memos.id}`);
        }}
      >
        <MemoContentText>{memos[1].content}</MemoContentText>
      </Container>
    </Wrapper>
  );
}

export default MemoListItem;