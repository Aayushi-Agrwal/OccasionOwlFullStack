import React, { useEffect, useState } from "react";
import useAuth from "../hooks/authProvider";
import AuthService from "../hooks/useFirebaseUser";

export default function AuthStateChanged({ children }: { children: any }) {
  const result = useAuth();
  let setUser: (arg0: any) => void;
  if (result) {
    setUser = result.setUser;
  }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AuthService.waitForUser((userCred: any) => {
      setUser(userCred);
      setLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return children;
}
