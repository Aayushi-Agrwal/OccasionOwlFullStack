"use client";

import Chatroom from "@/app/features/chatroom/page";
import { withProtected } from "@/app/hooks/useProtectedRoutes";

function chatroom() {
  return <Chatroom />;
}

export default withProtected(chatroom);
