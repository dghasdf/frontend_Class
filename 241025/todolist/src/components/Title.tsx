import React from "react";
import styled from "styled-components";

const Contanier = styled.div``;

const Label = styled.h1``;

interface Props {
  label: string;
}

const Title = ({ label }: Props) => {
  return (
    <Contanier>
      <Label>{label}</Label>
    </Contanier>
  );
};

export default Title;
