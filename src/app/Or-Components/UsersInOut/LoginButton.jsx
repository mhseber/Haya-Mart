"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <div>
      <button className="btn" onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
}
