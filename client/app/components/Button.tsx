import Link from "next/link";

interface Props {
  name: string;
  type: "button" | "submit" | "reset" | undefined;
}

export const LinkButton = () => {
  return (
    <Link
      className="flex text-lg bg-violet-700 px-16 py-2 justify-center rounded-lg items-center transition hover:translate-y-0.5 cursor-pointer"
      href="/login"
    >
      Log in
    </Link>
  );
};

export const BoxButton: React.FC<Props> = ({ name, type }) => {
  return (
    <button
      className="h-12 w-full flex text-lg bg-violet-700 px-16 py-2 justify-center rounded-lg items-center transition hover:translate-y-0.5 cursor-pointer"
      type={type}
    >
      {name}
    </button>
  );
};
