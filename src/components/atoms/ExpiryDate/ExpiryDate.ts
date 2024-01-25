import styled from "styled-components";

export const ProductWrapper = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductDetails = styled.div``;
export const ProductActions = styled.div`
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.white};
    margin: 0.5rem;
    border-radius: 2px;
    cursor: pointer;
  }
`;

export const ProductName = styled.p`
  span {
    font-weight: bold;
  }
  margin-bottom: 0.1em;
`;

export const ExpiryDate = styled.p`
  font-size: 14px;
  font-style: italic;
  margin-top: 0;
  color: ${({ theme, value }) => {
    if (value > 7) {
      return theme.colors.success;
    } else if (value >= 5) {
      return theme.colors.warning;
    } else {
      return theme.colors.error;
    }
  }};
`;
