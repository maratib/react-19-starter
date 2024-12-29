import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Setting React" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function AdminPage() {
  return (
    <div className="">
      <h1>Settings Page</h1>
    </div>
  );
}
