import { CircleUserRound, LayoutDashboard } from "lucide-react";
import { Link } from "react-router";
import { sidebarLink } from "../../utils/links";
import useAuthStore from "../../stores/auth-store";

export default function Sidebar() {
  const user = useAuthStore((state)=> state.user)
  return (
    <div className="bg-accent w-49">
      {/*Profile */}
      <div className="flex flex-col py-12 items-center">
        <CircleUserRound size={48} />
        <p>Welcome {user && user.role}</p>
      </div>
      {/* navlink */}
      {sidebarLink.map((item) => {
        return (
          <Link
            key={item.label}
            to={item.link}
            className="flex px-4 py-4 gap-2 hover:bg-amber-400"
          >
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </Link>
        );
      })}
    </div>
  );
}
