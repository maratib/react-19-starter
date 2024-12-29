import { ThemeToggle } from "@/components/misc/theme-toggle";
import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <h1>Admin Layout</h1>
      <aside>
        <Link to="/">Site</Link>
        <Link to="/admin" className="ml-10">
          Dashboard
        </Link>
        <Link to="/admin/settings" className="ml-10">
          Settings
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
