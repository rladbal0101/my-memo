import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  width: 500px;
  height: ${props => props.height && props.height + 'px'};
  padding: 16px 12px;
  font-size: 14px;
`;

function TextInput(props) {
  const { height, value, onChange } = props;
  return (
    <StyledTextarea height={height} value={value} onChange={onChange} />
  );
}

export default TextInput;