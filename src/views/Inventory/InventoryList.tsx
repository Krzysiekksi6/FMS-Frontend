import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectInventoryId } from "src/components/features/auth/authSlice";
import axios from "src/api/axios";
import {
  NewSectionHeader,
  Wrapper,
  TitleWrapper,
  ContentWrapper,
  ArticleWrapper,
} from "src/templates/NewsSection/NewsSection.style";

const InventoryList = ({ onItemAdded }) => {
  const [inventoryData, setInventoryData] = useState(null);
  const userInventoryId = useSelector(selectInventoryId);

  const fetchInventoryData = async () => {
    try {
      // Pobierz dane o spiżarni z backendu
      const response = await axios.get(
        `/getCurrentInventory/${userInventoryId}`
      );
      setInventoryData(response.data.inventory);
    } catch (error) {
      console.error("Błąd podczas pobierania danych o spiżarni z API", error);
    }
  };

  useEffect(() => {
    // Pobierz dane o spiżarni po pierwszym renderowaniu komponentu
    fetchInventoryData();
  }, [onItemAdded]);

  const calculateDaysDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Sprawdź, czy daty są prawidłowe
    if (isNaN(start) || isNaN(end)) {
      return "Błąd w danych";
    }

    const differenceInMilliseconds = end - start;
    const differenceInDays = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
    return differenceInDays;
  };

  // Funkcja do renderowania produktów w danym ArticleWrapper
  const renderCategoryProducts = (categoryName, products) => (
    <ArticleWrapper key={categoryName}>
      <TitleWrapper>
        <h3>{categoryName}</h3>
      </TitleWrapper>
      <ContentWrapper>
        <div>
          {products.map((product) => (
            <p key={product.id}>{`${product.name}: ${product.quantity} ${
              product.unit
            } - Pozostało ${calculateDaysDifference(
              product.purchaseDate,
              product.expiryDate
            )} dni`}</p>
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
        unit: item.unit || "szt",
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
