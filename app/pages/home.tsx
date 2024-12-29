import { Button } from "@/components/ui/button";
import type { Route } from "./+types/home";
import logoDark from "@/assets/logo-dark.svg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home React" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function HomePage() {
  return (
    <div className="">
      <h1>Home Page</h1>
      <Button>Click ME</Button>
      <img
        src={logoDark}
        alt="React Router"
        className="hidden w-full dark:block"
      />
    </div>
  );
}
