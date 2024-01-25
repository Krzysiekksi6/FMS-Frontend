import { useState, useEffect } from "react";
import Navigation from "src/components/organisms/Navigation/Navigation";
import SearchBar from "src/components/organisms/SearchBar/SearchBar";
import { Wrapper } from "src/templates/MainTemplate/MainTemplate.styles";
import WastedFoodReport from "./WastedFoodReport";
import ProductsList from "./ProductsList";
import axios from "src/api/axios";

const Products = () => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      <WastedFoodReport />
      <ProductsList />
    </Wrapper>
  );
};

export default Products;
