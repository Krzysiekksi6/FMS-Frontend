import { theme } from "src/assets/styles/theme";
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

export const ContentWrapper = styled.div`
  padding: 1rem;
`;

export const WeekTitle = styled.h3`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const WeekName = styled.h5`
  font-size: 20px;
  margin-bottom: 1.5rem;
`;

export const DietDetalilsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
  li {
    flex-basis: calc(33.3333% - 0.5rem);
  }
`;

export const DietDetalilsItem = styled.li`
  list-style: none;
  margin: 15px;
  max-width: 30%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 50px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: bold;
  }
`;

export const ParagraphDetails = styled.p`
  font-size: 14px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 1.2rem 2rem;
    background-color: #737c8e;
    color: #fff;

  }
`;
