"use client";

import { useState } from "react";
import ChatRoom from "./layouts/Chatroom";
import { Auth } from "./layouts/Auth";
import useFirebaseUser from "./hooks/useFirebaseUser";

export default function Home() {
  // const [login, setLogin] = useState(false);
  const user = useFirebaseUser;
  return <>{user != null ? <ChatRoom /> : <Auth />}</>;
}
