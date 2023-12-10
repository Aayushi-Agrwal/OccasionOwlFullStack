import { useRouter } from "next/router";
import React from "react";
import useAuth from "./authProvider";

export function withPublic(Component: any) {
  return function WithPublic(props: React.JSX.IntrinsicAttributes) {
    const auth = useAuth();
    const router = useRouter();

    if (auth) {
      router.replace("/");
      return <h1>Loading...</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
}

export function withProtected(Component: any) {
  return function WithProtected(props: React.JSX.IntrinsicAttributes) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth) {
      router.replace("/login");
      return <h1>Loading...</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
}
