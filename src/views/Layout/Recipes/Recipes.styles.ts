import { ViewWrapper } from "src/components/molecules/ViewWrapper/ViewWrapper";
import styled from "styled-components";

export const RecipesListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: .1rem;
  li {
    flex-basis: calc(
      33.3333% - 0.5rem
    ); /* Ustaw szerokość elementu na 1/3 z odstępem 1rem */
  }
`;

export const RecipesSectionHeader = styled.h2`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const RecipesArticleWrapper = styled.li`
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

export const RecipesTitleWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const RecipesContentWrapper = styled.div`
  display: flex;

  img {
    max-width: 200px;
    margin-left: 35px;
    object-fit: cover;
  }
`;
