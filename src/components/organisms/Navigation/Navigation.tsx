import { Wrapper, Logo, StyledLink } from "./Navigation.styles";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Foody
          <br />
          App
        </h1>
      </Logo>
      <StyledLink>{<Link to={"/auth"}>Strona główna</Link>}</StyledLink>
      <StyledLink>{<Link to={"/auth/inventory"}>Spiżarnia</Link>}</StyledLink>
      <StyledLink>
        {<Link to={"/auth/createDiet"}>Stwórz dietę</Link>}
      </StyledLink>
      <StyledLink>
        {<Link to={"/auth/products"}>Katalog produktów</Link>}
      </StyledLink>
      <StyledLink>{<Link to={""}>Ustawienia</Link>}</StyledLink>
      <StyledLink>{<Link to={""}>Wyloguj</Link>}</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
