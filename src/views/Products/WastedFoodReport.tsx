import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectInventoryId } from "src/components/features/auth/authSlice";
import axios from "src/api/axios";
import { ReportWrapper, ReportDetails } from "./Products.styles";

import {
  TitleWrapper,
  ArticleWrapper,
} from "src/templates/NewsSection/NewsSection.style";

import {
  SecondTitle,
  ThirdTitle,
} from "src/components/atoms/Title/Title.styles";

import {
  ProductWrapper,
  ProductDetails,
  ProductName,
  ExpiryDate,
} from "src/components/atoms/ExpiryDate/ExpiryDate";

import { Button } from "src/components/atoms/Button/Button.styles";

const WastedFoodReport = () => {
  const inventoryId = useSelector(selectInventoryId);
  const [wastedFoodReport, setWastedFoodReport] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/getWastedFoodReport/${inventoryId}`);
      setWastedFoodReport(response.data);
    } catch (error) {
      console.error("Błąd podczas pobierania danych z API", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ReportWrapper>
      {console.log(wastedFoodReport)}
      <TitleWrapper>
        <SecondTitle>Raport o Marnowanej Żywności</SecondTitle>
      </TitleWrapper>
      <ReportDetails>
        <ArticleWrapper>
          <ThirdTitle>Zmarnowana żywność!</ThirdTitle>
          {wastedFoodReport.length > 0 ? (
            wastedFoodReport.map((wastedProduct) => (
              <ProductWrapper key={wastedProduct.id}>
                <ProductDetails>
                  <ExpiryDate>
                    <span>{`${wastedProduct.productName}:`}</span>
                    {` ${wastedProduct.quantity} ${wastedProduct.unit}`}
                  </ExpiryDate>
                </ProductDetails>
              </ProductWrapper>
            ))
          ) : (
            <TitleWrapper>
              <ThirdTitle>Brak zepsutej żywności :)</ThirdTitle>
            </TitleWrapper>
          )}
        </ArticleWrapper>
      </ReportDetails>

      <Button onClick={() => fetchData()}>Pobierz aktualny raport</Button>
    </ReportWrapper>
  );
};
export default WastedFoodReport;
