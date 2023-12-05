import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

interface props {
  setLoginState: React.Dispatch<React.SetStateAction<any>>;
}
export const Login: React.FC<props> = ({ setLoginState }) => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-sky-700 to-indigo-800">
      <div className="fixed top-4 left-12 text-2xl bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-200 inline-block text-transparent bg-clip-text">
        OccasionOwl
      </div>
      <div className="w-1/2 pb-32">
        <h1 className="text-3xl font-medium tracking-wide mb-4 w-2/3">
          <div className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-white">
            Welcome to OccasionOwl
            <span className="text-sky-400 text-6xl">.</span>
          </div>
        </h1>
        <p className="bg-gradient-to-r from-blue-200 via-sky-400 to-indigo-100 inline-block text-transparent bg-clip-text text-lg">
          The ultimate event planning chat app. Connects users effortlessly,
          enabling seamless collaboration. Simplifies planning for all
          occasions. Enhance your events with OccasionOwl's intuitive interface
          and real-time coordination features. Your perfect party is just a chat
          away.
        </p>
      </div>
      <div className="flex justify-around w-screen">
        <div className="text-left pb-4">
          <h1 className="text-3xl font-medium tracking-wide">
            Login to continue
            <span className="text-sky-400 text-6xl">.</span>
          </h1>
        </div>

        <div
          onClick={() => setLoginState(true)}
          className="flex gap-2 text-2xl bg-violet-700 pb-2 pt-2 pr-4 pl-4 rounded-lg items-center transition hover:translate-y-1 cursor-pointer"
        >
          <FontAwesomeIcon icon={faGoogle} />
          Sign in with Google
        </div>
      </div>
    </main>
  );
};
