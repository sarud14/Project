import { Route, Routes } from "react-router";
import Home from "../pages/home";
import About from "../pages/about";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import Dashboard from "../pages/admin/dashboard";
import Manage from "../pages/admin/Manage";
import Layout from "../Layout/Layout";
import LayoutAdmin from "../Layout/LayoutAdmin";
import HomeUser from "../pages/user/HomeUser";
import ProtectRoute from "./ProtectRoute";

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
      <Route
        path="user"
        element={<ProtectRoute el={<Layout />} allows={["ADMIN", "USER"]} />}
      >
        <Route index element={<HomeUser />} />
      </Route>
      {/* Private */}
      {/* <Route path="admin" element={<LayoutAdmin />}> */}
      <Route path="admin" element={<ProtectRoute el={<LayoutAdmin />} allows={["ADMIN"]} />} >
        <Route index element={<Dashboard />} />
        <Route path="manage" element={<Manage />} />
      </Route>
    </Routes>
  );
}
