"use client";

import Chatroom from "@/app/features/chatroom/page";
import { Auth } from "@/app/features/auth/components/authScreen";
import useFirebaseUser from "./hooks/useFirebaseUser";
import { usePathname } from "next/navigation";
import "@/app/lib/firebase";
const dotenv = require("dotenv");
dotenv.config();

export default function Home() {
  const user = useFirebaseUser();
  const pathname = usePathname();
  const isApp = pathname.startsWith("/app");
  return <>{user != null ? <Chatroom /> : <Auth />}</>;
}
