"use client";

import { BoxButton, BoxButtonWhite } from "@/app/components/Button";
import { InputField, InputFieldPassword } from "@/app/components/Input";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import useFirebaseUser from "@/app/hooks/useFirebaseUser";
import useAuth from "@/app/hooks/authProvider";
import { withPublic } from "@/app/hooks/withPublic";

interface props {
  title: string;
  buttonTitle: string;
  message: string;
  messageAction: string;
  auth: any;
}

const LoginForm: React.FC<props> = ({
  title,
  buttonTitle,
  message,
  messageAction,
  auth,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { login } = useFirebaseUser();
  const { userState, loginWithGoogle, errorState } = auth;
  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h1 className="text-2xl tracking-wider pb-8">{title}</h1>
      <form className="flex flex-col gap-6 items-center justify-center">
        <div className="relative group">
          <InputField
            id="email"
            name="email"
            label="Email address"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative group">
          <InputFieldPassword
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <BoxButton type="submit" name={buttonTitle} onClick={loginWithGoogle} />
      </form>
      <p className="pt-4">
        {message}
        <Link className="text-violet-300" href="/auth">
          {messageAction}
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
  );
};

export default withPublic(LoginForm);
