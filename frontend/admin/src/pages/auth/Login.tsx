"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@shared/ui/card";
import { Button } from "@shared/ui/button";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Login data:", data);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-50">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <h1 className="mb-2 text-center text-2xl font-bold">Sign In</h1>
        <p className="mb-6 text-center text-sm text-slate-600">
          New to Our Product?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Create an Account
          </a>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              {...register("email")}
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter Email Address"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              {...register("password")}
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter Password"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Keep me signed in
            </label>
            <a href="/forgot" className="text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>

          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
            Sign In
          </Button>
        </form>

        {/* <div className="mt-6 text-center text-sm text-slate-500">Or sign in using:</div>
        <div className="mt-3 space-y-2">
          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full">
            Continue with Facebook
          </Button>
        </div> */}
      </Card>
    </div>
  );
}