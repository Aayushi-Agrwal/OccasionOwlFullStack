import SignupFlow from "@/app/features/signup/components/signupform";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Signup() {
  return (
    <main className="w-screen h-screen">
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-2xl tracking-wider pb-8">Create your account</h1>
        <form className="flex flex-col gap-8 items-center justify-center">
          <div className="relative group">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="bg-inherit border-2 h-12 rounded-md w-[20rem] px-4 text-sm peer"
            />
            <label
              htmlFor="email"
              className="transform text-white transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-md group-focus-within:text-sm peer- peer-valid:text-sm group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-2 peer-valid:pl-0"
            >
              Email address
            </label>
          </div>

          <div className="relative group">
            <input
              id="password"
              name="password"
              type="password"
              required
              className="bg-inherit border-2 h-12 rounded-md w-[20rem] px-4 text-sm peer"
            />
            <label
              htmlFor="password"
              className="transform text-white transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-md group-focus-within:text-sm peer-valid:text-sm group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-2 peer-valid:pl-2"
            >
              Password
            </label>
          </div>
          <button
            className="h-12 w-full flex text-lg bg-violet-700 px-16 py-2 justify-center rounded-lg items-center transition hover:translate-y-0.5 cursor-pointer"
            type="submit"
          >
            Sign Up
          </button>
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

          <div className="h-12 w-full flex gap-4 text-lg border-2 border-white py-2 justify-center rounded-lg items-center transition hover:translate-y-0.5 cursor-pointer">
            <FontAwesomeIcon icon={faGoogle} /> Continue with Google
          </div>
        </div>
      </div>
    </main>
  );
}
