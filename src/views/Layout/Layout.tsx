import { Link } from "react-router-dom";
import {
  Actions_Wrapper,
  Header_Wrapper,
  Login_Button,
  Register_Button,
  Logo_Wrapper,
  Navbar_Wrapper,
  Title,
  Wrapper,
  ImageWrapper,
} from "./Layout.styles";
import Image from "src/assets/img/about-background-image.png";

const Layout = () => {
  return (
    <Wrapper>
      <Navbar_Wrapper>
        <Logo_Wrapper>
          <h1>
            Foody <br /> App
          </h1>
        </Logo_Wrapper>
        <Actions_Wrapper>
          <Login_Button>
            <Link to={"login"}>Logowanie</Link>
          </Login_Button>
        </Actions_Wrapper>
      </Navbar_Wrapper>
      <Header_Wrapper>
        <div className="hello">
          <Title>
            Cześć, <br></br>witaj w Foodie
          </Title>
          <Register_Button>
            <Link to={"register"}>Dołącz do nas</Link>
          </Register_Button>
        </div>
        <div className="hi">
          <ImageWrapper>
            <img src={Image} alt="" />
          </ImageWrapper>
        </div>
      </Header_Wrapper>
    </Wrapper>
  );
};

export default Layout;
