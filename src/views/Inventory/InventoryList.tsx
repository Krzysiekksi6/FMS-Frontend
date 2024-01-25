import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { differenceInDays, parseISO } from "date-fns";
import { selectInventoryId } from "src/components/features/auth/authSlice";
import axios from "src/api/axios";
import {
  NewSectionHeader,
  Wrapper,
  TitleWrapper,
  ArticleWrapper,
} from "src/templates/NewsSection/NewsSection.style";
import {
  ProductWrapper,
  ProductDetails,
  ProductActions,
  ProductName,
  ExpiryDate,
} from "src/components/atoms/ExpiryDate/ExpiryDate";
import { MdAdd, MdRemove, MdDelete } from "react-icons/md";

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
    const start = parseISO(startDate);
    const end = parseISO(endDate);

    return differenceInDays(end, start);
  };

  const removeItem = async (productId) => {
    console.log(`Usuń produkt o ID: ${productId}`);
    console.log(`Inv ID: ${userInventoryId}`);
    const requestBody = {
      inventoryId: userInventoryId,
      productId,
    };
    const response = await axios.post("/removeItem", requestBody);
    console.log("Produkt został usunięty.", response.data);
    fetchInventoryData();
  };

  const addItem = async (productId) => {
    console.log(`Dodaj produkt o ID: ${productId}`);
    console.log(`Inventory ID: ${userInventoryId}`);
    const requestBody = {
      inventoryId: userInventoryId,
      productId,
    };

    const response = await axios.put("/addItem", requestBody);
    console.log("Produkt został dodany.", response.data);
    fetchInventoryData();
  };

  const removeAllItem = async (productId) => {
    console.log(`Dodaj produkt o ID: ${productId}`);
    console.log(`Inventory ID: ${userInventoryId}`);
    const requestBody = {
      inventoryId: userInventoryId,
      productId,
    };

    const response = await axios.put("/removeAllItem", requestBody);
    console.log("Produkt został dodany.", response.data);
    fetchInventoryData();
  };

  // Funkcja do renderowania produktów w danym ArticleWrapper
  const renderCategoryProducts = (categoryName, products) => (
    <ArticleWrapper key={categoryName}>
      <TitleWrapper>
        <h3>{categoryName}</h3>
      </TitleWrapper>
      <div>
        {products.map((product) => (
          <ProductWrapper key={product.id}>
            <ProductDetails>
              <ProductName>
                <span>{`${product.name}:`}</span>
                {` ${product.quantity} ${product.unit}`}
              </ProductName>
              <ExpiryDate
                value={product.diffrence}
              >{`Pozostało ${product.diffrence} dni`}</ExpiryDate>
            </ProductDetails>
            <ProductActions>
              <span onClick={() => addItem(product.id)}>
                <MdAdd />
              </span>
              <span onClick={() => removeItem(product.id)}>
                <MdRemove />
              </span>
              <span onClick={() => removeAllItem(product.id)}>
                <MdDelete />
              </span>
            </ProductActions>
          </ProductWrapper>
        ))}
      </div>
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
        diffrence: calculateDaysDifference(item.purchaseDate, item.expiryDate),
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
