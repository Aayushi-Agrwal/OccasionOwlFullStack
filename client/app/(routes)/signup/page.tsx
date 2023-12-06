import { LoginForm } from "@/app/features/login/components/loginForm";

export default function Signup() {
  return (
    <main className="w-screen h-screen">
      <LoginForm
        title="Create your account"
        buttonTitle="Sign up"
        message="Already have an account?"
        messageAction=" Log in"
      />
    </main>
  );
}
