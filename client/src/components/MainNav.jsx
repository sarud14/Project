import { Link } from "react-router";

export default function MainNav() {
  return (
    <div className="flex justify-between navbar shadow-sm bg-accent">
      <div className="flex gap-4">
        <Link className="btn btn-ghost text-xl" to="/">LOGO</Link>
        <Link className="btn btn-ghost text-xl" to="/">Home</Link>
        <Link className="btn btn-ghost text-xl" to="/about">About</Link>
      </div>
      <div className="flex gap-4">
        <Link className="btn btn-ghost text-xl" to="/register">Register</Link>
        <Link className="btn btn-ghost text-xl" to="/login">Login</Link>
      </div>
    </div>
  );
}
