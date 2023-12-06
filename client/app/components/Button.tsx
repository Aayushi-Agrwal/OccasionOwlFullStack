import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface PropsBox {
  name: string;
  type: "button" | "submit" | "reset" | undefined;
}

interface PropsLink {
  name: string;
  href: Url;
}
export const LinkButton: React.FC<PropsLink> = ({ name, href }) => {
  return (
    <Link
      className="flex text-lg bg-violet-700 px-16 py-2 justify-center rounded-lg items-center transition hover:translate-y-0.5 cursor-pointer"
      href={href}
    >
      {name}
    </Link>
  );
};

export const BoxButton: React.FC<PropsBox> = ({ name, type }) => {
  return (
    <button
      className="h-12 w-full flex text-lg bg-violet-700 px-16 py-2 justify-center rounded-lg items-center transition hover:translate-y-0.5 cursor-pointer"
      type={type}
    >
      {name}
    </button>
  );
};
