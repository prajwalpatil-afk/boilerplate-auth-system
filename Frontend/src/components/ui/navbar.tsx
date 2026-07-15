import { NavLink } from "react-router";
import { Button } from "./button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          AUTH<span className="text-muted-foreground">.</span>
        </NavLink>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-muted font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink to="/login">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "ghost"}
                size="sm"
                className="cursor-pointer"
              >
                Login
              </Button>
            )}
          </NavLink>

          <NavLink to="/signup">
            {({ isActive }) => (
              <Button
                variant={isActive ? "default" : "outline"}
                size="sm"
                className="cursor-pointer"
              >
                Signup
              </Button>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}