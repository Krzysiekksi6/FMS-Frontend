import { Wrapper } from "../Root/Root.styles";
import Dashboard from "../Dashboard/Dashboard";
import MainTemplate from "src/templates/MainTemplate/MainTemplate";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "src/components/features/auth/RequireAuth";
import DetailsDashboard from "../Dashboard/DetailsDashboard";
import DetailsDashboardEdit from "../Dashboard/DetailsDashboardEdit";
import Inventory from "../Inventory/Inventory";
import Products from "../Products/Products";
const ROLES = {
  USER: "User",
};

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/details" element={<DetailsDashboard />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/details/:id/edit"
              element={<DetailsDashboardEdit />}
            />
          </Route>
          <Route path="*" element={""} />
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
