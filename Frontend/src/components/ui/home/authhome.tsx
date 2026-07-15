import { Link } from "react-router";
import { Button } from "../button";

export default function AuthHome() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-4 rounded-full border px-4 py-1 text-sm text-muted-foreground">
          Minimal • Secure • Modern
        </span>

        <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
          Authentication
          <br />
          Boilerplate
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          A clean authentication starter built with React, Spring Boot,
          JWT Authentication, PostgreSQL and Shadcn UI.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link to="/signup">
            <Button size="lg" className="cursor-pointer">
              Get Started
            </Button>
          </Link>

          <Link to="/login">
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer"
            >
              Login
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-sm border p-6">
            <h3 className="font-semibold">JWT Auth</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Secure access and refresh token authentication.
            </p>
          </div>

          <div className="rounded-sm border p-6">
            <h3 className="font-semibold">Spring Boot</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Production-ready REST API with best practices.
            </p>
          </div>

          <div className="rounded-sm border p-6">
            <h3 className="font-semibold">React + Shadcn</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Clean UI components with light and dark mode support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}