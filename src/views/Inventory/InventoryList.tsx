import React, { useState, useEffect } from "react";
import axios from "src/api/axios";
import {
  NewSectionHeader,
  Wrapper,
  TitleWrapper,
  ContentWrapper,
  ArticleWrapper,
} from "src/templates/NewsSection/NewsSection.style";
import { Button } from "src/components/atoms/Button/Button.styles";

const InventoryList = ({ onItemAdded }) => {
  const [inventoryData, setInventoryData] = useState(null);

  const fetchInventoryData = async () => {
    try {
      // Pobierz dane o spiżarni z backendu
      const response = await axios.get("/getCurrentInventory/1"); // Zastąp "/getCurrentInventory/1" właściwą ścieżką API
      setInventoryData(response.data.inventory);
    } catch (error) {
      console.error("Błąd podczas pobierania danych o spiżarni z API", error);
    }
  };

  useEffect(() => {
    // Pobierz dane o spiżarni po pierwszym renderowaniu komponentu
    fetchInventoryData();
  }, [onItemAdded]);

  // Funkcja do renderowania produktów w danym ArticleWrapper
  const renderCategoryProducts = (categoryName, products) => (
    <ArticleWrapper key={categoryName}>
      <TitleWrapper>
        <h3>{categoryName}</h3>
      </TitleWrapper>
      <ContentWrapper>
        <div>
          {products.map((product) => (
            <p
              key={product.id}
            >{`${product.name}: ${product.quantity} ${product.unit}`}</p>
          ))}
        </div>
      </ContentWrapper>
    </ArticleWrapper>
  );

  // Funkcja do grupowania produktów według kategorii
  const groupProductsByCategory = (inventoryItems) => {
    const groupedProducts = {};

    inventoryItems.forEach((item) => {
      const categoryName = item.product.productCategory.name;
      if (!groupedProducts[categoryName]) {
        groupedProducts[categoryName] = [];
      }

      groupedProducts[categoryName].push({
        id: item.id,
        name: item.product.name,
        quantity: item.quantity,
        unit: item.unit || "szt", // Uzupełnij jednostkę, jeśli dostępna, w przeciwnym razie użyj domyślnej wartości
      });
    });

    return groupedProducts;
  };
  return (
    <Wrapper>
      <NewSectionHeader>Spiżarnia</NewSectionHeader>
      {inventoryData &&
        Object.entries(groupProductsByCategory(inventoryData.items)).map(
          ([categoryName, products]) =>
            renderCategoryProducts(categoryName, products)
        )}
    </Wrapper>
  );
};

export default InventoryList;
