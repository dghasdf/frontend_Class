import React from "react";
import styled from "styled-components";

const InPut = styled.input`
  font-size: 18px;
  padding: 8px;
`;

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const TextInput = ({ value, onChange }: Props) => {
  return <InPut value={value} onChange={(e) => onChange(e.target.value)} />;
};

export default TextInput;
