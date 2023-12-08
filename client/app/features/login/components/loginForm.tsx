"use client";

import { BoxButton, BoxButtonWhite } from "@/app/components/Button";
import { InputField, InputFieldPassword } from "@/app/components/Input";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import firebase from "firebase/app";
import { auth } from "@/app/lib/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface props {
  title: string;
  buttonTitle: string;
  message: string;
  messageAction: string;
}

export const LoginForm: React.FC<props> = ({
  title,
  buttonTitle,
  message,
  messageAction,
}) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/chatroom");
        console.log("user");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  // const monitorAuthState = async () => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log("authenticated", user);
  //     } else {
  //       console.log("signed out");
  //     }
  //   });
  // };

  // monitorAuthState();
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
        <BoxButton type="submit" name={buttonTitle} onClick={onSubmitLogin} />
      </form>
      <p className="pt-4">
        {message}
        <Link className="text-violet-300" href="/">
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
