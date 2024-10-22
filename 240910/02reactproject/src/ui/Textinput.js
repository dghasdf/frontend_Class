import React from "react";

import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${(height) => height && `height${height}px`}
  hight: 500px;
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`;

const Textinput = ({ height }) => {
  return <StyledTextarea height={height}>Textinput</StyledTextarea>;
};

export default Textinput;