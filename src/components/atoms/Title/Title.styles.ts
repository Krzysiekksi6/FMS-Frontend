import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const SecondTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.ll};

  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ThirdTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.l};

  color: ${({ theme }) => theme.colors.darkGrey};
`;

