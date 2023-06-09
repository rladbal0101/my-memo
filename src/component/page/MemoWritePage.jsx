import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Wrapper = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & * {
    margin-bottom: 10px;
  }
`;

function MemoWritePage(props) {
  const navigate = useNavigate();
  
  const { memos, onSubmit, nextId } = props;
  
  console.log(memos);
  console.log(nextId);

  const [content, setContent] = useState('');
  
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = useCallback((content) => {
    const memo = {
      id: nextId.current,
      content
    };
    
    // const copyMemos = [...memos];
    // copyMemos.push(memo);
    // setMemos(copyMemos);
    
    // setMemos(memos => memos.concat(memo));
    nextId.current += 1;
  }, []);

  const alertMessage = () => {
    const alertMessage = window.confirm("저장 하시겠습니까?");
    if (alertMessage){ 
      alert('저장되었습니다!');
      navigate("/");
    }else{
      alert('취소되었습니다.');
    }
  };

  const handleToggle = useCallback(() => {
    
  }, []);

  const handleRemove = useCallback(() => {
    
  }, []);

  return (
    <Wrapper>
      <Container onSubmit={handleSubmit}>
        {/* 내용 입력 */}
        <TextInput
          height={400}
          value={content}
          onChange={handleChange}
        />

        {/* 완료 버튼 */}
        <Button
          title="완료"
          onClick={alertMessage}
          type='submit'
          // onToggle={handleToggle}
          // onRemove={handleRemove}
        />
      </Container>
    </Wrapper>
  );
}

export default MemoWritePage;