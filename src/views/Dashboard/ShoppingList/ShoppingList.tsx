import { useState, useEffect } from "react";
import MainTemplate from "src/templates/MainTemplate/MainTemplate";

import { Wrapper } from "src/views/Root/Root.styles";
import {
  ShoppingListWrapper,
  TitleWrapper,
  ContentWrapper,
  ButtonWrapper,
  SectionWrapper,
} from "./ShoppingList.styles";

import { Button } from "src/components/atoms/Button/Button.styles";
import {
  MdLocalGroceryStore, // Ikona koszyka
} from "react-icons/md";
import axios from "src/api/axios";

const ShoppingList = () => {
  const dietId = 1;
  const [shoppingList, setShoopingList] = useState([]);

  useEffect(() => {
    const fetchShoopingList = async () => {
      try {
        const response = await axios.get(`/generateShoppingList/${dietId}`);
        setShoopingList(response.data);
      } catch (error) {
        console.error("Błąd podczas pobierania listy zakupów z API", error);
      }
    };

    fetchShoopingList();
  }, []);
  return (
    <MainTemplate>
      <Wrapper>
        <ShoppingListWrapper>
          <SectionWrapper>
            <h1>
              Lista zakupów{" "}
              <span>
                <MdLocalGroceryStore />
              </span>
            </h1>
          </SectionWrapper>

          <ContentWrapper>
            <ul>
              {shoppingList.map((item, index) => (
                <li key={index}>
                  {item.productName} - {item.quantity}
                </li>
              ))}
            </ul>
          </ContentWrapper>

          <ButtonWrapper>
            <Button isBig>Pobierz PDF</Button>
          </ButtonWrapper>
        </ShoppingListWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default ShoppingList;
