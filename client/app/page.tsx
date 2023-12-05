"use client";

import { useState } from "react";
import ChatRoom from "./layouts/Chatroom";
import { Login } from "./layouts/Login";

export default function Home() {
  const [login, setLogin] = useState(false);
  return <>{login ? <ChatRoom /> : <Login setLoginState={setLogin} />}</>;
}
