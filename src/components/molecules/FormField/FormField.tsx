import React from "react";
import styled from "styled-components";
import { Input } from "src/components/atoms/Input/Input.styles";
import { Label } from "src/components/atoms/Label/Label.styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = ({ id, name, label, type = "text", onChange, value }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} onChange={onChange} />
    </Wrapper>
  );
};

export default FormField;
