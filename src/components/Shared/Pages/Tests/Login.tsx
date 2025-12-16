/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AppForm } from "@/components/app-form/app-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema, TLoginFormValue } from "@/schema/example.schema";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: TLoginFormValue) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Card */}
        <div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
          {/* Header */}
          <div className="px-6 pt-8 pb-6">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-slate-900 text-white grid place-items-center shadow-sm">
                <span className="text-lg font-semibold">V</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-900">
                  Welcome back
                </h1>
                <p className="text-sm text-slate-500">
                  Please sign in to continue
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <AppForm<TLoginFormValue>
            schema={loginSchema}
            defaultValues={{
              rememberMe: false,
            }}
            onSubmit={onSubmit}
            className="px-6 pb-6 space-y-4"
          >
            {({ register, formState: { errors } }) => (
              <>
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium block">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                    <Input
                      {...register("email")}
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                    />
                  </div>
                  {errors?.email && (
                    <p className="text-red-500 mt-1">
                      {(errors.email as { message?: string })?.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium block"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                    <Input
                      {...register("password")}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-[#0A400C] transition-colors cursor-pointer"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {errors?.password && (
                    <p className="text-red-500 mt-1">
                      {(errors.password as { message?: string })?.message}
                    </p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      {...register("rememberMe")}
                      type="checkbox"
                      className="w-4 h-4 rounded accent-black"
                    />
                    <span>Remember me</span>
                  </label>
                  <Link href="#">Forgot password?</Link>
                </div>

                {/* Sign In Button */}
                <Button
                  type="submit"
                  className="w-full bg-black font-semibold py-3 transition-all duration-300 transform cursor-pointer"
                >
                  Login
                </Button>

                {/* Divider */}
                <div className="relative py-2">
                  <div className="h-px bg-slate-200" />
                  <span className="absolute left-1/2 -translate-x-1/2 -top-1.5 bg-white px-3 text-xs text-slate-500">
                    or
                  </span>
                </div>

                {/* Social */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    className="font-semibold py-3 transition-all duration-300 transform cursor-pointer"
                  >
                    Google
                  </Button>
                  <Button
                    type="button"
                    className="font-semibold py-3 transition-all duration-300 transform cursor-pointer"
                  >
                    GitHub
                  </Button>
                </div>
              </>
            )}
          </AppForm>

          {/* Footer */}
          <div className="bg-slate-50 px-6 py-5 text-center">
            <p className="text-sm text-slate-600">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="font-semibold text-slate-900 hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Tiny note */}
        <p className="mt-4 text-center text-xs text-slate-500">
          By signing in you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
