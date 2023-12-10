"use client";

import Chatroom from "@/app/features/chatroom/page";
import { Auth } from "@/app/features/auth/components/authScreen";
import useFirebaseUser from "./hooks/useFirebaseUser";

const dotenv = require("dotenv");
dotenv.config();

export default function Home() {
  const user = useFirebaseUser();
  return <>{user != null ? <Chatroom /> : <Auth />}</>;
}
