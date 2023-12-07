// LoginFormApi.tsx
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useRouter } from "next/navigation";

interface LoginFormApiProps {
  onLoginSuccess: (user: any) => void;
  onLoginFailure: (errorCode: string, errorMessage: string) => void;
}

export const LoginFormApi: React.FC<LoginFormApiProps> = ({
  onLoginSuccess,
  onLoginFailure,
}) => {
  const router = useRouter();

  const onLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        onLoginSuccess(user);
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        onLoginFailure(errorCode, errorMessage);
      });
  };

  return null; // This component doesn't render anything directly
};
