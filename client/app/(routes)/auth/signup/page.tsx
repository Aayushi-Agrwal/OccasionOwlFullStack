import { SignupForm } from "@/app/features/signup/components/SignupForm";

export default function Signup() {
  return (
    <main className="w-screen h-screen">
      <SignupForm
        title="Create your account"
        buttonTitle="Sign up"
        message="Already have an account?"
        messageAction=" Log in"
      />
    </main>
  );
}
