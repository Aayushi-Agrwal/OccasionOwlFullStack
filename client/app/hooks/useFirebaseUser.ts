"use client";
import { auth } from "@/app/lib/firebase";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

export default function useFirebaseUser() {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // router.refresh;
        setUser(user);
        console.log("authenticated", user);
      } else {
        console.log("signed out");
      }
    });
  }, [router]);

  const login = (
    e: { preventDefault: () => void },
    email: string,
    password: string
  ) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/chatroom");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return null;
      });
  };

  return { user, login };
}
