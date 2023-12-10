"use client";

import "@/app/lib/firebase";
import { AuthProvider } from "./hooks/authProvider";
import AppLayout from "./layouts/AppLayout";
import AuthStateChanged from "./layouts/AuthStateChanged";
const dotenv = require("dotenv");
dotenv.config();

export default function Home({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  // const user = useFirebaseUser();
  // const pathname = usePathname();
  // const isApp = pathname.startsWith("/app");
  // return <>{user != null ? <Chatroom /> : <Auth />}</>;

  <AuthProvider>
    <AppLayout>
      <AuthStateChanged>
        <Component {...pageProps} />
      </AuthStateChanged>
    </AppLayout>
  </AuthProvider>;
}
