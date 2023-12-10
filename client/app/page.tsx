"use client";

import Chatroom from "@/app/features/chatroom/page";
import { Auth } from "@/app/features/auth/components/authScreen";
import useFirebaseUser from "./hooks/useFirebaseUser";
// import { FirebaseAuthProvider } from "./hooks/authContextProvider";

export default function Home() {
  const user = useFirebaseUser();
  // const pathname = usePathname();
  // const isApp = pathname.startsWith("/app");
  return (
    // <FirebaseAuthProvider>
    <>{user != null ? <Chatroom /> : <Auth />}</>
    // </FirebaseAuthProvider>
  );
}
