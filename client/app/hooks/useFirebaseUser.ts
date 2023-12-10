"use client";
import { auth } from "@/app/lib/firebase";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

export default function useFirebaseUser(opts?: {
  canGoHomeIfUnauthorized: boolean;
}) {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user && opts?.canGoHomeIfUnauthorized) {
        router.replace("/auth");
        console.log("signed out");
        return;
      } else {
        setUser(user);
        console.log("authenticated", user);
      }
    });
  }, [opts?.canGoHomeIfUnauthorized, router]);

  const login = async (
    e: { preventDefault: () => void },
    email: string,
    password: string
  ) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/app/chatroom");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return null;
      });
  };

  const signup = async (
    e: { preventDefault: () => void },
    email: string,
    password: string
  ) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        router.push("/chatroom");
        // ...
      })
      .catch((error: { code: any; message: any }) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const logout = async () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/auth");
        console.log("Signed out successfully");
        setUser(null);
      })
      .catch((error: { code: any; message: any }) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return { user, login, signup, logout };
}
