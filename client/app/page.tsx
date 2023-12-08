"use client";

import { Auth } from "./layouts/Auth";
import useFirebaseUser from "./hooks/useFirebaseUser";
import ChatRoom from "./layouts/ChatRoom";

export default function Home() {
  const user = useFirebaseUser();
  return <>{user != null ? <ChatRoom /> : <Auth />}</>;
}
