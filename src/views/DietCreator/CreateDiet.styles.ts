import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-template-columns: 150px 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
