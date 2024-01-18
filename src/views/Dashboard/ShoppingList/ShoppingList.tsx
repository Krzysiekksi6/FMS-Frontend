import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import ShoopingListPDF from "./ShoopingListPDF";
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
import { selectUserDietId } from "src/components/features/auth/authSlice";

const ShoppingList = () => {
  const dietId = useSelector(selectUserDietId);
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

  const handlePdfDocument = () => {
    console.log("PDF downloading...");
    ReactPDF.render(<ShoopingListPDF />, `./example.pdf`);
  };
  return (
    <MainTemplate>
      <Wrapper>
        <ShoppingListWrapper>
          <SectionWrapper>
            <h1>
              Lista zakupów{" "}
              {console.log("DIETID: ",dietId)}
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
            <Button isBig>
              <PDFDownloadLink
                document={<ShoopingListPDF shoppingList={shoppingList} />}
                fileName="lista_zakupów.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Ładowanie dokumentu..." : "Pobierz PDF"
                }
              </PDFDownloadLink>
            </Button>
          </ButtonWrapper>
        </ShoppingListWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default ShoppingList;
