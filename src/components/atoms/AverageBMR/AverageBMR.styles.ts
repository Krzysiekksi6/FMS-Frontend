import styled from 'styled-components';

export const AverageBMR = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  background: ${({ theme, value }) => {
    if (value > 18.5 && value < 24.9) return theme.colors.success;
    if (value > 25 && value < 29.9) return theme.colors.warning;
    if (value > 30) return theme.colors.error;
    return theme.colors.grey;
  }};
`;
