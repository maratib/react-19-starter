import { ThemeToggle } from "@/components/misc/theme-toggle";
import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <h1>Default Layout</h1>
      <aside>
        <Link to="/admin">Admin</Link>
        <Link to="/" className="ml-10">
          Home
        </Link>
        <Link to="/about" className="ml-10">
          About
        </Link>
        <span className="ml-10">
          <ThemeToggle />
        </span>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
