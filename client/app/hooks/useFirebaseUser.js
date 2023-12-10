// "use client";
// import { auth } from "@/app/lib/firebase";
// import { User } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { useEffect, useState } from "react";

// export default function useFirebaseUser() {
//   const [user, setUser] = useState<User | null>(auth.currentUser);
//   const router = useRouter();
//   useEffect(() => {
//     auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         // router.refresh;
//         setUser(user);
//         console.log("authenticated", user);
//       } else {
//         console.log("signed out");
//       }
//     });
//   }, [router]);

//   const login = async (
//     e: { preventDefault: () => void },
//     email: string,
//     password: string
//   ) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         router.push("/app/chatroom");
//         console.log(user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//         return null;
//       });
//   };

//   const signup = async (
//     e: { preventDefault: () => void },
//     email: string,
//     password: string
//   ) => {
//     e.preventDefault();

//     await createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user);
//         router.push("/chatroom");
//         // ...
//       })
//       .catch((error: { code: any; message: any }) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//         // ..
//       });
//   };

//   const logout = async () => {
//     signOut(auth)
//       .then(() => {
//         // Sign-out successful.
//         router.push("/auth");
//         console.log("Signed out successfully");
//       })
//       .catch((error: { code: any; message: any }) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//         // ..
//       });
//   };

//   return { user, login, signup, logout };
// }

import { FirebaseApp, getApp } from "firebase/app";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

class AuthService {
  auth;
  constructor(firebaseApp) {
    this.auth = getAuth(firebaseApp);
  }

  waitForUser(callback) {
    return onAuthStateChanged(this.auth, (userCred) => {
      callback(userCred);
    });
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((userCred) => {
        return {
          user: userCred.user,
        };
      })
      .catch((error) => {
        return {
          error: error.message,
        };
      });
  }
  async logout() {
    await signOut(this.auth);
  }
}

export default new AuthService(getApp());
