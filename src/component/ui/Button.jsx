import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  border: 2px solid #6688ff;
  border-radius: 8px;
  cursor: pointer;

  &:hover{
    color: #fff;
    border: 2px solid #ccc;
    background-color: #6688ff;
  }
`;

function Button(props) {
  const { onClick } = props;
  return (
    <StyledButton onClick={onClick}>
      버튼
    </StyledButton>
  );
}

export default Button;