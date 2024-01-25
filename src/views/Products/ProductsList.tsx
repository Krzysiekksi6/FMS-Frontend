import { useState, useEffect } from "react";
import axios from "src/api/axios";

import {
  NewSectionHeader,
  Wrapper,
  ArticleWrapper,
} from "src/templates/NewsSection/NewsSection.style";

import { ThirdTitle } from "src/components/atoms/Title/Title.styles";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Błąd podczas pobierania danych z API", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <NewSectionHeader>Produkty w Systemie</NewSectionHeader>
      <ArticleWrapper>
        <ThirdTitle>Produkt / przydatność </ThirdTitle>
        {products.map((product) => (
          <p key={product.id}>
            {product.name} - {product.shelfLifeDays}dni
          </p>
        ))}
      </ArticleWrapper>
    </Wrapper>
  );
};

export default ProductsList;
