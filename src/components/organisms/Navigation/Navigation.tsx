import { Wrapper, Logo, StyledLink } from "./Navigation.styles";
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
      <StyledLink href="/">Strona główna</StyledLink>
      <StyledLink href="/add-user">Spiżarnia</StyledLink>
      <StyledLink href="/add-user">Dieta</StyledLink>
      <StyledLink href="/">Ustawienia</StyledLink>
      <StyledLink href="/">Wyloguj</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
