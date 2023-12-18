import React, { useState, useEffect } from "react";
import axios from "src/api/axios";

const Products = () => {
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
    <div>
      <h1>Produkty</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} -- {product.shelfLifeDays}dni</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
