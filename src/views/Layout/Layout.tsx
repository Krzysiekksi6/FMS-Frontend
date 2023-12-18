import { Link } from "react-router-dom";
import {
  ActionsWrapper,
  HeaderWrapper,
  LoginButton,
  RegisterButton,
  LogoWrapper,
  NavbarWrapper,
  Title,
  Wrapper,
  ImageWrapper,
  RecipeWrapper,
  SectionTitle,
} from "./Layout.styles";
import Image from "src/assets/img/about-background-image.png";
import RecipeList from "./Recipes/RecipeList";

const Layout = () => {
  return (
    <>
      <Wrapper>
        <NavbarWrapper>
          <LogoWrapper>
            <h1>Foody App</h1>
          </LogoWrapper>
          <ActionsWrapper>
            <LoginButton>
              <Link to={"login"}>Przepisy kulinarne</Link>
            </LoginButton>
            <LoginButton>
              <Link to={"login"}>Logowanie</Link>
            </LoginButton>
          </ActionsWrapper>
        </NavbarWrapper>
        <HeaderWrapper>
          <div className="hello">
            <Title>
              Cześć, <br></br>witaj w Foodie
            </Title>
            <RegisterButton>
              <Link to={"register"}>Dołącz do nas</Link>
            </RegisterButton>
          </div>
          <div className="hi">
            <ImageWrapper>
              <img src={Image} alt="" />
            </ImageWrapper>
          </div>
        </HeaderWrapper>
      </Wrapper>
      <RecipeWrapper>
        <SectionTitle>Przepisy kulinarne</SectionTitle>
        <RecipeList />
      </RecipeWrapper>
    </>
  );
};

export default Layout;
