import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { InputField, InputFieldPassword } from "@/app/components/Input";
import { BoxButton, BoxButtonWhite } from "@/app/components/Button";

export default function Signup() {
  return (
    <main className="w-screen h-screen">
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-2xl tracking-wider pb-8">Create your account</h1>
        <form className="flex flex-col gap-6 items-center justify-center">
          <div className="relative group">
            <InputField
              id="email"
              name="email"
              label="Email address"
              type="email"
            />
          </div>

          <div className="relative group">
            <InputFieldPassword label="Password" />
          </div>
          <BoxButton type="submit" name="Sign Up" />
        </form>
        <p className="pt-4">
          Already have an account?{" "}
          <Link className="text-violet-300" href="/">
            Log in
          </Link>
        </p>
        <div className="flex gap-6 flex-col items-center justify-center">
          <div className="relative flex pt-6 items-center w-[20rem]">
            <div className="flex-grow border-t border-white"></div>
            <span className="flex-shrink mx-4 text-white">OR</span>
            <div className="flex-grow border-t border-white"></div>
          </div>

          <BoxButtonWhite>
            <FontAwesomeIcon icon={faGoogle} /> Continue with Google
          </BoxButtonWhite>
        </div>
      </div>
    </main>
  );
}
