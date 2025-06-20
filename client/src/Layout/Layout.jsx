import { Outlet } from "react-router";
import MainNav from "../components/MainNav";

export default function Layout() {
  return (
    <div>
      <MainNav />
      <Outlet />
    </div>
  );
}
