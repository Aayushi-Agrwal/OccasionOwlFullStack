import { LoginForm } from "@/app/features/login/components/loginForm";

export default function Login() {
  return (
    <main className="w-screen h-screen">
      <LoginForm
        title="Welcome back"
        buttonTitle="Log in"
        message="Don't have an account?"
        messageAction=" Sign up"
      />
    </main>
  );
}
