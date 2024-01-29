import Dashboard from "../Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "src/components/features/auth/RequireAuth";
import DetailsDashboard from "../Dashboard/DetailsDashboard";
import DetailsDashboardEdit from "../Dashboard/DetailsDashboardEdit";
import Inventory from "../Inventory/Inventory";
import Products from "../Products/Products";
import ShoppingList from "../Dashboard/ShoppingList/ShoppingList";
import CreateDiet from "../DietCreator/CreateDiet";
import DietDetails from "../DietCreator/DietDetails";
import Admin from "../admin/Admin";
import EditUser from "../admin/EditUser";
const ROLES = {
  USER: "User",
  ADMIN: "Admin",
};

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route element={<RequireAuth allowedRoles={[ROLES.USER, ROLES.ADMIN]} />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/inventory" element={<Inventory />} />
        <Route path="/createDiet" element={<CreateDiet />} />
        <Route path="/createDiet/dietDetails/:id" element={<DietDetails />} />
        <Route path="/shoppingList" element={<ShoppingList />} />
        <Route path="/details" element={<DetailsDashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:id/edit" element={<EditUser />} />
        <Route path="/details/:id/edit" element={<DetailsDashboardEdit />} />
      </Route>
      <Route path="*" element={""} />
    </Routes>
  );
};

export default AuthenticatedApp;
