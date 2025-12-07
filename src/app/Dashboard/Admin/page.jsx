"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import auth from "@/Firebase/firebase.init";
import { ADMIN_EMAIL } from "@/utils/admin";
import { useEffect } from "react";

export default function AdminDashboard() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/AuthUsers"); // login না থাকলে
      } else if (user.email !== ADMIN_EMAIL) {
        router.push("/dashboard"); // admin না হলে
      }
    }
  }, [user, loading, router]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  if (!user || user.email !== ADMIN_EMAIL) return null;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-4">👑 Admin Dashboard</h1>

      <ul className="space-y-2">
        <li>✅ Manage Products</li>
        <li>✅ Manage Users</li>
        <li>✅ Orders Control</li>
        <li>✅ Site Statistics</li>
      </ul>
    </div>
  );
}
