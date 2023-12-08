"use client";

import { Auth } from "./layouts/LAuth";
import useFirebaseUser from "./hooks/useFirebaseUser";
import ChatRoom from "./layouts/LChatroom";

export default function Home() {
  const user = useFirebaseUser();
  return <>{user != null ? <ChatRoom /> : <Auth />}</>;
}
