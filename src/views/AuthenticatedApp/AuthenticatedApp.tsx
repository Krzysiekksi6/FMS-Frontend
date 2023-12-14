import Dashboard from "../Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "src/components/features/auth/RequireAuth";
import DetailsDashboard from "../Dashboard/DetailsDashboard";
import DetailsDashboardEdit from "../Dashboard/DetailsDashboardEdit";
import Inventory from "../Inventory/Inventory";
import Products from "../Products/Products";
import ShoppingList from "../Dashboard/ShoppingList/ShoppingList";
const ROLES = {
  USER: "User",
};

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/shoppingList" element={<ShoppingList />} />
        <Route path="/details" element={<DetailsDashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id/edit" element={<DetailsDashboardEdit />} />
      </Route>
      <Route path="*" element={""} />
    </Routes>
  );
};

export default AuthenticatedApp;
