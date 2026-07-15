import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Login() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md rounded-sm border-2 shadow-none">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Welcome Back
          </CardTitle>

          <CardDescription>
            Sign in to your account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                type="password"
                placeholder="••••••••"
              />
            </div>

            <Button className="w-full cursor-pointer">
              Login
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-foreground underline underline-offset-4 hover:opacity-80"
              >
                Sign up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}