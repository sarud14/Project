import { Route, Routes } from "react-router";
import Home from "../pages/home";
import About from "../pages/about";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import Dashboard from "../pages/admin/dashboard";
import Manage from "../pages/admin/Manage";
import Layout from "../Layout/Layout";
import LayoutAdmin from "../Layout/LayoutAdmin";

export default function AppRouter() {
  return (
    <Routes>
      {/* Pubilc */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      {/* Private */}
      <Route path="admin" element={<LayoutAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="manage" element={<Manage />} />
      </Route>
    </Routes>
  );
}
