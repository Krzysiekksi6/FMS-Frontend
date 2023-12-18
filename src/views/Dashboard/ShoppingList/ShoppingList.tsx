import React from "react";
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

const ShoppingList = () => {
  const shoppingListData = [
    {
      id: 1,
      category: "Warzywa",
      items: [
        {
          name: "Marchewka",
          quantity: "1 szt.",
          icon: "<MdLocalGroceryStore />",
        },
        {
          name: "Pomidor",
          quantity: "5 szt.",
          icon: "<MdLocalGroceryStore />",
        },
        { name: "Ogórek", quantity: "3 szt.", icon: "<MdLocalGroceryStore />" },
      ],
    },
    {
      id: 2,
      category: "Nabiał",
      items: [
        { name: "Mleko", quantity: "1 l", icon: "<MdLocalGroceryStore />" },
        { name: "Ser", quantity: "200 g", icon: "<MdLocalGroceryStore />" },
        { name: "Jajka", quantity: "10 szt.", icon: "<MdLocalGroceryStore />" },
      ],
    },
    // Dodaj więcej kategorii i produktów według potrzeb
  ];

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

          {shoppingListData.map((category) => (
            <li key={category.id}>
              <TitleWrapper>
                <h3>{category.category}</h3>
              </TitleWrapper>
              <ContentWrapper>
                <ul>
                  {category.items.map((item, index) => (
                    <li key={index}>
                      {item.name} - {item.quantity}
                    </li>
                  ))}
                </ul>
              </ContentWrapper>
            </li>
          ))}
          <ButtonWrapper>
            <Button isBig>Pobierz PDF</Button>
          </ButtonWrapper>
        </ShoppingListWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default ShoppingList;
