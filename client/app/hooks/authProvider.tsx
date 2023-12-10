import { JSX, ProviderProps, createContext, useContext, useState } from "react";
import AuthService from "./useFirebaseUser";
import { User } from "firebase/auth";

interface IAuthContext {
  userState: User;
  errorState: Error;
  loginWithGoogle: any;
  logout: any;
  setUser: any;
}
const authContext = createContext<IAuthContext | null>(null);

export default function useAuth() {
  return useContext(authContext);
}

export function AuthProvider(props: any) {
  const [userState, setUserState] = useState<User | null>(null);
  const [errorState, setErrorState] = useState("");

  const loginWithGoogle = async () => {
    interface AuthResult {
      user?: User;
      error?: any;
    }
    const result: AuthResult = await AuthService.loginWithGoogle();

    if ("user" in result) {
      const { user } = result;
      setUserState(user ?? null);
    } else {
      const { error } = result;
      setErrorState(error ?? "");
    }
  };

  const logout = async () => {
    await AuthService.logout();
    setUserState(null);
  };
  const value = {
    userState,
    errorState,
    loginWithGoogle,
    logout,
    setUserState,
  };

  return <authContext.Provider value={value} {...props} />;
}
