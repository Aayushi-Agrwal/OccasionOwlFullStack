"use client";
import { auth } from "@/app/lib/firebase";
import { User } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useFirebaseUser() {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        router.replace("/");
        setUser(user);
        console.log("authenticated", user);
      } else {
        console.log("signed out");
      }
    });
  }, [router]);

  return user;
}
