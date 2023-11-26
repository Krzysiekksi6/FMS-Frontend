import { forwardRef } from "react";
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

const FormField = forwardRef(
  (
    { onChange, value, label, name, id, type = "text", isTextarea, ...props },
    ref
  ) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        {isTextarea ? (
          <Input
            isTextarea
            as="textarea"
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            data-testid={label}
            {...props}
            ref={ref}
          />
        ) : (
          <Input
            name={name}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            data-testid={label}
            {...props}
            ref={ref}
          />
        )}
      </Wrapper>
    );
  }
);

export default FormField;
