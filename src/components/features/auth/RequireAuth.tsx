import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectCurrentToken,
  selectCurrentUser,
  selectUserRoles,
} from "./authSlice";

const RequireAuth = ({ allowedRoles }) => {
  const token = useSelector(selectCurrentToken);
  const roles = useSelector(selectUserRoles);
  const username = useSelector(selectCurrentUser);
  const location = useLocation();
  console.log(token);
  console.log(roles);
  console.log(username);

  return token && roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
