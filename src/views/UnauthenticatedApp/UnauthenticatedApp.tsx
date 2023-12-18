import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import Register from "../Register/Register";

const UnauthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="recipe:id" element={<Register />} />
      <Route path="*" element={""} />
    </Routes>
  );
};

export default UnauthenticatedApp;
