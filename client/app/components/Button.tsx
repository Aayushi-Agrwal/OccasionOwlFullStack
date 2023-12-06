interface Props {
  name: string;
  type: "button" | "submit" | "reset" | undefined;
}

export const LinkButton = () => {};

export const Button: React.FC<Props> = ({ name, type }) => {
  return (
    <button
      className="h-12 w-full flex text-lg bg-violet-700 px-16 py-2 justify-center rounded-lg items-center transition hover:translate-y-0.5 cursor-pointer"
      type={type}
    >
      {name}
    </button>
  );
};
