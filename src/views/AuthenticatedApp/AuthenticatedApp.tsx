import { Wrapper } from "../Root/Root.styles";
import Dashboard from "../Dashboard/Dashboard";
import MainTemplate from "src/templates/MainTemplate/MainTemplate";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "src/components/RequireAuth";

const App = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Dashboard />
      </Wrapper>
    </MainTemplate>
  );
};

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<App />} />
      </Route>
    </Routes>
  );
};

export default AuthenticatedApp;
