import styled from "styled-components";

export const ShoppingListWrapper = styled.div`
  margin: 25px;
  background-color: #e9e6db;
  width: 100%;
  max-width: 500px;
  padding: 40px 50px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  list-style-type: none;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-top-right-radius: 15px;
`;

export const SectionWrapper = styled.div`
  h1 {
    font-size: 1.6rem;
    margin-bottom: 15px;
    color: #4a4e4d;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    color: #4a4e4d;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

export const ContentWrapper = styled.div`
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }

  li:last-child {
    border-bottom: none; /* Usunięcie dolnej krawędzi ostatniego elementu */
  }

  svg {
    margin-right: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;
