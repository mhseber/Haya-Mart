"use client";

import { useState } from "react";
import LoginPage from "./LoginForm";
import RegisterPage from "./RegisterForm";
import { FaUserCircle, FaUserPlus } from "react-icons/fa";

export default function AuthUsersPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div
      className="min-h-screen flex flex-col gap-6 pt-20 justify-center items-center bg-cover bg-center relative z-0"
      style={{
        backgroundImage:
          "url('https://wallpaper.forfun.com/fetch/84/84738f85d5f04b91e003c35a0b5c40e2.jpeg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Buttons */}
      <div className="relative flex gap-4 pt-20 ">
        <button
          onClick={() => setActiveTab("login")}
          className={`btn btn-xl flex rounded-xl text-white font-semibold
            ${activeTab === "login" ? "bg-sky-600" : "bg-sky-500/60"}`}
        >
          <FaUserCircle className="text-xl text-white/90" />
          LOGIN
        </button>

        <button
          onClick={() => setActiveTab("register")}
          className={`btn btn-xl flex rounded-xl text-white font-semibold
            ${activeTab === "register" ? "bg-purple-600" : "bg-purple-500/60"}`}
        >
          <FaUserPlus className="text-xl text-white/90" />
          CREATE ACCOUNT
        </button>
      </div>

      {/* Border */}
      <div className="relative w-[500px] border-b-2 border-white/40"></div>

      {/* Forms */}
      <div className="relative">
        {activeTab === "login" ? <LoginPage /> : <RegisterPage />}
      </div>
    </div>
  );
}
