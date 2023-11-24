import { ReactNode } from "react";
import Navigation from "src/components/organisms/Navigation/Navigation";
import { Wrapper } from "./MainTemplate.styles";
import SearchBar from "src/components/organisms/SearchBar/SearchBar";
import NewsSection from "../NewsSection/NewsSection";
type MainTemplateProps = {
  children: ReactNode;
};

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
