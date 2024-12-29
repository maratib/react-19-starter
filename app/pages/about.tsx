import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About React" },
    { name: "description", content: "About React Router!" },
  ];
}

export default function AboutPage() {
  return (
    <div className="">
      <h1>About Page</h1>
    </div>
  );
}
