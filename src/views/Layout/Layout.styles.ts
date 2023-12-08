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

export const Navbar_Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const Logo_Wrapper = styled.div``;
export const Actions_Wrapper = styled.div``;

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

export const Register_Button = styled.button`
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

export const Login_Button = styled.button`
  background-color: #f7f8fa;
  padding: 1rem 2rem;
  border-radius: 12px;
  border: none;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

export const Header_Wrapper = styled.header`
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
