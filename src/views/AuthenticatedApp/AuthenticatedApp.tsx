import { Wrapper } from "../Root/Root.styles";
import Dashboard from "../Dashboard/Dashboard";
import MainTemplate from "src/templates/MainTemplate/MainTemplate";




const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Dashboard />
      </Wrapper>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
