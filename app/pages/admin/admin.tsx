import type { Route } from "./+types/admin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin React" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function AdminPage() {
  return (
    <div className="">
      <h1>Dashboard Page</h1>
    </div>
  );
}
