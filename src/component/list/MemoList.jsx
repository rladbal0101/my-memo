import React from 'react';
import styled from 'styled-components';
import MemoListItem from './MemoListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function MemoList(props) {
  const { memos, onSubmit, nextId } = props;
  // console.log(memos);

  return (
    <Wrapper>
      <MemoListItem memos={memos} onSubmit={onSubmit} nextId={nextId} />
      {/* {memos.map(memo => {
        return (
          <MemoListItem key={memo.id} memo={memo} />
        );
      })} */}
    </Wrapper>
  );
}

export default MemoList;