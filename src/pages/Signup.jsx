import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../features/userSlice";
// import axios from "axios";

export default function Signup() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch =  useDispatch();
  // const navigate =  useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    avatar: null,       // ⭐ NEW
    coverImage: null,   // ⭐ NEW
  });

  const handleSignup = async () => {
    if (user.password !== confirmPassword) {
      console.log("password and confirm password does not match !!");
      return;
    }

    // ⭐ Prepare FormData for backend (required for image upload)
    const formData = new FormData();
    formData.append("fullName", user.fullName);
    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("avatar", user.avatar);
    formData.append("coverImage", user.coverImage);

    console.log("FormData ready to send", formData);

    // console.log([...formData.entries()]);
    // [
    //   ["fullName", "Vishnu Prajapati"],
    //   ["username", "VPrajapati" ],
    //   ["email", "vishnu21@gmail.com"],
    //   ["password", "$Vishnu_p_20"],
    //   ["avatar",{}],
    //   ["coverImage",{}]
    // ]

    dispatch(RegisterUser(formData));
    // navigate("/");

  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] px-4">
      <Card className="w-full max-w-md bg-[#181818] border border-zinc-700 text-white shadow-lg">
        <CardHeader className="p-3">
          <CardTitle className="text-3xl text-center font-semibold">
            Create account
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-5">

          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="John Doe"
              className="bg-[#0f0f0f] border-zinc-700 text-white"
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            />
          </div>

          {/* Username */}
          <div className="flex flex-col gap-2">
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="your_username"
              className="bg-[#0f0f0f] border-zinc-700 text-white"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="you@example.com"
              className="bg-[#0f0f0f] border-zinc-700 text-white"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              className="bg-[#0f0f0f] border-zinc-700 text-white"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <Label>Confirm Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              className="bg-[#0f0f0f] border-zinc-700 text-white"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* ⭐ Avatar Upload */}
          <div className="flex flex-col gap-2">
            <Label>Avatar</Label>
            <Input
              type="file"
              accept="image/*"
              className="bg-[#0f0f0f] border-zinc-700 text-white"
              onChange={(e) =>
                setUser({ ...user, avatar: e.target.files[0] })
              }
            />
          </div>

          {/* ⭐ Cover Image Upload */}
          <div className="flex flex-col gap-2">
            <Label>Cover Image</Label>
            <Input
              type="file"
              accept="image/*"
              className="bg-[#0f0f0f] border-zinc-700 text-white"
              onChange={(e) =>
                setUser({ ...user, coverImage: e.target.files[0] })
              }
            />
          </div>

          {/* Create Account Button */}
          <Button
            className="w-full bg-[#FF0000] hover:bg-red-600 text-white font-medium"
            onClick={handleSignup}
          >
            Create Account
          </Button>

          <Separator className="bg-zinc-700" />

          <p className="text-sm text-zinc-400 text-center">
            Already have an account?{" "}
            <NavLink
              className="underline text-white hover:text-blue-500 transition"
              to="/login"
            >
              Sign in
            </NavLink>
          </p>

        </CardContent>
      </Card>
    </div>
  );
}
