import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "src/hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.username ? (
    <Outlet />
  ) : (
    //   <Outlet />
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
