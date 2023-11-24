import { NewSectionHeader, Wrapper } from "./NewsSection.style";
import { ArticleWrapper } from "./NewsSection.style";
import { TitleWrapper } from "./NewsSection.style";
import { ContentWrapper } from "./NewsSection.style";
import { Button } from "src/components/atoms/Button/Button.styles";

const NewsSection = () => {
  const image = null
  return (
    <Wrapper>
      <NewSectionHeader>Dane o użytkowniku</NewSectionHeader>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            architecto vel numquam?
          </p>
        </TitleWrapper>
        <ContentWrapper>
          {/* <p>{content}</p> */}
          {image ? <img src="" alt="" /> : null}
        </ContentWrapper>
        <Button isBig>Click</Button>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default NewsSection;
