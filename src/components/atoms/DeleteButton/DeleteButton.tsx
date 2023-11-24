// @ts-ignore
import DeleteIcon from 'src/assets/icons/delete-icon.svg?react';
import { StyledButton } from './DeleteButton.styles';

const DeleteButton = (props) => {
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
};

export default DeleteButton;
