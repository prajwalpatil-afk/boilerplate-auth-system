import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { use, useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import type RegisterData from "@/models/registerdata"
import { registerUser } from "@/services/authservice";

export default function Signup() {

  const [data, setData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }); 

  const[loading, setLoading] = useState<boolean>(false);
  const[error, setError] = useState(null);

  const navigate = useNavigate();

  //handling form change
  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    //console.log(event.target.name, event.target.value);
    setData((value) => ({
      ...value,
      [event.target.name]: event.target.value
    }))
  }

  //handling form submit
  const handleFormSubmit = async (event:React.FormEvent) => {
    console.log("Form Submitted");
    event.preventDefault();
    console.log(data);
  
    //validations
    if(data.name.trim() === "" || data.email.trim() === "" || data.password.trim() === "" || data.confirmPassword.trim() === ""){
      toast.error("Please fill all the fields");
      return;
    }

    //form submit for registration
    try {
      setLoading(true);
      const response = await registerUser(data);
      console.log(response);
      toast.success("User registered successfully");
      setData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login");
    }
    catch (error) {
      console.log(error);
      toast.error("Error registering user");
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <Card className="w-full max-w-md rounded-sm border-2 shadow-none">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Create Account
          </CardTitle>

          <CardDescription>
            Create an account to get started.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                name="name"
                value={data.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                name="email"
                value={data.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                name="password"
                value={data.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleInputChange}
              />
            </div>

            <Button type="submit" className="w-full cursor-pointer">
              Create Account
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-foreground underline underline-offset-4 hover:opacity-80"
              >
                Login
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
