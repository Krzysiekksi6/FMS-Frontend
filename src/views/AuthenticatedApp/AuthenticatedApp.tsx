import { Wrapper } from "../Root/Root.styles";
import Dashboard from "../Dashboard/Dashboard";
import MainTemplate from "src/templates/MainTemplate/MainTemplate";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "src/components/features/auth/RequireAuth";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectCurrentUser,
  selectCurrentToken,
} from "src/components/features/auth/authSlice";

const ROLES = {
  USER: "User",
};

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
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  return (
    <Routes>
      <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
        <Route path="" element={<App />} />
      </Route>
      <Route path="*" element={""} />
    </Routes>
  );
};

export default AuthenticatedApp;
