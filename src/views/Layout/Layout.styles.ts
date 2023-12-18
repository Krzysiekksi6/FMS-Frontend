import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: unset;
  height: 100vh;
  background-image: linear-gradient(
    120deg,
    rgb(255, 255, 255),
    rgb(255, 255, 255) 55%,
    #c0c7d6 55%,
    #c0c7d6
  );
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const LogoWrapper = styled.div``;
export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    background-color: #c0c7d6;
    width: 230px;
    height: 100px;
    left: -30px;
    top: -30px;
    z-index: -1;
    border-radius: 12px;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  padding-top: 1.5rem;
  font-size: 3.6rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const RegisterButton = styled.button`
  background-color: #c0c7d6;
  padding: 1rem 2rem;
  border-radius: 12px;
  border: none;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

export const LoginButton = styled.button`
  background-color: #f7f8fa;
  padding: 1rem 2rem;
  border-radius: 12px;
  border: none;
  margin: 0.5rem;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

export const HeaderWrapper = styled.header`
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    display: block;
    width: 55%;
  }
`;

export const RecipeWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;
