"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/Firebase/firebase.init";
import Image from "next/image";

export default function UserDashboard() {
  const [user] = useAuthState(auth);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center">
      <div className="card bg-slate-800 p-6 w-96 text-center">
        <Image
          src={user.photoURL || "/avatar.png"}
          alt="user"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />
        <h2 className="text-xl mt-4">{user.displayName}</h2>
        <p className="text-gray-400">{user.email}</p>
      </div>
    </div>
  );
}
