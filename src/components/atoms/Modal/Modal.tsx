import React from "react";
import styled from "styled-components";
import { Title } from "../Title/Title.styles";
import { Button } from "../Button/Button.styles";

const ModalWrapper = styled.div`
  position: fixed;
  top: 15%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  background-color: #f6f7b7;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const Modal = ({ message, onClose }) => {
  return (
    <ModalWrapper>
      <div>
        <Title>{message}</Title>
        <Button onClick={onClose}>Spróbuj ponownie</Button>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
