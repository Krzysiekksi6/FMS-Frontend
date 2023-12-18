import { NewSectionHeader, Wrapper } from "./NewsSection.style";
import { ArticleWrapper } from "./NewsSection.style";
import { TitleWrapper } from "./NewsSection.style";
import { ContentWrapper } from "./NewsSection.style";
import { Button } from "src/components/atoms/Button/Button.styles";

const NewsSection = () => {
  const image = null;
  return (
    <Wrapper>
      <NewSectionHeader>Twoja dieta</NewSectionHeader>

      <ArticleWrapper>
        <TitleWrapper>
          <h3>Dzisiaj</h3>
          <p>Śniadanie: Jajecznica</p>
          <p>Śniadanie II: Kanapki z szynką i Mozarellą</p>
          <p>Obiad: Makaron z Łososiem w sosie pomidorowym</p>
          <p>Kolacja: Kanapki z dżemem</p>
          <p>Przekąska: Jabłko</p>
        </TitleWrapper>
        <ContentWrapper>
          {/* <p>{content}</p> */}
          {image ? <img src="" alt="" /> : null}
        </ContentWrapper>
        {/* @ts-expect-error */}
        <Button isBig>Podgląd</Button>
      </ArticleWrapper>

      <ArticleWrapper>
        <TitleWrapper>
          <h3>Jutro</h3>
          <p>Śniadanie</p>
          <p>Śniadanie II</p>
          <p>Obiad</p>
          <p>Kolacja</p>
          <p>Przekąska</p>
        </TitleWrapper>
        <ContentWrapper>
          {/* <p>{content}</p> */}
          {image ? <img src="" alt="" /> : null}
        </ContentWrapper>
        <Button isBig>Podgląd</Button>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default NewsSection;
