import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
`;

const Container = styled.div`
  width: 100%;
`;

const MemoContainer = styled.div`

`;

const MemoTitleText = styled.p`

`;
const MemoContentText = styled.p`

`;

function MemoViewDetailPage(props) {
  const navigate = useNavigate();

  // 삭제 기능 여기..?

  return (
    <Wrapper>
      <Container>
        {/* 뒤로가기 버튼 */}
        <Button
          title="뒤로가기"
          onClick={() => {
            navigate("/");
          }}
        />
        <MemoContainer>
          {/* 제목 표시 부분 */}
          <MemoTitleText></MemoTitleText>
          {/* 내용 표시 부분 */}
          <MemoContentText></MemoContentText>
        </MemoContainer>

        {/* 수정 버튼 */}
        <Button
          title="수정"
          onClick={() => {
            navigate("/memo-write");
          }}
        />
        {/* 삭제 버튼 */}
        <Button
          title="삭제"
          onClick={() => {}}
        />
      </Container>
    </Wrapper>
  );
}

export default MemoViewDetailPage;