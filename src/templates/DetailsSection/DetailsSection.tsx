import {
  ArticleWrapper,
  Wrapper,
  DetailsSectionHeader,
  TitleWrapper,
  ContentWrapper,
} from "./DetailsSection.styles";
import { Button } from "src/components/atoms/Button/Button.styles";
const DetailsSection = () => {
  return (
    <Wrapper>
      <DetailsSectionHeader>Szczegóły użytkownika</DetailsSectionHeader>

      <ArticleWrapper>
        <TitleWrapper>
          <h3>Dzisiaj</h3>
          <p>Wzrost: 184</p>
          <p>Waga: 90</p>
        </TitleWrapper>
        <ContentWrapper></ContentWrapper>
        {/* @ts-expect-error */}
        <Button isBig>Edytuj</Button>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default DetailsSection;
